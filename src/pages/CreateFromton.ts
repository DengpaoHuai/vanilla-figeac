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
  input.name = "name";
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

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const body = JSON.stringify(data);
    console.log(body);

    fetch("https://crudcrud.com/api/3db7dd93b4464effbb3e8a86838a167c/fromton", {
      method: "POST",
      body: body,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  });
  return element;
}
