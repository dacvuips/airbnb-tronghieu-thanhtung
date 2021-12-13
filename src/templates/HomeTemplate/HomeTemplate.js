// import { Fragment } from "react";
// import { Route } from "react-router";

// export const HomeTemplate = (props) => {
//   const { Component, ...restProps } = props;

//   return (
//     <Route
//       {...restProps}
//       render={(propsRoute) => {
//         return (
//           <Fragment>
//             <h1 style={{ backgroundColor: "black" }}>Đây là header homepage</h1>
//             <Component {...propsRoute} />

//             <footer>Đây là footer</footer>
//           </Fragment>
//         );
//       }}
//     />
//   );
// };

import React from "react";
import { Route } from "react-router-dom";
// import Navbar from "./_component/Navbar";

function LayoutHome(props) {
  return (
    <>
      {/* <Navbar /> */}
      {props.children}
    </>
  );
}

export default function HomeTemplate(props) {
  const { exact, path, Component } = props;
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={Component} />
    </LayoutHome>
  );
}
