import React from 'react';
import Header from '../src/Header/Header.js';
import Footer from '../src/Footer/Footer.js';
import Login from '../src/Login/Login.js';
import { Notifications } from '../Notifications/Notifications.js';
// import CourseListRow from '../CourseList/CourseListRow.js';
import CourseList from '../CourseList/CourseList.js';
import PropTypes from 'prop-types';

function App({Isloggedin}) {
  return (
    <div className="App">
      <Notifications displayDrawer={false}/>
      <Header />
      { Isloggedin ? <CourseList/>: <Login /> }
      <Footer />
    </div>
  );
}

App.propTypes = {
  Isloggedin: PropTypes.bool
}
export default App;
