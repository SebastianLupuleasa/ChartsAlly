import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";

const BootLink = () => {
  const [info, setInfo] = useState([]);

  const fetchInfo = () => {
    axios.get("http://localhost:8080/react/").then((res) => {
      setInfo(res.data);
    });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  return <h1>{info}</h1>;
};

const Home = () => {
  return (
    <div>
      <BootLink />
    </div>
  );
};

export default Home;
