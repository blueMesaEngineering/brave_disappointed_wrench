import React, { Component } from "react";
import logo from "../../../Assets/Images/Profiles/NDG-Profile-20190714.png";

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <div>
          <img src={logo} alt={"ND Guthrie"} />
        </div>
        <p>Nathan D. Guthrie</p>
        <p>Dr. Stephen Hall</p>
      </div>
    );
  }
}

export default About;
