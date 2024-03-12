// import type { Session as SessionType } from '@@types/interviewSession';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@components/common/Layout/Main';
import DialogueInput from '@components/common/DialogueInput';
import ActionButton from '@components/common/Button';
import user from '@assets/Main/user.svg';
import logo from '@assets/Main/logo-dark.svg';
// import useForm from '@hooks/useForm';
import useSession from '@hooks/useSession';

const Session = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const navgiateToMainWithSearchParams = () => navigate(`/${(session as SessionType).search}`);

  // const { handleRetryQuestion } = useForm(navgiateToMainWithSearchParams);

  const { session } = useSession(false, id);

  return (
    <MainLayout tag='main'>
      {session ?
        session.conversationContext?.map((message, id) =>
        <DialogueInput
          key={id}
          src={message.role === 'user' ? user : logo}
          transcript={`${message.content}`}
        />
        )
      :
       <div className="flex flex-col items-center gap-10 w-full mb-6">
        <ActionButton
          onClickHandler={() => navigate('/')}
          variant="primary"
          label={'Start new interview'}
        />
        <DialogueInput
            src={logo}
            transcript={`Couldn't find your session history. Try Starting a new Interview.`}
          />
      </div>
      }
    </MainLayout>
  );
};

export default Session;
