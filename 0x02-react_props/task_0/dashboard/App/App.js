import React from 'react';
import Header from '../src/Header/Header.js';
import Footer from '../src/Footer/Footer.js';
import Login from '../src/Login/Login.js';
import { Notifications }from '../Notifications/Notifications.js';


function App() {
  return (
    <div className="App">
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
