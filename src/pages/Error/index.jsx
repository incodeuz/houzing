import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>404 Error</h1>
      <p>
        <strong style={{ fontWeight: "900" }}>
          {window.location.pathname}
        </strong> - Page not found :(
      </p>
      <br />
      <br />
      <Container.Button onClick={() => navigate("/home")}>
        Go Home
      </Container.Button>
    </Container>
  );
};

export default Error;
