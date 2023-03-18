import React, { useEffect, useState } from "react";
import CategoryBanner from "../components/CategoryBanner";
import "../css/category.css";
import Dishes from "../components/Dishes";
import { SetTitle } from "../components/SetTitle";
import { SetIcon } from "../components/SetIcon";
import Loading from "../components/Loading";
import catData from "../data1";
import axios from "../axios";

const Category = (props) => {
  const [isLoaded, setLoaded] = useState(false),
    [dishes, setDishes] = useState([]),
    category = catData[props.match.params.index];

  useEffect(() => {
    axios
      .get("/recipes/complexSearch", {
        params: {
          cuisine: "indian",
          diet: "lacto-vegetarian",
          type: category.searchString,
        },
      })
      .then(({ data }) => {
        setLoaded(true);
        setDishes(data.results);
      })
      .catch((err) => console.log(err));

    return () => {
      setDishes([]);
    };
  }, [category.searchString]);

  if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div>
        <SetIcon icon={category.icon} />
        <SetTitle title={category.name} />
        <CategoryBanner category={category} />
        <Dishes dishes={dishes} />
      </div>
    );
  }
};

export default Category;
