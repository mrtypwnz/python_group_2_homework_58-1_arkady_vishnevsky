import React, { Component, Fragment } from 'react';
import './MainPage.css';
import MovieForms from '../../components/MovieForms/MovieForms';
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [
                {id: 1, name: 'Fight club'},
                {id: 2, name: 'Clockwork Orange'},
            ],
            currentMovie: {name: ''},
        };
    }

    addMovie = (event) => {
        event.preventDefault();
        let currentMovie = {...this.state.currentMovie};
        const now = new Date();
        currentMovie.id = now.getTime();
        let movie = [...this.state.movie, currentMovie];
        this.setState({...this.state, movie, currentMovie: {name: ''}});
    };


    deleteMovie = (id) => {
        let movieId = this.state.movie.findIndex(currentMovie => {
            return currentMovie.id === id;
        });
        const movie = [...this.state.movie];
        movie.splice(movieId, 1);
        this.setState({...this.state, movie});
    };

    editMovie = (id, event) => {
        let value = event.target.value;
        let movieId = this.state.movie.findIndex(movie => {
            return movie.id === id;
        });
        let renamedMovie = {
            id: id,
            name: value
        };
        let movie = [...this.state.movie];
        movie.splice(movieId, 1, renamedMovie);

        this.setState({
            ...this.state, movie, currentMovie: {name: ''}
        });
    };

    changeMovieForm = (event) => {
        event.preventDefault();
        let movie = event.target.value;
        let currentMovie = {
            ...this.state.currentMovie,
            name: movie
        };
        this.setState({
            ...this.state,
            currentMovie
        });
    };

    render() {
        return (
            <Fragment>
                <h3 className={"title"}>add movie</h3>
                <AddMovieForm
                    movie={this.state.currentMovie}
                    onChangeInput={(event) => this.changeMovieForm(event)}
                    onAddMovie={(event) => this.addMovie(event)}
                />
                <br/>
                <h3 className={"title"}>Myshows</h3>
                {this.state.movie.map((currentMovie) => {
                    return <div key={currentMovie.id}>
                        <MovieForms
                            name={currentMovie.name}
                            onChangeMovie={(event) => this.editMovie(currentMovie.id, event)}
                            onDeleteMovie={(event) => this.deleteMovie(currentMovie.id, event)}>
                        </MovieForms>
                    </div>
                })}
            </Fragment>
        )
    }
}


export default MainPage;

