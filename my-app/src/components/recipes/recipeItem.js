import React, { Fragment, Component } from "react";

const ReciptItem = (props) => {
    return (
        <Fragment>
            <div className="card grid-2">
                <div className="all-center">
                    <img src={props.recipe.recipe.image} alt="" style={{ width: "200px" }} />
                </div>
                <div>
                    <h4>Name: {props.recipe.recipe.label}</h4>
                    <p>Total Calories: {Math.floor(props.recipe.recipe.calories)}</p>
                    <p>Time need to prepare: {props.recipe.recipe.totalTime} mins</p>
                    <div>Number of Ingredients needs to prepare: {props.recipe.recipe.ingredients.length}
                    </div>
                    <div>
                        <a href={props.recipe.recipe.shareAs} className="btn btn-success btn-sm my-1">Read More</a>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default ReciptItem;