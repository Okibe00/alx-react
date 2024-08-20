import React from 'react';
import logo from '../../assets/holberton.png';
import './Header.css';

function Header() {
  return (
    <div className="App">
			<div className="App-header">
				<img src={logo} alt="holberton-logo" />
				<p className='title'>School dashboard</p>
			</div>
    </div>
  );
}

export default Header;
