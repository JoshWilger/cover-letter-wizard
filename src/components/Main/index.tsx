import InterviewOptionsPanel from './InterviewOptionsPanel';
import ModelResponsePanel from './ModelResponsePanel';
import UserRequestPanel from './UserRequestPanel';

const Main = () => {
  return (
    <main className="flex flex-col items-center sm:items-start gap-12 w-full">
      <InterviewOptionsPanel />
      <div className="flex flex-col items-center gap-10 sm:gap-14 w-full">
        <UserRequestPanel />
        {ModelResponsePanel()}
        <div className="flex flex-col items-center gap-4 sm:gap-10 w-full">
          <h4 className="font-bold text-3xl">How it works</h4>
          <div className="flex flex-col gap-4 px-5 text-left">
            <p>1. Start the conversation by selecting one of the above prompts</p>
            <p>2. Answer questions</p>
            <p>3. Your speech is crafted</p>
            <p>4. Finalize your speech</p>
          </div>
          <p className="italic text-xl">It's that simple!</p>
        </div>
      </div>

    </main>
  );
};

export default Main;
