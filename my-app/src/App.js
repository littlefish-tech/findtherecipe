import React, { Fragment, Component } from 'react';
import './App.css';
import NavBar from "./components/layout/NavBar"
import Recipes from "./components/recipes/recipes"
import axios from "axios";
import Search from "./components/recipes/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    recipes: [],
    recipe: {},
    loading: false,
    alert: null,
  }

  searchRecipes = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.edamam.com/search?q=${text.trim()}&app_id=${process.env.REACT_APP_RECIPE_APPLICATION_ID}&app_key=${process.env.REACT_APP_RECIPE_APPLICATION_KEY}`);

    console.log(res.data.hits)
    this.setState({ recipes: res.data.hits, loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })

    setTimeout(() => this.setState({ alert: null }), 5000)
  }


  clearRecipes = () => {
    this.setState({ recipes: [], loading: false })
  }

  render() {
    return (
      <Router>
        <NavBar icon="fas fa-utensils" title="Find the Recipe" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Switch>
            <Route exact path="/findtherecipe/" render={props => (
              <Fragment>
                <Search searchRecipes={this.searchRecipes} setAlert={this.setAlert} showClear={this.state.recipes.length > 0 ? true : false} clearRecipes={this.clearRecipes} />
                <Recipes searchRecipes={this.searchRecipes} recipes={this.state.recipes} loading={this.state.loading} />
              </Fragment>
            )} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
