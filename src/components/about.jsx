import React, { Component } from "react";
import "./style.css";

export default class about extends Component {
  render() {
    return (
      <div>
        <div className="card" id="about">
          <div className="row">
            <div className="card-body col-sm-12">
            <h4 className="card-title">About Me</h4>
            </div>
          </div>
          <div className="row">
            <img
              className="profile col-sm-12 mx-auto"
              src={require("../images/tyler.jpg")}
              alt="Tyler Edge"
            />
          </div>
          <div className="row">
            <div className="card-body col-sm-12">
              <h5 className="card-title">Tyler Christopher Edge</h5>
              <p className="card-text">Hey everyone my name is Tyler Christopher Edge. I was born and raised in Clover, South Carolina. Go
                Tigers! Currently I do not have a job in the tech field but I used to be a Tech and Mobile Sales
                Supervisor at
                Staples for 4 years. I enjoy gaming and music in my free time (R.I.P. for the next six months). I also
                have a
                custom built desktop <a href="https://pcpartpicker.com/list/KqrYCb" target="blank">check it out</a>! I
                drive a 2013 VW CC R-Line
                (6 speed manual by the way). I also used to ride motorcycles. I have a 2013 Kawasaki Ninja 300R in
                storage and I
                have been down. I took a 30 yard slide across the asphault on a 110 degree summer day in a t-shirt. My
                father
                graduated from North Myrtle Beach High the same year as Vanna White and was her escort at prom. That
                side of my
                family has been in Myrtle beach as far back as the civil war as far as we can track. Edge stands for
                hill dwellers
                which makes since since my fathers family is mostly farmers or agriculture majors.
            </p>

            <p className="card-text">My mothers side of the family is Polish and we supposedly have family ties to royalty somewhere down the
                line.
                My grandfather was a small cargo pilot and I flew a plane at 4 years old! My mother almost had a heart
                attack over
                that one! I was also in State Honors Choir in Elementary school and used to play trumpet and french
                horn. My dads
                cousin has a side company that designs <a href="https://www.youtube.com/watch?v=GKJqH7-KepI" target="blank">
                    electronic hair trigger equipped rifles</a>. I would love to live in Colorado and my favorite dog
                is a Caucasian
                Shepherd. Feel free to contact me if you want to know more!
            </p>
              
            </div>
          </div>
          <div className="row">
            <div className="card-footer mx-auto">
            <a href="https://github.com/TylerCEdge" target="blank"><img src={require("../images/github.png")}
                            alt="GitHub" className="src contact" /></a>
            <a href="https://stackexchange.com/users/15047538/tyler-edge" target="blank"><img src={require("../images/overflow.png")}
                            alt="Stack Overflow" class="src contact" /></a>
            <a href="https://www.linkedin.com/in/tyler-edge-29530b178/" target="blank"><img src={require("../images/linkedin.png")}
                            alt="LinkedIn" className="src contact" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
