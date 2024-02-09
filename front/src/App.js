import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EmptyLayout from "./Layouts/EmptyLayout";
import Chat from "./Components/Chat";
import Login from "./Pages/Login";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          exact
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          exact
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
