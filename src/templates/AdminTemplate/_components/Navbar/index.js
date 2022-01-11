import React, { Component } from "react";

import { NavLink, withRouter } from "react-router-dom";
// import { actLogout } from "./../../AuthPage/modules/actions";
import { connect } from "react-redux";
import {
  AppstoreOutlined,
  UserAddOutlined,
  LogoutOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { clearUser } from "redux/actions/LoginAction";
const user1 = JSON.parse(localStorage.getItem("USER_ADMIN"));

const { Sider } = Layout;
class Navbar extends Component {
  render() {
    return (
      <>
        <Sider
          style={{
            zIndex: "99",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {}}
          onCollapse={(collapsed, type) => {}}
        >
          <div className="logo mt-2"></div>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <NavLink className="btn" to="/">
                <span>Home</span>
              </NavLink>
            </Menu.Item>
            <div className="btn btn-outline-warning w-100">
              {user1?.user?.name}
            </div>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/admin/dashboard"
              >
                <span>Dashboard</span>
              </NavLink>
            </Menu.Item>
            {/* <Menu.Item icon={<UserAddOutlined />}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/user-manager"
              >
                <span>Quản lý người dùng</span>
              </NavLink>
            </Menu.Item> */}

            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/admin/room"
              >
                <span>Thông tin phòng</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<VideoCameraAddOutlined />}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/admin/local"
              >
                <span>Thông tin địa điểm</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="5" icon={<UserAddOutlined />}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/admin/usermanager"
              >
                <span>Người dùng</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="7" icon={<UserAddOutlined />}>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/admin/card"
              >
                <span>Quản lý vé</span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="6" icon={<LogoutOutlined />}>
              <button
                className="btn btn-danger w-100 "
                onClick={() => {
                  this.props.logout(this.props.history);
                }}
              >
                Logout
              </button>
            </Menu.Item>
          </Menu>
        </Sider>
      </>

      // {/* <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      //   {/* Brand */}
      //   <a className="navbar-brand" href="#s">
      //     Navbar
      //   </a>
      //   {/* Toggler/collapsibe Button */}
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#collapsibleNavbar"
      //   >
      //     <span className="navbar-toggler-icon" />
      //   </button>
      //   {/* Navbar links */}
      //   <div className="collapse navbar-collapse" id="collapsibleNavbar">
      //     <ul className="navbar-nav">
      //       <li className="nav-item">
      //         <NavLink
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/dashboard"
      //         >
      //           Dashboard
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <NavLink
      //           activeClassName="active"
      //           className="nav-link"
      //           to="/add-user"
      //         >
      //           Add user
      //         </NavLink>
      //       </li>
      //       <li className="nav-item">
      //         <button
      //           className="btn btn-info"
      //           onClick={() => {
      //             this.props.logout(this.props.history);
      //           }}
      //         >
      //           Logout
      //         </button>
      //       </li>
      //     </ul>
      //   </div>
      // </nav> */}
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => {
      dispatch(clearUser(history));
    },
  };
};

const ConnectedComponent = connect(null, mapDispatchToProps)(Navbar);

export default withRouter(ConnectedComponent);
