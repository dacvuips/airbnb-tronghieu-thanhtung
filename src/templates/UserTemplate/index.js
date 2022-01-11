import React from "react";
import { Route, Redirect } from "react-router-dom";
<<<<<<< HEAD
import Footer from "templates/HomeTemplate/components/Footer";
import Navbar from "templates/HomeTemplate/components/Navbar";
=======
// import Navbar from "./_component/Navbar";
>>>>>>> main

function LayoutUser(props) {
  console.log(props);

  return (
    <>
<<<<<<< HEAD
      <Navbar />
      {props.children}
      <Footer />
=======
      {/* <Navbar /> */}
      {props.children}
>>>>>>> main
    </>
  );
}

export default function UserTemplate(props) {
  const { exact, path, Component } = props;
  if (!localStorage.getItem("USER_LOGIN")) {
    return (
      <LayoutUser>
        <Route exact={exact} path={path} component={Component} />
      </LayoutUser>
    );
  }
  alert("Bạn đã có tài khoản");
  return <Redirect to="/" />;
<<<<<<< HEAD
}
=======
}
>>>>>>> main
