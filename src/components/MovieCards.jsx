const MovieCards = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <img
      src={"https://image.tmdb.org/t/p/w500" + data}
      className="w-50 mr-6.5"
    />
  );
};

export default MovieCards;
