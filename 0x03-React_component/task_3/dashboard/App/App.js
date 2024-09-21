import React from "react";
import Header from "../src/Header/Header.js";
import Footer from "../src/Footer/Footer.js";
import Login from "../src/Login/Login.js";
import { Notifications } from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList.js";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils.js";

class App extends React.Component {
  listCourses = [
    {
      id: 1,
      name: "ES6",
      credit: 60,
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20,
    },
    {
      id: 3,
      name: "React",
      credit: 40,
    },
  ];

  listNotifications = [
    {
      id: 1,
      value: "New course available",
      type: "default",
    },
    {
      id: 2,
      value: "New resume available",
      type: "",
    },
    {
      id: 3,
      type: "urgent",
      value: getLatestNotification(false),
    },
  ];

  handleLogOut = (e) => {
    if (e.key === "h" && e.ctrlKey) {
      alert("Logging you out");
      this.props.logOut();
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleLogOut);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleLogOut);
  }
  render() {
    return (
      <div className="App">
        <Notifications
          displayDrawer={true}
          listNotifications={this.listNotifications}
        />
        <Header />
        {this.props.Isloggedin ? (
          <CourseList listCourses={this.listCourses} />
        ) : (
          <Login />
        )}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  Isloggedin: PropTypes.bool,
  logOut: PropTypes.func,
};
App.defaultPropTypes = {
  logOut: function () {},
};
export default App;
