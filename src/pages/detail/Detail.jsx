import React, { useEffect } from 'react'
import { useGetSingleMovieImagesQuery, useGetSingleMovieQuery, useGetSingleMovieSimilarQuery } from '../../redux/api/movie.api'
import { useParams } from 'react-router-dom'
import Movies from '../../components/Movies'

const Detail = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetSingleMovieQuery(id)
    const {data: images} = useGetSingleMovieImagesQuery(id)
    const { data: similarData } = useGetSingleMovieSimilarQuery(id);
    console.log(similarData);

    useEffect(()=> {
        window.scrollTo({behavior: "smooth", left: 0, top: 0})
    }, [id])
    
  return (
    <div className="container max-w-7xl mx-auto p-6">
      <div>
        {isLoading && <div className="text-center text-3xl">Loading...</div>}
      </div>

      <div className="h-[600px] bg-gray-400 ">
        <img
          className="w-full h-full bg-center bg-cover object-cover"
          src={"https://image.tmdb.org/t/p/original" + data?.backdrop_path}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2.5 border rounded px-4 py-4 mt-10 mb-10">
        <h1 className="text-3xl">
          {" "}
          <span className="text-red-500">Name: </span> {data?.title}
        </h1>
        <h1 className="text-3xl">
          {" "}
          <span className="text-red-500">Budget: </span>
          {data?.budget}
        </h1>
        <h1 className="text-3xl">
          {" "}
          <span className="text-red-500">Realase Date: </span>{" "}
          {data?.release_date}
        </h1>
        <h1 className="text-3xl">
          {" "}
          <span className="text-red-500">Vote Average: </span>
          {data?.vote_average}
        </h1>
      </div>
      <div className="eight_row flex flex-wrap gap-1  mb-9  ">
        {images?.backdrops?.slice(0, 8)?.map((image) => (
          <img
            key={image.file_path}
            className="w-[300px]"
            src={"https://image.tmdb.org/t/p/original" + image.file_path}
            alt=""
          />
        ))}
      </div>
      <div>
        <Movies data={similarData} />
      </div>
    </div>
  );
}

export default Detail