import Register from "views/Register";
import Login from "views/Login";
import Buku from "views/Buku";
import Tambah from "views/Tambah";

const routes = [
  {
    label: "Login",
    path: "/",
    component: Login,
    exact: true,
  },
  {
    label: "Register",
    path: "/register",
    component: Register,
    exact: true,
  },
  {
    label: "Buku",
    path: "/buku",
    component: Buku,
    exact: true,
  },
  {
    label: "Tambah",
    path: "/tambah",
    component: Tambah,
    exact: true,
  },
  {
    label: "Edit",
    path: "/edit/:id",
    component: Tambah,
    exact: true,
  },
];

export default routes;
