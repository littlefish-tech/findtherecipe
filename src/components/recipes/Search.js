import React, { Component } from "react";

class Search extends Component {

    state = {
        text: ""
    }


    onChange = e => {
        this.setState({ text: e.target.value })
    }

    onSubmit = event => {
        event.preventDefault()

        this.props.searchRecipes(this.state.text);
        this.setState({ text: "" });
        console.log("CLICK")
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <input type="text" name="text" placeholder="Search A Recipe ..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Search" className="btn btn-success btn-block" />
                </form>
            </div>
        )
    }
}

export default Search;