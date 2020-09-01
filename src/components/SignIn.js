import React from "react";
import { Button } from "reactstrap";
import { signin } from "../utils/auth";

function SignIn(props) {
  const { history } = props;
  const handleSignIn = (e) => {
    e.preventDefault();
    signin();
    history.push("/");
  };
  return (
    <div>
      <h2>hello from sign in</h2>
      <Button onClick={handleSignIn} color="info">
        Signin
      </Button>
    </div>
  );
}

export default SignIn;
