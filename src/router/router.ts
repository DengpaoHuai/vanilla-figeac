import Demo from "../pages/Demo";
import Home from "../pages/Home";

type Routes = {
  [key: string]: () => HTMLDivElement;
};

const routes: Routes = {
  "/": Home,
  "/demo": Demo,
};

function router() {
  const content = document.getElementById("app");
  const path = window.location.pathname;

  if (content) {
    content.innerHTML = "";
    let tempElement = routes[path] ?? null;
    if (tempElement) {
      content.appendChild(tempElement());
    }
  }
}

window.addEventListener("popstate", router);

export default router;
