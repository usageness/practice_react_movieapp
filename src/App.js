import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [

]


class App extends Component {

    state = { }

    componentDidMount() {
        fetch('https://yts.mx/api/v2/list_movies.json?sort_by=like_count')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }


    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />
        })

        return movies
    }

    render() {
      return (
          <div className="App">
              {this.state.movies ? this._renderMovies() : 'Loading' }
          </div>
      );
  }
}

export default App;