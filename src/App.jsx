import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Thread } from "./thread";
import { Header } from "./Header";
import { New } from "./new";

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Thread />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
};
