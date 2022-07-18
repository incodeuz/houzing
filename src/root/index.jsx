import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Error from "../pages/Error";
import { navbar } from "../utils/navbar";
import { Container } from "./style";

const Root = () => {
  return (
    <Container>
      <Routes>
        <Route element={<Navbar />}>
        <Route path="/" element={<Navigate to={"/home"} />} />
          {navbar.map((value) => (
            <Route key={value.id} path={value.path} element={value.element} />
          ))}
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
  );
};

export default Root;
