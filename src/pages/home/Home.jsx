import React from "react";
import { useGetMoviesQuery } from "../../redux/api/movie.api";
import Movies from "../../components/MoviesCom";
import Showcase from "../../components/Showcase";

const Home = () => {
  const { data, isLoading } = useGetMoviesQuery({
    page: 1,
    without_genres: "18,36,10749",
  });

  return (
    <div className="container mx-auto">
      {isLoading && <div className="text-center text-3xl">Loading...</div>}
      <Showcase />
      <Movies data={data} />
    </div>
  );
};

export default Home;
