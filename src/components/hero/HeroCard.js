import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <Link
      className={`col text-decoration-none`}
      to={`/hero/${id}`}
      onMouseOver={() => "bg-dark"}
    >
      <div className={`card animate__animated animate__fadeIn`}>
        <div className="card-header text-center text-white bg-dark">
          {superhero}
        </div>

        <div className="card-body text-center">
          <img
            // src={`/assets/${id}.jpg`}
            src={heroImages(`./${id}.jpg`)}
            alt={superhero}
            title={superhero}
            className="card-img-top mb-2"
          />
          <p>{alter_ego}</p>

          {alter_ego !== characters && (
            <p className="text-muted">{characters}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default HeroCard;
