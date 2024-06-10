type Planet = {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type PlanetResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
};

export default function Home() {
  let page = 1;
  const displayButtons = (
    planetResponse: PlanetResponse,
    element: HTMLDivElement
  ) => {
    const buttonPrevious = document.createElement("button");
    buttonPrevious.innerText = "Previous";
    buttonPrevious.addEventListener("click", () => {
      page--;
      getPlanets(page);
    });
    buttonPrevious.disabled = planetResponse.previous ? false : true;
    element.appendChild(buttonPrevious);
    const button = document.createElement("button");
    button.innerText = "Next";
    button.addEventListener("click", () => {
      page++;
      getPlanets(page);
    });
    button.disabled = planetResponse.next ? false : true;
    element.appendChild(button);
  };

  const element = document.createElement("div");
  const innerDiv = document.createElement("div");
  const getPlanets = async (page = 1) => {
    innerDiv.innerHTML = "";
    const response = await fetch("https://swapi.dev/api/planets?page=" + page);
    const data: PlanetResponse = await response.json();
    const ul = document.createElement("ul");
    data.results.forEach((planet) => {
      const li = document.createElement("li");
      li.textContent = planet.name;
      ul.appendChild(li);
    });
    innerDiv.appendChild(ul);
    element.appendChild(innerDiv);
    displayButtons(data, innerDiv);
  };
  element.style.backgroundColor = "lightblue";
  element.style.minHeight = "200vh";
  const h1 = document.createElement("h1");
  h1.textContent = "Bienvenue sur la page de démonstration !";
  const p = document.createElement("p");
  p.textContent = "Vous êtes sur la page de démonstration";
  element.appendChild(h1);
  element.appendChild(p);
  getPlanets();
  return element;
}
