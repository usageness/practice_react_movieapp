import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    "Matrix",
    "Full Metal Jacket",
    "Oldboy",
    "Star Wars"
]

const movieImages = [
    "https://cdn.pixabay.com/photo/2020/06/09/18/11/box-write-in-it-5279529__340.jpg",
    "https://cdn.pixabay.com/photo/2020/05/20/03/50/gears-5193383_960_720.png",
    "https://cdn.pixabay.com/photo/2020/02/17/15/05/fair-4856748__340.jpg",
    "https://cdn.pixabay.com/photo/2020/06/28/00/35/sky-5347490__340.jpg"
]

class App extends Component {
  render() {
      return (
          <div className="App">
              <Movie title={movies[0]} poster={movieImages[0]}/>
              <Movie title={movies[1]} poster={movieImages[1]}/>
              <Movie title={movies[2]} poster={movieImages[2]}/>
              <Movie title={movies[3]} poster={movieImages[3]}/>
          </div>
      );
  }
}

export default App;