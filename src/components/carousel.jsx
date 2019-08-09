import React, { Component } from 'react'

export default class carousel extends Component {
    render() {
        return (
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={require("../images/kawasaki.jpg")} alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={require("../images/certificate.jpg")} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={require("../images/class.jpg")} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        )
    }
}
