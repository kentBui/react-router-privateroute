import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils/auth";

// Requirement 1.
// Có các thuộc tính  như component <Route />
const PrivateRoute = ({ component: Component, ...rest }) => {
  // Requirement 2.
  // Render ra một component <Route /> và truyền tất cả các props được truyền vào cho nó.
  console.log(isLogin);
  return (
    <Route
      {...rest}
      render={(props) =>
        // Requirement 3.
        // Xác thực người dùng đã đăng nhập hay chưa
        // Nếu đã đăng nhập thì render ra component được truyền vào
        // không thì redirect họ đến đường dẫn /login.
        isLogin() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;
