import React from "react";
import {StyleSheet, css} from 'aphrodite';

const style = StyleSheet.create({
  input: {
    marginLeft: '10px',
    marginRight: '10px',
    height: '27px',
  },

  label: {
    fontSize: '20px'
  },

  button: {
    fontSize: '20px',
    height: '30px',
    width: '40px',
    padding: 0,
    margin: 0,
  }
})
export default function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email" className={css(style.label)}>Email:</label>
      <input id="email" type="email" className={css(style.input)}  />
      <label htmlFor="password" className={css(style.label)}>Password</label>
      <input id="password" type="password" className={css(style.input)}/>
      <button className={css(style.button)}>Ok</button>
    </div>
  );
}
