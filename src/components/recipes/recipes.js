import React, { Component } from "react";
import RecipeItem from "./recipeItem";
import Spinner from "../layout/Spinner";

const Recipes = (props) => {

    if (props.loading) {
        return (<Spinner />)
    } else {
        return (
            <div stype={recipeStyle}>
                {props.recipes.map((recipe, index) => (
                    <RecipeItem key={index} recipe={recipe} />)
                )}
            </div>
        )
    }
}

const recipeStyle = {
    display: "grid",
    gridGap: "1rem"

}

export default Recipes;