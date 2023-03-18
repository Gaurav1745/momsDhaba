import React, { useEffect, useState } from "react";
import "../css/item.css";
import { SetTitle } from "../components/SetTitle";
import { SetIcon } from "../components/SetIcon";
import Loading from "../components/Loading";
import axios from "../axios";

const Dish = (props) => {
  const [dish, setDish] = useState(),
    [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`/recipes/${props.match.params.id}/information`)
      .then(({ data }) => {
        setDish(data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div>
        <SetIcon />
        <SetTitle title={dish.title} />
        <div id="card-container">
          <div id="card-title">{dish.title}</div>
          <div
            style={{
              background: "url('" + dish.image + "')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "50vw",
            }}
            id="recipe-image"
          ></div>
          <div id="details">
            Ready in:{" "}
            <span className="detail-value"> {dish.readyInMinutes} min </span> |
            Yield:{" "}
            <span className="detail-value"> {dish.servings} Servings</span>
          </div>
          <div id="card-items">
            <span className="card-item-title">
              <h3>Ingredients</h3>
            </span>
            <ul className="checkmark">
              {dish.extendedIngredients?.map((ing, i) => (
                <li key={i}>{ing.original}</li>
              ))}
            </ul>
          </div>
          {dish.instructions && (
            <div id="method">
              <span className="card-item-title">
                <h3>Instructions</h3>
              </span>
              <ol>
                {dish.instructions?.split(". ").map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Dish;
