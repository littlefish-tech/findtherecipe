import React, { Component } from "react";
import RecipeItem from "./recipeItem";

const Recipes = (props) => {

    return (
        <div stype={recipeStyle}>
            {props.recipes.map((recipe, index) => (
                <RecipeItem key={index} recipe={recipe} />)
            )}
        </div>
    )
}

const recipeStyle = {
    display: "grid",
    gridGap: "1rem"

}

export default Recipes;