import React from 'react';
import logo from '../assets/holberton.png';
import { StyleSheet, css } from 'aphrodite';
import { useContext } from 'react';
import UsrContext from '../App/AppContext';

const primaryColor = 'rgb(216, 45, 45)';
const border = `0.3rem, solid, ${primaryColor}`;

const style = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: border
  },

  title: {
    color: primaryColor,
    fontSize: '2rem',
    fontWeight: '900',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
  },

  img: {
    width: '200px'
  }
})

function Header() {
  const appContext = useContext(UsrContext)
  return (
    <div className="App">
			<div className={css(style.AppHeader)}>
				<img src={logo} alt="holberton-logo" className={css(style.img)} />
				<h1 className={css(style.title)}>School dashboard</h1>
			</div>
      {appContext.user.isLoggedIn && (
        <div id='logoutSection' onClick={(e)=> appContext.logOut(e)}>Welcome email(logout)</div>
      ) }
    </div>
  );
}

export default Header;
