const Heading = () => {
  return (
    <div className="flex flex-col items-center gap-7 mb-10 md:mb-6 sm:mb-2">
      <h1 className="sm:pl-4 text-6xl sm:text-5xl font-semibold">
        <span className="underline decoration-green">Wedding Wordsmith</span>
      </h1>
      <p className="w-full px-5 text-2xl sm:text-xl font-light text-center">
        Personalized <span className="underline decoration-sky"> speech writing made easy</span>{' '}
        for brides, grooms, officiants, and beyond
      </p>
    </div>
  );
};

export default Heading;
