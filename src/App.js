import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "Matrix",
        poster: "https://cdn.pixabay.com/photo/2020/06/09/18/11/box-write-in-it-5279529__340.jpg"
    },
    {
        title: "Full Metal Jacket",
        poster: "https://cdn.pixabay.com/photo/2020/05/20/03/50/gears-5193383_960_720.png"
    },
    {
        title: "Oldboy",
        poster: "https://cdn.pixabay.com/photo/2020/02/17/15/05/fair-4856748__340.jpg"
    },
    {
        title: "Star Wars",
        poster: "https://cdn.pixabay.com/photo/2020/06/28/00/35/sky-5347490__340.jpg"
    }

]


class App extends Component {

    state = {
        greeting: 'Hello'
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                greeting: 'Hello again!'
            })
        }, 2000)
    }

    render() {
      return (
          <div className="App">
              {this.state.greeting}
              {movies.map((movie, index) => {
                  return <Movie title={movie.title} poster={movie.poster} key={index} />
              })}
          </div>
      );
  }
}

export default App;