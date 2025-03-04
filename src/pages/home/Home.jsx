import React, { useEffect } from "react";
import { useGetMoviesQuery } from "../../redux/api/movie.api";
import Movies from "../../components/MoviesCom";
import Showcase from "../../components/Showcase";
import { Spin } from "antd";

const Home = () => {
  const { data, isLoading } = useGetMoviesQuery({
    page: 1,
    without_genres: "18,36,10749",
  });

  // Scroll to top when data changes (or add another dependency if needed)
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  }, [data]);

  return (
    <div className="container mx-auto">
      {isLoading && (
        <div className="text-center text-3xl">
          <Spin size="large" />
        </div>
      )}
      <Showcase />
      <Movies data={data} />
    </div>
  );
};

export default Home;
