import { getPlanets } from "../services/planet.service";
import { PlanetResponse } from "../types/planet.type";

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

  document.addEventListener("scroll", (e) => {
    console.log(e);
  });

  const element = document.createElement("div");
  const innerDiv = document.createElement("div");
  const displayPlanets = async (page = 1) => {
    innerDiv.innerHTML = "";
    const data = await getPlanets(page);
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
  const a = "<a href='/demo' data-link>Aller à la page de démo</a>";
  const a1 = "<a href='/demo'>Aller à la page de démo</a>";

  element.appendChild(h1);
  element.appendChild(p);
  displayPlanets();
  element.innerHTML += a;
  element.innerHTML += a1;
  return element;
}
