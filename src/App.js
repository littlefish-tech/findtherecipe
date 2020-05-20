import React, { Fragment, Component } from 'react';
import './App.css';
import NavBar from "./components/layout/NavBar"


class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <div>find the recipe</div>
      </Fragment >
    );
  }
}

export default App;
