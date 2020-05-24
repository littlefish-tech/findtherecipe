import React, { Component } from "react";


class Alert extends Component {
    render() {
        return (
            <div>
                {this.props.alert !== null ? (<div className={`alert alert-${this.props.alert.type}`}>
                    <i class="fas fa-exclamation-circle" /> {this.props.alert.msg}
                </div>) : null}
            </div>
        )
    }
}

export default Alert;