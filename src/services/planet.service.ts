import { PlanetResponse } from "../types/planet.type";

export const getPlanets = async (page = 1) => {
  const response = await fetch("https://swapi.dev/api/planets?page=" + page);
  const data: PlanetResponse = await response.json();
  return data;
};
