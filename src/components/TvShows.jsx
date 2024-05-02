import React, { useState, useEffect } from "react";

const TvShows = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://www.omdbapi.com/?apikey=99ea514a&s=vendetta");
        const json = await response.json();
        setFilm(json.Search);
        console.log(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {film &&
        film
          .filter((element, index) => index < 6)
          .map((film, index) => (
            <div className="my-2 col-6 col-md-4 col-lg-4 col-xl-2 gap-5 " key={index}>
              <img id="imgGallery" style={{ maxHeight: "250px" }} src={film.Poster} alt="" />
            </div>
          ))}
    </>
  );
};

export default TvShows;
