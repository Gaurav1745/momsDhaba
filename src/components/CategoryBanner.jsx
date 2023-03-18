import React from "react";

const CategoryBanner = ({ category }) => {
  return (
    <div>
      <header className="bg-light text-center text-white">
        <section
          className="jumbotron text-center category-header"
          style={{
            background: "url('" + category.background + "')",
          }}
        >
          <div className="container">
            <h1>{category.name}</h1>
          </div>
        </section>
      </header>
    </div>
  );
};

export default CategoryBanner;
