import React, { useState } from "react";
import TodoListContainer from "../../todoList/TodoListContainer";

const withAuth = (WrappedComponent) => {
  function WithAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(
      localStorage.getItem("token") ? true : false
    );

    function onLoginButtonCLicked() {
      localStorage.setItem("token", "abcd");
      setIsLoggedIn(true);
    }

    function loginResponseSuccess(response) {
      localStorage.setItem("token", response.accessToken);
      setIsLoggedIn(true);
      console.log("loginResponseSuccess: ", response);
    }
    function loginResponseFailure(response) {
      console.log("loginResponseFailure: ", response);
    }

    return (
      <div>
        {isLoggedIn ? (
          <TodoListContainer />
        ) : (
          <WrappedComponent
            onLoginButtonCLicked={onLoginButtonCLicked}
            loginSuccess={loginResponseSuccess}
            loginFailure={loginResponseFailure}
          />
        )}
      </div>
    );
  }
  return WithAuth;
};

export default withAuth;
