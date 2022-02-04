import { heroes } from "../data/heroes";

export const getHerosByName = (name = "") => {
  if (!name) {
    return [];
  }
  name = name.trim().toLowerCase();
  return heroes.filter((hero) =>
    hero.superhero.trim().toLowerCase().includes(name)
  );
};
