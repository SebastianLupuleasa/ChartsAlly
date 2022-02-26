import React, { Component } from "react";
import "./About.css";
import structure from "./structure.png";
import architecture from "./architecture.png";

export default class ChartFeed extends Component {
  render() {
    return (
      <div className="mainCharts">
        <h1>ChartsAlly</h1>
        I created an web app which displays information from datasets using
        charts. I have chosen this subject because charts are very useful for
        the display and visualization of information especially since charts can
        be integrated in a web app for ease of access and portability. My app
        displays informations useful to the police like
        accidents/crashes,complaints,officers assulted,etc. so it uses an police
        dataset. Users are able to choose the type of chart they want to display
        and customize the charts. They can be log-in, register so they can save
        their custom charts also they can add their own datasets to be used. The
        back-end of the app is done in Java using Spring Boot, the front-end is
        done in React and for the charts I used the Recharts library based on
        React components. The app has an responsive design and an minimalistic
        user interface so it can be used efficiently anywhere.
        <br />
        <br />
        <p className="githubLink">
          Github repository:
          <br />
          <a href="https://github.com/SebastianLupuleasa/ChartsAlly">
            https://github.com/SebastianLupuleasa/ChartsAlly
          </a>
        </p>
        <div className="aboutImages">
          <br />
          <h2>App Architecture:</h2>
          <br />
          <img src={architecture} alt="architecture" />
          <br />
          <h2>General Structure:</h2>
          <br />
          <img src={structure} alt="structure" />
          <br />
        </div>
      </div>
    );
  }
}
