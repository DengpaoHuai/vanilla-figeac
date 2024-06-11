import { createFromton } from "../services/fromton.service";
import { Fromton } from "../types/fromton.type";

export default function CreateFromton() {
  const element = document.createElement("div");
  element.classList.add("create-fromton-form");
  const form = document.createElement("form");
  form.id = "fromton-form";
  const input = document.createElement("input");
  const label = document.createElement("label");
  label.innerText = "Nom du fromton";
  label.htmlFor = "name";
  form.appendChild(label);
  input.type = "text";
  input.placeholder = "Entrez le nom du fromton";
  input.name = "fromtonName";
  input.id = "name";
  form.appendChild(input);

  const input2 = document.createElement("input");
  input2.type = "text";
  input2.placeholder = "Entrez le prix du fromton";
  input2.name = "price";
  form.appendChild(input2);
  const input3 = document.createElement("input");
  input3.type = "date";
  input3.placeholder = "Entrez la date de péremption du fromton";
  input3.name = "expirationDate";
  form.appendChild(input3);
  const button = document.createElement("button");
  button.type = "submit";
  button.innerText = "Créer un fromton";
  form.appendChild(button);
  element.appendChild(form);
  element.style.backgroundColor = "lightblue";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fromTonName: string = form.fromtonName.value;
    const price: string = form.fromtonName.value;
    const date: string = form.fromtonName.value;
    const fromton = {
      name: fromTonName,
      price,
      expirationDate: date,
    };
    const result = await createFromton(fromton);
    console.log(result);
    const formatId = (id: string) => {
      console.log(id);
    };
    formatId(result._id);
  });
  return element;
}
