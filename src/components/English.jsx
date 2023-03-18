import React from 'react';
import Parser from 'html-react-parser';

const English = (props) => {
    const dish = props.dish;
    return (
        <div id="card-container">
                <div id="card-title">{dish.name} Recipe - English</div>
                <div style={{ background: "url('" + dish.english.image + "')", backgroundSize: "cover", backgroundPosition: "center", height: "50vw" }} id="recipe-image"></div>
                <div id="details">{dish.prep ? Parser("Prep time: <span class='detail-value'>" + dish.prep + "</span> |") : " "} {dish.cook ? Parser("Cook time: <span class='detail-value'>" + dish.cook + "</span> |") : ""} Yield: <span className="detail-value">{dish.yield}</span></div>
                <div id="card-items">
                    <span className="card-item-title"><h3>Ingredients</h3></span>
                    {
                        dish.english.ingredients.map(line =>
                            Parser(line)
                        )
                    }
                </div>

                <div id="method">
                    <span className="card-item-title"><h3>Method</h3></span>
                    {
                        dish.english.method.map(line =>
                            Parser(line)
                        )
                    }

                </div>
            </div>
    );
}

export default English;
