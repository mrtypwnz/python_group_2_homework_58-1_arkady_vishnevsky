import React, {Component} from 'react';
import './MovieForms.css';


class MovieForms extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.name !== this.props.name
    }

    render() {
        return (
            <div className={"container"}>
                <div>
                    <input type="text" name="name" value={this.props.name} onChange={this.props.onChangeMovie}/>

                </div>
                <div>

                    <div>
                        <button onClick={this.props.onDeleteMovie}>x
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default MovieForms