import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { isLogin } from "../utils/auth";

function DashBoard() {
  const logined = isLogin();

  return (
    <div>
      <h2>Wellcome to dashboard</h2>
      <div>
        <h3>You want to go private area?</h3>
        {logined ? (
          <Link to="/private">
            <Button color="primary">Link to private</Button>
          </Link>
        ) : (
          <Link to="/signin">
            <Button color="primary">Sign in</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default DashBoard;
