import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import withAuth from "../Login/wrappedComponents/withAuth";

function GoogleLoginCheck(props) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  // function loginResponseSuccess(response) {
  //   setName(response.profileObj.givenName);
  //   setMail(response.profileObj.email);
  //   localStorage.setItem("token", response.accessToken);
  //   console.log("loginResponseSuccess: ", response);
  // }
  // function loginResponseFailure(response) {
  //   console.log("loginResponseFailure: ", response);
  // }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{mail}</h1>
      <GoogleLogin
        clientId="784734988187-cmdd5793pnkp1el1b0566fvd5m3ttvi5.apps.googleusercontent.com"
        onSuccess={props.loginSuccess}
        onFailure={props.loginFailure}
      />
    </div>
  );
}

export default GoogleLoginCheck;
