import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    console.log(email, pass);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" />
        <br />
        <input ref={passRef} type="password" name="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;
