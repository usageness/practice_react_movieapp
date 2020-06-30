import React, { Component } from "react";
import './Movie.css';

class Movie extends Component {
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
            <img src="https://cdn.pixabay.com/photo/2020/05/20/03/50/gears-5193383_960_720.png"/>
        );
    }
}

export default Movie;