// import Login from "pages/Login/Login";
// import Register from "pages/Register/Register";
import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import AdminTemplate from "templates/AdminTemplate";
import Dashboard from "templates/AdminTemplate/Dashboard";
import LocalInfoManager from "templates/AdminTemplate/LocalInfoManager";
import RoomInfoManager from "templates/AdminTemplate/RoomInfoManager";
import UserManager from "templates/AdminTemplate/UserManager";
import Home from "templates/HomeTemplate/Home";
import HomeTemplate from "templates/HomeTemplate/HomeTemplate";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomeTemplate,
  },

  {
    exact: false,
    path: "/home",
    component: Home,
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
  //localhost:3000/dashboard
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

// function renderCheckOut() {
//   return checkOut.map((route, index) => {
//     return (
//       <CheckoutTemplate
//         key={index}
//         exact={route.exact}
//         path={route.path}
//         Component={route.component}
//       />
//     );
//   });
// }
export { renderRoutesHome, renderRoutesAdmin };
