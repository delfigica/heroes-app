import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchHero: q,
  });

  const { searchHero } = formValues;


  const heroesFileted = useMemo( () => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchHero);
    navigate(`?q=${searchHero}`)
  };

  return (
    <>
      <div className="row mt-4 d-flex justify-content-around">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form className="text-center" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for superhero"
              name="searchHero"
              autoComplete="off"
              className="form-control"
              value={searchHero}
              onChange={handleInputChange}
            />
            <button className="btn btn-dark mt-4 " type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-3">
          <h4>Result</h4>
          <hr />

          {
            (q === "")
              ? <div className="alert alert-info">Search a hero</div>
              : ( heroesFileted.length === 0 ) && <div className="alert alert-danger">no results for: {q}</div>
          }

          {
            heroesFileted.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  );
};
