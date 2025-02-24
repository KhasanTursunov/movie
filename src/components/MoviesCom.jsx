import React from 'react'
import { Link } from "react-router-dom";

const Movies = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 container max-w-7xl mx-auto p-6">
      {data?.results?.map((movie) => (
        <div
          className="border border-gray-300 dark:border-gray-800 dark:bg-gray-900"
          key={movie.id}
        >
          <Link
            to={`/movie/${movie.id}`}
            className="h-[400px]  block bg-gray-400"
          >
            <img
              className="w-full h-full object-cover"
              src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
              alt=""
            />
          </Link>
          <div className="p-1.5">
            <h3
              title={movie.title}
              className="text-xl font-medium line-clamp-1"
            >
              {movie.title}
            </h3>
            <p className="text-yellow-500 font-medium">{movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies