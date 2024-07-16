// U08282838

import React from 'react';
import RateMovieButton from './components/RateMovieButton';
import MovieSelector from './components/MovieSelector';
import UploadButton from './components/UploadButton';
import './App.css';

function App() {
  const handleMovieSelect = (movie) => {
    console.log(`Selected movie: ${movie.title}`);
    // Update other parts of the toolbar or application as needed
  };

  return (
    <div className="toolbar">
      <MovieSelector onSelectMovie={handleMovieSelect} />
      <RateMovieButton/>
      <UploadButton/>
    </div>
  );
}

export default App;