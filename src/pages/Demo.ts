export default function Demo() {
  const element = document.createElement("div");
  element.style.backgroundColor = "lightblue";
  element.style.minHeight = "200vh";

  element.innerHTML = `
        <h1>démo</h1>
            <p>Vous êtes sur la page de démonstration</p>
        `;

  return element;
}
