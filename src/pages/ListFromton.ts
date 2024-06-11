import { DateTime } from "luxon";
import { deleteFromton, getFromtons } from "../services/fromton.service";
import { Fromton } from "../types/fromton.type";
import router from "../router/router";

export default function ListFromton() {
  const element = document.createElement("div");

  const displayFromtons = async (fromtons: Fromton[]) => {
    const ul = document.createElement("ul");
    fromtons.forEach((fromton) => {
      const li = document.createElement("li");
      li.textContent =
        fromton.name +
        " " +
        DateTime.fromMillis(parseInt(fromton.expirationDate)).toLocaleString() +
        " " +
        fromton.price;
      li.id = fromton._id;
      const button = document.createElement("button");
      /* surtout vous faites pas ça : button.addEventListener("click", () => {
        console.log(fromton._id);
      });*/
      button.onclick = async () => {
        await deleteFromton(fromton._id);
        document.getElementById(fromton._id)?.remove();
      };
      button.innerText = "delete";
      li.appendChild(button);
      const buttonUpdate = document.createElement("button");
      buttonUpdate.innerText = "update";
      buttonUpdate.onclick = async () => {
        localStorage.setItem("fromton", fromton._id);
        // window.location.href = "/update_fromton";
        history.pushState(null, null, "/update_fromton");
        router();
      };
      li.appendChild(buttonUpdate);
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
