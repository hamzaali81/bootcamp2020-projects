import React, { useState, useEffect } from "react";

const App = () => {
  let [intialState, finalState] = useState({
    username: "",
    password: "",
    email: "",
    password2: "",
  });

  console.log(intialState);
  const { username, password, password2, email } = intialState;
  console.log(username);
  const [err, setErr] = useState("");
  const [mail, setMail] = useState("");
  const [pass2, setPassword2] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    finalState({
      ...intialState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(intialState);

    if (!intialState.username) {
      alert("ok", intialState.err);
      setErr("field is required");
    } else if (intialState.username.length <= 4) {
      setErr("length not match");
    } else if (!intialState.password.length) {
      setErr("field is required");
    } else if (intialState.password.length <= 5) {
      setErr("Must be 8 character");
    } else if (!intialState.password.length) {
      setErr("field is required");
    } else if (intialState.password2) {
      setPassword2(handlePassword(intialState.password2));
    } else if (!intialState.email) {
      setMail(ValidateEmail(intialState.email));
      setErr("field is required");
    } else {
      setErr("");
    }
  };

  function handlePassword(pass) {
    if (intialState.password !== intialState.password2) {
      setErr("Password not match", pass);
    } else if (intialState.password === intialState.password2) {
      console.log("ok");
      setErr("");
    }
  }

  function ValidateEmail(mail) {
    console.log("mail", mail);
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          name="username"
          type="text"
          value={intialState.name}
          onChange={handleChange}
        />
        <small style={{ color: "red" }}>{err}</small>
        <br /> <label>Password:</label>
        <input
          name="password"
          type="password"
          value={intialState.password}
          onChange={handleChange}
        />
        <small style={{ color: "red" }}>{err}</small>
        <br />
        <label>Second Password:</label>{" "}
        <input
          type="password"
          name="password2"
          value={intialState.password2}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>{" "}
        <input
          type="email"
          value={intialState.email}
          name="email"
          onChange={handleChange}
        />
        <small style={{ color: "red" }}>{err}</small>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
