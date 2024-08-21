import React from 'react';
import logo from '../../assets/holberton.png';
import './Header.css';

function Header() {
  return (
    <div className="App">
			<div className="App-header">
				<img src={logo} alt="holberton-logo" />
				<h1 className='title'>School dashboard</h1>
			</div>
    </div>
  );
}

export default Header;
