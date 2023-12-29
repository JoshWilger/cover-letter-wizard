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

  const { formValues : { apiKey, question, transcript, editedTranscript } } = formState;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'FORM/UPDATE_FIELD', payload: { name, value } });
  };

  const handleValidateForm = async () => {
    try {
      if (!apiKey) throw new Error('Please provide your OpenAI API Key.');
      onValidate(searchParams);
      const { id, response } = await fetchOpenAICompletion({ searchParams, apiKey, question, transcript });
      dispatch({ type: 'FORM/VALIDATION_SUCCESS' });
      dispatch({ type: 'API/FETCH_SUCCESS', payload: response });
      saveSession({ id, question: response, transcript, search, response: response });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: 'FORM/VALIDATION_FAIL', payload: err.message });
      }
      if (err instanceof AxiosError) {
        dispatch({ type: 'API/FETCH_FAIL', payload: getAxiosError(err)});
      } else {
        dispatch({ type: 'API/FETCH_FAIL', payload: (err as Error).message });
      }
    } finally {
      dispatch({ type: 'API/FETCH_COMPLETE' });
    }
  };
  
  const handleSubmitForm = async () => {
    try {
      handleValidateForm();
      dispatch({ type: 'API/FETCH_START' });
      const { id, response } = await fetchOpenAICompletion({ searchParams, apiKey, question, transcript });
      dispatch({ type: 'API/FETCH_SUCCESS', payload: response });
      saveSession({ id, question, transcript, search, response: response });
    } catch (err) {
      if (err instanceof AxiosError) {
        dispatch({ type: 'API/FETCH_FAIL', payload: getAxiosError(err)});
      } else {
        dispatch({ type: 'API/FETCH_FAIL', payload: (err as Error).message });
      }
    } finally {
      dispatch({ type: 'API/FETCH_COMPLETE' });
    }
  };

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
    handleSubmitForm,
    handleEditMode,
    handleSaveEdit,
    handleCancelEdit,
    handleRetryQuestion,
  };
};

export default useForm;
