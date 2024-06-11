import { getFromtons } from "../services/fromton.service";
import { Fromton } from "../types/fromton.type";

export default function ListFromton() {
  const element = document.createElement("div");

  const displayFromtons = async (fromtons: Fromton[]) => {
    const ul = document.createElement("ul");
    fromtons.forEach((fromton) => {
      const li = document.createElement("li");
      li.textContent = fromton.name;
      const button = document.createElement("button");
      /* surtout vous faites pas ça : button.addEventListener("click", () => {
        console.log(fromton._id);
      });*/
      button.innerText = "delete";
      li.appendChild(button);
      ul.appendChild(li);
    });
    element.appendChild(ul);
  };

  getFromtons().then((data) => {
    displayFromtons(data);
  });

  const h1 = document.createElement("h1");
  h1.textContent = "Création de fromton";
  h1.id = "fromton-title";
  element.appendChild(h1);
  return element;
}
