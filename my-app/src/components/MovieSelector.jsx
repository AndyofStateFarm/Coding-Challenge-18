import React, { useState } from 'react';

const movies = [
    { id: 1, title: 'Jurassic Park', image: `https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg`},
    { id: 2, title: 'Star Wars', image: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png`},
    { id: 3, title: 'Avengers', image: `https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg`},
  ];

  function MovieSelector({ onSelectMovie }) {
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  
    const handleChange = (e) => {
      const selectedId = parseInt(e.target.value);
      const movie = movies.find(movie => movie.id === selectedId);
      setSelectedMovie(movie);
      onSelectMovie(movie);
    };
  
    return (
      <> 
        <img src={selectedMovie.image} alt={selectedMovie.title} /> 

        <select value={selectedMovie.id} onChange={handleChange}>
          {movies.map(movie => (
            <option key={movie.id} value={movie.id}>{movie.title}</option>
          ))}
        </select>
      </>
    );
  }
  
  export default MovieSelector;