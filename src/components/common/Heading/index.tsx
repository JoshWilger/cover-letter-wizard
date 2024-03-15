import logo from '@assets/Main/logo-dark.svg';

const Heading = () => {
  return (
    <div className="flex flex-col items-center gap-7 mb-10 md:mb-6 sm:mb-2">
      <img
        src={logo}
        alt="Cover Letter Wizard"
        className="w-[500px] md:w-[400px] sm:w-[275px]"
      />
      <p className="w-full px-5 text-2xl sm:text-xl font-light text-center text-slate-200">
        <span className="underline decoration-sky">Personalized cover letter writing made easy!</span>{' '}
      </p>
      <div className="px-20 md:px-3 max-w-[1200px]">
        <p className="text-l px-20 md:px-0 text-center text-slate-200" >
          Our cover letter writing assistant blends advanced technology with expert insights from professional cover letter writers 
          and reviewers, ensuring each cover letter is both well-structured and personifies your best qualities. Its intuitive
          interface enhances your original ideas, transforming them into creatively crafted, convincing cover letters.
        </p>
      </div>
    </div>
  );
};

export default Heading;
