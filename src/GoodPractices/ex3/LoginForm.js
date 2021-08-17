import React, { useState } from "react";
import { LoginFormInput } from "./LoginFormInput";
import "./LoginForm.scss";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    login: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { login, password } = formData;

    if (login === "jacek" && password === "jacek") {
      alert("Successfully logged in");
    } else {
      alert("Enter valid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <h1>Login:</h1>
      <LoginFormInput
        labelClassName="loginForm__label"
        inputClassName="loginForm__input"
        type="text"
        id="login"
        name="login"
        value={formData.login}
        onChange={handleChange}
      >
        Enter login:
      </LoginFormInput>
      <LoginFormInput
        labelClassName="loginForm__label"
        inputClassName="loginForm__input"
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      >
        Enter password:
      </LoginFormInput>
      <button className="loginForm__submit" type="submit">
        Login
      </button>
    </form>
  );
};
