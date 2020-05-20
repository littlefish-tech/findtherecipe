import React, { Fragment, Component } from "react";

const ReciptItem = (props) => {
    return (
        <Fragment>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={props.recipe.recipe.image} alt="" style={{ width: "200px" }} />
                    <h4>Name: {props.recipe.recipe.label}</h4>
                    <p>Total Calories: {props.recipe.recipe.calories}</p>
                    <p>Time need to prepare: {props.recipe.recipe.totalTime} mins</p>
                    <div>Ingredients:
                        <div>1. {props.recipe.recipe.ingredients[0].text}</div>
                        <div>2. {props.recipe.recipe.ingredients[1].text}</div>
                        <div>3. {props.recipe.recipe.ingredients[2].text}</div>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default ReciptItem;