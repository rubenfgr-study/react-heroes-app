import queryString from "query-string";
import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { getHerosByName } from "../../selectors/getHerosByName";
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [values, handleInputChange] = useForm({ searchText: q });
  const { searchText } = values;

  const filteredHeroes = useMemo(() => getHerosByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn btn-outline-primary mt-3 w-100"
            >
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : (
            filteredHeroes.length === 0 && (
              <div className="alert alert-danger">
                No hay resultados [ {q} ]
              </div>
            )
          )}

          {filteredHeroes.map((hero) => (
            <HeroCard {...hero} key={hero.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
