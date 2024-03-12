import type { ActionButtonProps } from '@@types/form';
import spinner from '@assets/Main/spinner.svg'
import useForm from '@hooks/useForm';
import { useFormSelector } from '@store/formContext';
import useSpeechRecognition from './useSpeechRecognition';
// import useGetQuestion from './useGetQuestion';

type FormButtonConfig = ActionButtonProps & {
  shouldRender: boolean;
};

const useFormButtonConfig = () => {
  const { formValues: { transcript }, isValid, isEditing, isLoading } = useFormSelector();
  const { handleValidateForm, handleFeedbackForm, handleEditMode, handleSaveEdit, handleCancelEdit } = useForm();
  const { isRecording, isBrowserUnsupported, mediaDeviceErr, setMediaDeviceErr, startSpeechRecognition, stopSpeechRecognition }= useSpeechRecognition();
  // const { handleGetQuestion } = useGetQuestion(!isRetry && isValid);
  
  const isFormReadyToSubmit = Boolean(transcript) && !isRecording;

  const startingSpeechButton = {
    id: 1,
    onClickHandler: handleValidateForm,
    variant: 'primary',
    label: 'I\'m starting from scratch',
    shouldRender: !isValid,
  };

  const submitButton = {
    id: 2,
    onClickHandler: handleValidateForm,
    variant: 'primary',
    label: isLoading ? <img src={spinner} alt='loading' className='mx-8'/> : 'Submit Answer',
    disabled: isLoading || isEditing || !isFormReadyToSubmit,
    shouldRender: isValid && isFormReadyToSubmit,
  };

  const recordButton = {
    id: 3,
    onClickHandler: isRecording ? stopSpeechRecognition : startSpeechRecognition,
    variant: 'primary',
    label: isRecording ? 'Stop Recording' : 'Start Recording Answer',
    tooltipContent: mediaDeviceErr,
    setTooltipContent: setMediaDeviceErr,
    className: isRecording ? 'animate-fade-in-out' : '',
    disabled: isEditing || isFormReadyToSubmit || isBrowserUnsupported,
    shouldRender: isValid && !isFormReadyToSubmit,
  };

  const editButton = {
    id: 4,
    onClickHandler: isEditing ? handleSaveEdit : handleEditMode,
    variant: 'secondary',
    label: isEditing ? 'Save' : 'Edit',
    disabled: isRecording || isLoading,
    shouldRender: isValid,
  };

  const cancelEditButton = {
    id: 5,
    onClickHandler: handleCancelEdit,
    variant: 'secondary',
    label: 'Cancel',
    shouldRender: isValid && isEditing,
  };

  const speechFeedbackButton = {
    id: 6,
    onClickHandler: handleFeedbackForm,
    variant: 'secondary',
    label: 'I\'m looking to enhance a cover letter I have',
    shouldRender: !isValid,
  }

  // const changeQuestionButton = {
  //   id: 6,
  //   onClickHandler: handleGetQuestion,
  //   variant: 'secondary',
  //   label: 'Change question',
  //   className: 'absolute right-0 md:static',
  //   disabled: isRecording || isEditing || isLoading,
  //   shouldRender: isValid,
  // };

  const formButtonsConfig: FormButtonConfig[] = [
    startingSpeechButton,
    submitButton,
    recordButton,
    editButton,
    cancelEditButton,
    speechFeedbackButton,
    // changeQuestionButton,
  ];

  return { formButtonsConfig };
};

export default useFormButtonConfig;
