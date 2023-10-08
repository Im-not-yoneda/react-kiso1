import React from "react";
import "./App.css";
import { Thread } from "./thread";
import { Header } from "./Header";

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Thread />
    </div>
  );
};
