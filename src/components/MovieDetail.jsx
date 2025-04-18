import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loading"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const MovieDetail = () => {
  let navigate = useNavigate();
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get("https://www.omdbapi.com/", {
          params: {
            i: movieID,
            apikey: import.meta.env.VITE_API_KEY,
          },
        });
        console.log(response.data);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieID]);

  if (isLoading) return <Loader />;

  return (
    <>
      <button
        className="cursor-pointer my-5 ms-5 flex items-center gap-4"
        onClick={() => {
          navigate(-1);
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />{" "}
        <span className="font-semibold text-2xl"> Go Back</span>
      </button>
      <div className="w-screen flex justify-center items-center mt-10 mb-5">
        <div className="flex flex-col lg:flex-row gap-4 w-[90%] lg:w-[80%]">
          <div className="w-full lg:w-[40%] flex justify-center items-center">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{movie.Title}</h1>
            <p className="text-gray-700">{movie.Plot}</p>
            <div className="flex flex-wrap gap-2">
              {movie.Genre.split(", ").map((genre, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {genre}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4 ">
              <span className="font-semibold">Director:</span>
              <span>{movie.Director}</span>
            </div>
            <div className="flex gap-4 mt-4">
              <span className="font-semibold">Awards:</span>
              <span>{movie.Awards}</span>
            </div>
            <div className="flex gap-4 mt-2">
              <span className="font-semibold">Cast:</span>
              <span>{movie.Actors}</span>
            </div>
            <div className="flex gap-4 mt-2">
              <span className="font-semibold">Release Date:</span>
              <span>{movie.Released}</span>
            </div>
            <div className="flex gap-4 mt-2">
              <span className="font-semibold">IMDB Rating:</span>
              <span>
                {movie.imdbRating} / <span className="font-semibold">10</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
