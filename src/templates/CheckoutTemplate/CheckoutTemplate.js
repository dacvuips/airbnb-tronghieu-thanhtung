import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
// import Navbar from "./_component/Navbar";

export default function CheckoutTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        if (!localStorage.getItem("USER__LOGIN")) {
          return <Redirect to="/auth" />;
        }

        //redirect ve /auth
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
}
