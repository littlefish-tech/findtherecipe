import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h3>
                    <i className={this.props.icon} /> {this.props.title}
                </h3>
            </nav>
        )
    }
}

export default NavBar;