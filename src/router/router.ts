import CreateFromton from "../pages/CreateFromton";
import Demo from "../pages/Demo";
import Home from "../pages/Home";
import ListFromton from "../pages/ListFromton";

/*type Routes = {
  [key: string]: () => HTMLDivElement;
};
*/
type Routes = Record<`/${string}`, () => HTMLDivElement>;
//type Email = `${string}@${string}.${string}`;

const routes: Routes = {
  "/": Home,
  "/demo": Demo,
  "/create_fromton": CreateFromton,
  "/list_fromton": ListFromton,
};

function router() {
  const content = document.getElementById("app");
  const path = window.location.pathname as `/${string}`;

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
