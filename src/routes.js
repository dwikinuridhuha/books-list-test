import About from "views/About";
import Home from "views/Home";

const routes = [
  {
    label: "Home",
    path: "/",
    component: Home,
    exact: true,
  },
  {
    label: "About",
    path: "/about",
    component: About,
    exact: true,
  },
];

export default routes;
