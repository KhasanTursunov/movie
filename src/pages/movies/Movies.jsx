import React, { useState } from "react";
import {
  useGetGenresQuery,
  useGetMoviesQuery,
} from "../../redux/api/movie.api";
import MoviesCom from "../../components/MoviesCom.jsx";
import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  // const [page, setPage] = useState(1);
  const [params, setParams] = useSearchParams();

  const page = params.get("page") || 1;

  const with_genres = params.get("genres") || ""

  const { data, isLoading } = useGetMoviesQuery({
    page,
    without_genres: "18,36,10749",
    with_genres,
  });

  const { data: genreData } = useGetGenresQuery({});

  console.log(genreData);

  const handleChangePage = (p) => {
    if (p === 1) {
      params.delete("page");
    } else {
      params.set("page", p);
    }
    setParams(params);
  };

  const handleChangeGenre = id => {
    params.set("genres", id)
    setParams(params);
  }

  return (
    <div>
      {isLoading && <div className="text-center text-3xl">Loading...</div>}
      <div className="flex gap-2 container max-w-7xl mx-auto overflow-auto pb-2 pt-2">
        {genreData?.genres?.map((genre) => (
          <div
          onClick={() => handleChangeGenre(genre.id)}
            className="whitespace-nowrap dark:bg-[#111111]  bg-slate-300 px-4 py-0.5 rounded-xl select-none cursor-pointer"
            key={genre.id}
          >
            {genre.name}
          </div>
        ))}
      </div>
      <MoviesCom data={data} />
      <div className="flex my-5 justify-center">
        <Pagination
          showSizeChanger={false}
          defaultCurrent={1}
          defaultPageSize={1}
          total={data?.total_pages > 500 ? 500 : data?.total_pages}
          current={page}
          onChange={(page) => handleChangePage(page)}
          // className=" dark:hover:itemActiveBg-white"
        />
      </div>
    </div>
  );
};

export default Movies;
