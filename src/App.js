import React, { Fragment, Component } from 'react';
import './App.css';
import NavBar from "./components/layout/NavBar"
import Recipes from "./components/recipes/recipes"
import axios from "axios";
import Search from "./components/recipes/Search"

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


  render() {
    return (
      <Fragment>
        <NavBar icon="fas fa-utensils" title="Find the Recipe" />
        <Search searchRecipes={this.searchRecipes} />
        <Recipes searchRecipes={this.searchRecipes} recipes={this.state.recipes} />
      </Fragment >
    );
  }
}

export default App;