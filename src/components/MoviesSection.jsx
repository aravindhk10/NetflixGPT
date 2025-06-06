import MovieCards from "./MovieCards";

const MoviesSection = ({ title, data }) => {
  return (
    <div>
      <div className="">
        <h1 className="font-semibold text-3xl pt-4 pl-20 text-white mb-6">
          {title}
        </h1>
      </div>
      <div className="flex flex-col overflow-x-scroll hide-scrollbar pt-2 pl-20">
        <div className="flex cursor-pointer ">
          {data &&
            data.map((mov) => {
              return <MovieCards key={mov.id} data={mov.poster_path} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MoviesSection;
