import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { alter_ego, characters, first_appearance, id, publisher, superhero } =
    hero;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Hero Screen</h1>
      <hr />
      {/* <pre>{JSON.stringify(hero, null, 2)}</pre> */}
      <div className="row animate__animated animate__fadeInRight">
        <div className="col-4">
          <img
            className="img-thumbnail"
            // src={`/assets/${id}.jpg`} // desde public/assets
            // src={batman}
            src={heroImages(`./${id}.jpg`)}
            alt={superhero}
          />
        </div>
        <div className="col-8  d-flex flex-column justify-content-center">
          <h3>{superhero}</h3>
          <hr />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b> {alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> {publisher}
            </li>
            <li className="list-group-item">
              <b>First Appearance:</b> {first_appearance}
            </li>
          </ul>

          <div className="d-flex flex-column align-items-end">
            <h5>Characters</h5>
            <p>{characters}</p>
          </div>

          <button
            className="btn btn-outline-dark"
            onClick={() => handleReturn()}
          >
            Regresar
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroScreen;
