import React, { Component } from "react";
import Spinner from "../layout/Spinner"

class Search extends Component {

    state = {
        text: ""
    }


    onChange = e => {
        this.setState({ text: e.target.value })
    }

    onSubmit = event => {
        event.preventDefault();
        if (this.state.text === "") {
            this.props.setAlert("Please Enter Something...", "light")
        } else {
            this.props.searchRecipes(this.state.text);
            this.setState({ text: "" });
            // console.log("CLICK")
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search A Recipe ..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-success btn-block" />
                </form>
                {this.props.showClear ? <button className="btn btn-light btn-block" onClick={this.props.clearRecipes}> Clear Search Results</button> : null}
            </div>
        )
    }
}

export default Search;