import "./App.css";
import React from "react";
import Header from "./components/header/Header.js";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ChartFeed from "./components/chartfeed/ChartFeed";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={[<Header />, <Footer />]} />
        <Route path="/home" element={[<Header />, <Footer />]} />
        <Route path="/about" element={[<Header />, <About />, <Footer />]} />
        <Route
          path="/charts"
          element={[<Header />, <ChartFeed />, <Footer />]}
        />
        <Route path="/import" element={[<Header />, <Footer />]} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/logout"
          exact
          component={() => <Login message="User Logged Out Successfully." />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
