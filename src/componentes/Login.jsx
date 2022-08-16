import React from "react";
import "./Login.css"


function Login() {
  return (
    <>
    <div className="form-floating mb-3 ">
  <input type="email" readonly className="form-control-plaintext" id="floatingEmptyPlaintextInput" placeholder="name@example.com"/>
  <label for="floatingEmptyPlaintextInput">Empty input</label>
</div>
<div className="form-floating mb-3">
  <input type="email" readonly className="form-control-plaintext" id="floatingPlaintextInput" placeholder="name@example.com" value="name@example.com"/>
  <label for="floatingPlaintextInput">Input with value</label>
</div>
</>
  );
}

export default Login;
