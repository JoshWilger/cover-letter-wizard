import { useRef } from 'react';
import Loader from '@components/common/Loader';
import { loaderElements } from '@components/common/Loader/constants';
import Flicker from '@assets/Main/flicker.svg';
import logo from '@assets/Main/logo-dark-transparent-cropped.svg';
import user from '@assets/Main/user.svg';
import { useFormSelector } from '@store/formContext';
import useIncrementTimeout from '../hooks/useIncrementTimeout';
import useTypingEffect from '../hooks/useTypingEffect';
// import useScrollToRef from '../hooks/useScrollToRef';

const ModelResponsePanel = () => {
  const responsePanelRef = useRef(null);

  const { formValues: { conversationContext }, modelResponse, isLoading } = useFormSelector();
  const { isAnimating } = useTypingEffect(modelResponse[0]);
  const { count } = useIncrementTimeout(isLoading, loaderElements.length);

  // useScrollToRef(responsePanelRef, isLoading || modelMessage.length, count);
  const messages = isLoading ? ["", ...modelResponse] : modelResponse
  const userMessages = conversationContext.filter(context => context.role === 'user').map(message => message.content)

  return (
    messages.map((message, id) => 
    <section className="flex w-[950px] xl:w-[730px] lg:w-[100%] lg:px-[40px] md:px-[20px] sm:px-[10px]" key={id}>
      <img
        src={ userMessages.includes(message) ? user : logo }
        alt={ userMessages.includes(message) ? "User" : "Cover Letter Wizard" }
        className="w-[45px] md:w-[40px] sm:w-[35px] mr-4 md:mr-2 self-start"
      />
      <div className="flex flex-col justify-center w-full min-h-[50px] p-4 sm:p-2 border border-border-default leading-6 rounded-md shadow-sectionInput bg-[#818cdb]">
        <span className="whitespace-pre-line sm:text-sm">
          {isLoading && id === 0 ? <Loader count={count}  /> : message}
          {isAnimating && id === 0 && (
            <img
              src={Flicker}
              alt="flicker"
              className="inline-block w-[10px] animate-flicker"
            />
          )}
        </span>
      </div>
      <div ref={responsePanelRef} />
    </section>
    )
  );
};

export default ModelResponsePanel;
