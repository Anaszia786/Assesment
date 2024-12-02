import React from "react";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route
          path="/addTodo"
          element={
            <PrivateRoute>
              <AddTodo />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
