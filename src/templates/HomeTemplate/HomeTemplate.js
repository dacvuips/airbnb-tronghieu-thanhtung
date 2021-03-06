import React from "react";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function LayoutHome(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
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

