import React from "react";
import useInputField from "../../Hooks/useInputField";

const HooksForm = () => {
  const [name, setName] = useInputField("");
  const [email, setEmail] = useInputField("");
  const [pass, setPass] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, pass);
  };
  return (
    <div>
      <h1>this is form hook form</h1>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={name}
          type="text"
          name="name"
          placeholder="Type Your Name"
          onChange={setName}
        />
        <br />
        <input
          defaultValue={email}
          type="email"
          name="email"
          placeholder="Type your email"
          onChange={setEmail}
        />
        <br />
        <input
          defaultValue={pass}
          type="password"
          name="password"
          placeholder="Type your Password"
          onChange={setPass}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HooksForm;
