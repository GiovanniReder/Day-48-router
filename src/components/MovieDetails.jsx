import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";

const MovieDetails = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://www.omdbapi.com/?apikey=99ea514a&s=banana");
        const json = await response.json();
        setFilm(json.Search);
        console.log(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(film);

  const image = film.length > 0 ? film[2].Poster : null;

  return (
    <>
      {image && (
        <Card className="d-flex justify-contente-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{film[2].Title}</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default MovieDetails;
