import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

function Contact() {
  const { name } = useParams();
  const location = useLocation();
  const history = useHistory();
  return (
    <>
      <h1> Hello, This is Contact {name} Page </h1>
      <h2>The Location is {location.pathname}</h2>
      <button onClick={() => history.goBack()}>GO BACK</button>
      <br />
      <button onClick={() => history.push("./service")}>GO TO SERVICE</button>
      {location.pathname === "/contact/bush" ? (
        <button onClick={() => {}}> Welcome bush </button>
      ) : null}
    </>
  );
}

export default Contact;
