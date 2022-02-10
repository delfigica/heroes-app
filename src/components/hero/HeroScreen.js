import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

export const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [ heroId ])
   

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container hero-box">
      <div className="img-container-hero">
        <img
          src={`/assets/${hero.id}.jpg`}
          className="img-thumbnail animate__animated animate__backInLeft"
          alt={hero.superhero}
        />
      </div>
      <div className="text-center">
      <div className="card hero-info-card animate__animated animate__backInDown">
        {hero.publisher === "Marvel Comics" ? (
          <img className="logo-hero-img" src={"/assets/marvel.png"} alt={hero.publisher}/>
        ) : (
          <img className="logo-hero-img" src={"/assets/DcComics.png"} alt={hero.publisher}/>
        )}
        <div className="card-title">
          <h3>{hero.superhero}</h3>
        </div>
        <div className="card-body">
          <p>Alter ego: {hero.alter_ego}</p>
          {hero.alter_ego !== hero.characters && (
            <p className="text-muted">Characters: {hero.characters}</p>
          )}
          <p>First appearance: {hero.first_appearance}</p>
            <button className="btn btn-outline-dark mt-4"
              onClick={ handleReturn }
            >Return</button>
        </div>
      </div>
      </div>
    </div>
  );
};
