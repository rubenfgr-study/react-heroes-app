import React, { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols- row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard {...hero} key={hero.id} />
      ))}
    </div>
  );
};

export default HeroList;
