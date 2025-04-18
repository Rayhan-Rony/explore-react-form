import React, { useState } from "react";

const ControlledField = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, name, password);
  };
  const handlePasswordOnchange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 5) {
      setError("At least 6 characters Needed");
    } else {
      setError("");
    }
  };
  const handleEmailOnchange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameOnchange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Type Your Name"
          onChange={handleNameOnchange}
        />
        <br />
        <input
          defaultValue={email}
          onChange={handleEmailOnchange}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          defaultValue={password}
          onChange={handlePasswordOnchange}
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledField;
