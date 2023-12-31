import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Thread } from "./thread";
import { Header } from "./Header";
import { New } from "./new";
import { Post } from "./viewPost";

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Thread />} />
        <Route path="/thread/new" element={<New />} />
        <Route path="/thread/:postId" element={<Post />} />
      </Routes>
    </div>
  );
};
