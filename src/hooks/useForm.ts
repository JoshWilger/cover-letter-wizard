import type { ChangeEvent } from 'react';
import type { Session } from '@@types/interviewSession';
import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useFormSelector, useFormDispatch } from '@store/formContext';
import useSession from './useSession';
import fetchOpenAICompletion from '@api/completion';
import { validateRequestOptions as onValidate } from '@utils/validation/validateRequestOptions';
import { getAxiosError } from '@utils/error/error';

const useForm = (retryQuestionCallback?: VoidFunction) => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();

  const formState = useFormSelector();
  const dispatch = useFormDispatch();
  const { session, saveSession } = useSession()

  const { formValues : { apiKey, question, transcript, editedTranscript, conversationContext } } = formState;
  let isFeedback = false;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'FORM/UPDATE_FIELD', payload: { name, value } });
  };

  const handleValidateForm = async () => {
    try {
      onValidate(searchParams);
      dispatch({ type: 'FORM/VALIDATION_SUCCESS' });
      dispatch({ type: 'API/FETCH_START' });
      const { id, response, newContext } = await fetchOpenAICompletion({ searchParams, apiKey, question, transcript, conversationContext, isFeedback });
      if (transcript) { dispatch({ type: 'API/FETCH_SUCCESS', payload: transcript }); }
      dispatch({ type: 'API/FETCH_SUCCESS', payload: response });
      saveSession({ id, question: response, transcript, search, response: response, conversationContext: newContext });
      formState.formValues.conversationContext = newContext; // TODO: convert this to use dispatch()
      formState.formValues.transcript = '';
    } catch (err) {
      if (err instanceof AxiosError) {
        dispatch({ type: 'API/FETCH_FAIL', payload: getAxiosError(err)});
      } else if (err instanceof Error) {
        dispatch({ type: 'FORM/VALIDATION_FAIL', payload: err.message });
      } else {
        dispatch({ type: 'API/FETCH_FAIL', payload: (err as Error).message });
      }
    } finally {
      dispatch({ type: 'API/FETCH_COMPLETE' });
    }
  };

  const handleFeedbackForm = () => {
    isFeedback = true;
    handleValidateForm()
    isFeedback = false;
  }

  const handleEditMode = () => {
    dispatch({ type: 'FORM/EDIT_START', payload: transcript });
  };

  const handleSaveEdit = () => {
    dispatch({ type: 'FORM/EDIT_SAVE', payload: editedTranscript });
  };

  const handleCancelEdit = () => {
    dispatch({ type: 'FORM/EDIT_CANCEL', payload: transcript });
  };

  const handleRetryQuestion = () => {
    dispatch({ type: 'FORM/RETRY_QUESTION', payload: (session as Session).question });
    (retryQuestionCallback as VoidFunction)();
  };

  const resetForm = () => {
    if (!search) dispatch({ type: 'FORM/RESET' });
  }

  useEffect(resetForm, [search]);

  return {
    formState,
    handleChange,
    handleValidateForm,
    handleFeedbackForm,
    // handleSubmitForm,
    handleEditMode,
    handleSaveEdit,
    handleCancelEdit,
    handleRetryQuestion,
  };
};

export default useForm;
