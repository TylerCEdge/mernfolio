import React, { Component } from "react";
import "./style.css";

export default class card extends Component {
  render() {
    return (
      <div>
        <div className="card" id="education">
          <div className="row">
            <div className="card-body col-sm-12">
              <h4 className="card-title">Education</h4>
              <p>UNCC Bootcamp - Full Stack Web Developer - Jan 2019 to Jul 2019 (Certificate completed: July 2019)</p>
              <p>York Technical College - Clemson University Bridge Program for Computer Science - 2012 to 2015</p>
              <p>Clover High School - Graduated 2009</p>
              <h4 className="card-title">Extra Curricular</h4>
              <p>Penetration Testing and Ethical Hacking - Jul 2019 to Present via Cybrary</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
