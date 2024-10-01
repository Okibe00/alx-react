import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Login from "../Login/Login.js";
import { Notifications } from "../Notifications/Notifications.js";
import CourseList from "../CourseList/CourseList.js";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils.js";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.js";
import BodySection from "../BodySection/BodySection.js";


const listCourses = [
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

const listNotifications = [
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }
  handleDisplayDrawer() {
    // dosomething
    console.log("Showing drawer");
    this.setState({displayDrawer: true})
    console.log(this.state.displayDrawer)
  }

  handleHideDrawer() {
    // dosomething
    console.log("hiding drawer");
    this.setState({displayDrawer: false})
  }

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
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={listNotifications}
        />
        <Header />
        {this.props.Isloggedin ? (
          <BodySectionWithMarginBottom title={"Course list"}>
            <CourseList listCourses={this.listCourses} />

          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title={"Log in to continue"}>
            <Login />
            <BodySection title={"News from the School"}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante lorem, vehicula eget elementum ac, vulputate sit amet quam. Donec quis placerat elit. Ut ut porta lorem. Fusce vel nulla congue, porttitor enim vitae, condimentum tellus. Morbi lorem ante, pretium sit amet convallis nec, convallis et eros. Integer purus erat, commodo sit amet vulputate sit amet, mattis et mi. Duis posuere hendrerit ipsum, et finibus ex cursus sit amet.
              </p>
              <p>
              Nunc eu quam viverra, consectetur diam a, egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque efficitur faucibus ullamcorper. Curabitur in neque interdum, commodo neque eu, molestie odio. Integer malesuada orci a enim molestie posuere vitae at urna. Quisque ac sollicitudin magna. Suspendisse risus orci, ornare eu facilisis at, mollis eu est. Pellentesque egestas et velit at vehicula. Nulla sodales et ipsum nec pellentesque.
              </p>
            </BodySection>
          </BodySectionWithMarginBottom>
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
