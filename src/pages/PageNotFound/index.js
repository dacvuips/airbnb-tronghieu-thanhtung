import React, { Component } from "react";
// import NavMovie from "../HomeTemplate/HomePage/NavMovie/index";
// import Header from "../HomeTemplate/HomePage/Header";
export default class PageNotFound extends Component {
  render() {
    return (
      <>
        {/* <Header />
        <NavMovie /> */}
        <img
          style={{
            width: "100%",
            height: "100%",
            marginTop: "90px",
            position: "fixed",
          }}
          src="https://1.bp.blogspot.com/-cr0bAHr5IYc/VyIXSsZUycI/AAAAAAAAH9k/nTU427gW8KsjYcrONOim6PIUHlUgB36mgCLcB/s1600/loi-404-cach-khac-phuc-loi-404-cho-website.png"
          alt="404"
        />
      </>
    );
  }
}
