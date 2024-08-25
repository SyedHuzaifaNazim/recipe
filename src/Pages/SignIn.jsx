import React from "react";

function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>Email: </label>
        <input type="email" name="email" placeholder="Enter your email" />
        <br />
        <label>Password: </label>
        <input type="password" name="password" placeholder="Enter your password" />
        <button>Sign In</button>
        <a href="#" style={{ color: "#0000ff", textDecoration: "none" }}>
          Forgot Password?
        </a>
      </form>
    </div>
  );
}

export default SignIn;