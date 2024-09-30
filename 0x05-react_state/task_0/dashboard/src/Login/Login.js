import React from "react";
import {StyleSheet, css} from 'aphrodite';

const style = StyleSheet.create({
  input: {
    marginLeft: '10px',
    marginRight: '10px',
    height: '27px',
    width: '20%',
    border: 'none',
    '@media (max-width: 900px)': {
      width: '60%',
    }
  },
  label: {
    fontSize: '20px',
    marginBottom: '10px'
  },

  button: {
    position: 'relative',
    fontSize: '18px',
    height: '31px',
    width: '50px',
    padding: 0,
    top: '1px',
    border: '4px solid orange',
    background: 'none',
    '@media (condition: 900px)': {

    }
  },
  flex: {
    width: '50%',
    // background: 'red',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    }
  }
})

export default function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <div className={css(style.flex)}>
        <label htmlFor="email" className={css(style.label)}>Email:
        <input id="email" type="email" className={css(style.input)}  /></label>
        <label htmlFor="password" className={css(style.label)}>Password
        <input id="password" type="password" className={css(style.input)}/></label>
        <button className={css(style.button)}>Ok</button>

      </div>
    </div>
  );
}
