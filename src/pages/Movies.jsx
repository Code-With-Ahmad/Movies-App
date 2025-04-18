import React, { useEffect, useState } from "react";
import axiosInstance from "../api/api";
import Loader from "../components/Loading";
import { useSearch } from "../context/SearchContext";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { searchTerm } = useSearch();
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(null);

  const searchTerms = [
    "batman",
    "superman",
    "titanic",
    "avatar",
    "harry potter",
  ]; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        let combined = [];
        for (const term of searchTerms) {
          const response = await axiosInstance.get("", {
            params: {
              s: term,
              apikey: import.meta.env.VITE_API_KEY,
              page: 1,
            },
          });

          if (response.data.Search) {
            combined = [...combined, ...response.data.Search];
          }
        }
        const unique = Array.from(
          new Map(combined.map((item) => [item.imdbID, item])).values()
        );

        setAllMovies(unique);
        setFilteredMovies(unique); 
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching movies: " + error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredMovies(allMovies); 
    } else {
      
      const filtered = allMovies.filter((movie) =>
        movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filtered.length > 0) {
        setFilteredMovies(filtered);
      } else {
        
        const fetchFromAPI = async () => {
          setIsSearching(true); 
          try {
            const response = await axiosInstance.get("", {
              params: {
                s: searchTerm,
                apikey: import.meta.env.VITE_API_KEY,
                page: 1,
              },
            });

            if (response.data.Search) {
              setFilteredMovies(response.data.Search);
            } else {
              setFilteredMovies([]); 
            }
          } catch (error) {
            console.error("Error fetching from API: ", error);
          } finally {
            setIsSearching(false); 
          }
        };

        fetchFromAPI(); 
      }
    }
  }, [searchTerm, allMovies]);

  if (isLoading) return <Loader />;
  if (isSearching) return <Loader />; 
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[95vw] mx-auto my-10 p-4">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div key={movie.imdbID} className="cursor-pointer ">
            <NavLink to={`/movie/${movie.imdbID}`}>
              <div className="w-full flex flex-col items-center">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="h-[400px]"
                />
                <h3 className="font-semibold text-center">{movie.Title}</h3>
              </div>
            </NavLink>
          </div>
        ))
      ) : (
        <div className="text-center col-span-full">No movies found</div>
      )}
    </div>
  );
};

export default Movies;
