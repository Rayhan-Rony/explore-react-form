import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault;
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
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
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
