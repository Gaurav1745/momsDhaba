import React from "react";
import { Link } from "react-router-dom";

const Dishes = ({ dishes }) => {
  return (
    <div className="album py-5">
      <div className="container">
        <div className="row">
          {dishes.map((dish) => (
            <div key={dish.id} className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div
                  style={{
                    height: "225px",
                    overflow: "hidden",
                    background: "url('" + dish.image + "')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="card-body">
                  <p className="card-text">{dish.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link
                        role="button"
                        className="btn btn-outline-secondary"
                        to={"/dish/" + dish.id}
                      >
                        Lets Cook!
                      </Link>
                    </div>
                    {/* <small className="text-muted"> - </small> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dishes;
