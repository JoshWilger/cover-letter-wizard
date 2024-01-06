import logo from '@assets/Main/logo-main.svg';

const Heading = () => {
  return (
    <div className="flex flex-col items-center gap-7 mb-10 md:mb-6 sm:mb-2">
      <img
        src={logo}
        alt="Wedding Wordsmith"
        className="w-[500px] md:w-[400px] sm:w-[275px]"
      />
      <p className="w-full px-5 text-2xl sm:text-xl font-light text-center">
        Personalized <span className="underline decoration-orange"> speech writing made easy</span>{' '}
        for brides, grooms, officiants, and beyond
      </p>
      <div className="px-20 md:px-3">
        <p className="text-l px-20 sm:px-0 font-light text-center" >
          Our speechwriting assistant blends advanced technology with expert insights from professional speechwriters 
          and linguists, ensuring each speech is both well-structured and emotionally compelling. Its intuitive
          interface enhances your original ideas, transforming them into beautifully crafted, resonant speeches.
        </p>
      </div>
    </div>
  );
};

export default Heading;
