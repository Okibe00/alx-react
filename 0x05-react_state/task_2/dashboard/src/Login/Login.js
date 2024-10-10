import React, { useEffect } from "react";
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
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    }
  }
})

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    }
  };

  verifyCredentials = () => {
    const btnStatus = (this.state.email && this.state.password)
    this.setState({
      enableSubmit: btnStatus ? true: false,
    })
  }
  handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    // console.log(email, password)
    this.props.logIn(email, password);
    // console.log("sunmi")
  }
  handleChangeEmail = (e) => {
    this.setState(
        {
          email: e.target.value
        },this.verifyCredentials
      )
  }
  handleChangePassword = (e) => {
    this.setState(
      {
        password: e.target.value
      },this.verifyCredentials
    )
    }

  render() {
      return (
        <div>
          <p>Login to access the full dashboard</p>
          <div className={css(style.flex)}>
          <form action="" onSubmit={(e) => this.handleLoginSubmit(e)}>
            <label htmlFor="email" className={css(style.label)}>Email:
            <input onChange={(e) => this.handleChangeEmail(e)} value={this.state.email} id="email" type="email" className={css(style.input)}  /></label>
            <label htmlFor="password" className={css(style.label)}>Password
            <input onChange={ (e) => this.handleChangePassword(e) } id="password" type="password" className={css(style.input)} value={this.state.password}/></label>
            <input
              type="submit"
              value='OK'
              disabled={!this.state.enableSubmit}
              className={css(style.button, style.btnDisabled)} />
          </form>
          </div>
        </div>
      );
  }
}
