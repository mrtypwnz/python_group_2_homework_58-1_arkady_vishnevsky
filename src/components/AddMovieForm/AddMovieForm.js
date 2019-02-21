import React, {  } from 'react';
import './AddMovieForm.css';


function AddMovieForm(props) {

    return (
        <div className={"container"}>
            <form>
                <input
                    type="text"
                    value={props.movie.name}
                    onChange={props.onChangeInput}
                />
            </form>
            <div>
                <button onClick={props.onAddMovie}>
                    Add
                </button>
            </div>
        </div>
    )
}


export default AddMovieForm