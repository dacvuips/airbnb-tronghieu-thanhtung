import AdminTemplate from "templates/AdminTemplate";
import Dashboard from "templates/AdminTemplate/Dashboard";
import LocalInfoManager from "templates/AdminTemplate/LocalInfoManager";
import RoomInfoManager from "templates/AdminTemplate/RoomInfoManager";
import UserManager from "templates/AdminTemplate/UserManager";
import Footer from "templates/HomeTemplate/components/Footer";
import DetailProduct from "templates/HomeTemplate/DetailProduct";
import Home from "templates/HomeTemplate/Home";
import HomeTemplate from "templates/HomeTemplate/HomeTemplate";
import Postcards from "templates/HomeTemplate/Postcards";
import ListProducts from "templates/HomeTemplate/ListProducts";
import Login from "templates/UserTemplate/Login/Login"
import Register from "templates/UserTemplate/Register/Register";
import UserTemplate from "templates/UserTemplate";


const routesHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/products",
    component: ListProducts,
  },
  {
    exact: false,
    path: "/product-detail/:id",
    component: DetailProduct,
  },
  {
    exact: false,
    path: "/products",
    component: Postcards,
  },
  {
    exact: false,
    path: "/footer",
    component: Footer,
  },


];

const routesAdmin = [
  //localhost:3000/dashboard
  {
    exact: false,
    path: "/admin/dashboard",
    component: Dashboard,
  },
  {
    exact: false,
    path: "/admin/usermanager",
    component: UserManager,
  },
  {
    exact: false,
    path: "/admin/local",
    component: LocalInfoManager,
  },
  {
    exact: false,
    path: "/admin/room",
    component: RoomInfoManager,
  },
];


const checkOut = [
  {
    exact: false,
    path: "/register",
    component: Register,
  },
  {
    exact: false,
    path: "/login",
    component: Login,
  },
];

function renderRoutesHome() {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

function renderRoutesAdmin() {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

function renderCheckOut() {
  return checkOut.map((route, index) => {
    return (
      <UserTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}
export { renderRoutesHome, renderRoutesAdmin , renderCheckOut};
