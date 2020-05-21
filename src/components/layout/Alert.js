import React, { Component } from "react";


class Alert extends Component {
    render() {
        return (
            <div onClick={this.props.clearAlert}>
                {this.props.alert !== null ? (<div className={`alert alert-${this.props.alert.type}`}>
                    <i className="fas-info-circle" />{this.props.alert.msg}
                </div>) : null}
            </div>
        )
    }
}

export default Alert;