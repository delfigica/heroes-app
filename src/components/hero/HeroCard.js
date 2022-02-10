import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
    
  return (
    <div className="col">
      <div className="card text-center m-4 animate__animated animate__fadeInDown">
        <div className="row no-gutters">
          <img
            src={`https://raw.githubusercontent.com/delfigica/heroes-app/main/docs/assets/${id}.jpg`}
            className="card-img-top"
            alt={superhero}
          />
        </div>
        <div className="card-body">
          <div className="card-title">
            <h3>{superhero}</h3>
          </div>
          <p>{alter_ego}</p>
        <Link to={`/heroes-app/hero/${id}`}>
            <button className="btn btn-dark">View more</button>
        </Link>
        </div>
      </div>
    </div>
  );
};
