import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./_components/Navbar";
import { Layout } from "antd";
const { Content, Footer } = Layout;

function LayoutAdmin(props) {
  return (
    <>
      <Layout>
        <Navbar />

        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {props.children}
            </div>
          </Content>
          <Footer className="btn btn-warning" style={{ textAlign: "center" }}>
            Nhóm Trần Trọng Hiếu và Thanh Tùng
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        // if (localStorage.getItem("UserAdmin")) {

        // }
        return (
          <LayoutAdmin>
            <Component {...propsRoute} />
          </LayoutAdmin>
        );
        // //redirect ve /auth
        // return <Redirect to="/auth" />;
      }}
    />
  );
}
