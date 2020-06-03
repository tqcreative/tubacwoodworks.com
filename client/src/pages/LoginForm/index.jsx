import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log('handleSubmit')
    this.props._login(this.state.username, this.state.password);
    this.setState({
      redirectTo: "/crm",
    });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <StyledRoot className="LoginForm login_root">
          <form>
            <div>
              <label htmlFor="username">Username: </label>
              <input
                placeholder="User Name"
                type="text"
                autoComplete="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input
                placeholder="password"
                type="password"
                autoComplete="current-password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button onClick={this.handleSubmit}>Login</button>
            <a
              href=""
              onClick={() => {
                alert("A message has been sent to your email.");
              }}
            >
              forgot my password
            </a>
            <a href="/">home</a>
          </form>
        </StyledRoot>
      );
    }
  }
}

const StyledRoot = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://bobwehadababyitsaboy.s3-eu-west-1.amazonaws.com/check_1.jpg");
  background-size: cover;
  background-position: center center;

  form {
    width: 80%;
    max-width: 512px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 2em 1em;

    div {
      padding: 0 1em;

      label {
        font-weight: 800;
        font-size: 2em;
      }

      input {
        text-decoration: none;
        width: 100%;
        margin: 0.5em 0;
        padding: 0.5em;
        line-height: 1.5em;
        font-size: 1.2em;

        &::placeholder {
          font-size: 1em;
          font-family: "Times New Roman", Times, serif;
          color: #aaa;
        }
      }
    }

    button {
      margin: 1em auto;
      width: 50%;
      min-width: 180px;
      max-width: 256px;
      padding: 1em 0.25em;
      border-radius: 0.2em;
      text-transform: uppercase;
      font-weight: 800;
      line-height: 1.2em;

      &:hover {
        background-color: #fafafa;
      }
    }

    a {
      display: block;
      width: 100%;
      text-align: center;
      padding: 1em .5em 0 .5em;
    }
  }
`;
