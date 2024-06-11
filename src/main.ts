import "./style.css";
import router from "./router/router.ts";

router();

document.addEventListener("click", (e) => {
  if (e?.target?.matches("[data-link]")) {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    router();
  }
});
