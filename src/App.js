import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [

]


class App extends Component {

    state = {

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                movies: [
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
                    },
                    {
                        title: "Trainspotting",
                        poster: "https://cdn.pixabay.com/photo/2020/02/24/06/33/crescent-4875339_960_720.jpg"
                    }
                ]
            })
        },1000)
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