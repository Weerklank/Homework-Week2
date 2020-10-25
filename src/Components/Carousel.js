import React from "react";

export default function Carousel(props){


    return (
        <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <Slides/>
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

function Slides(){
    return (
        <div className="carousel-inner">
        <div class="carousel-item active">
            <img src={require("../css/Pictures/IMG_2259.png")}class="d-block w-100" alt="My face"/>
        </div>
        <div class="carousel-item">
            <img src={require("../css/Pictures/BodyDog.png")}class="d-block w-100" alt="Me petting my dog while she lays on the couch"/>
        </div>
        <div class="carousel-item">
            <img src={require("../css/Pictures/FaceDog.png")}class="d-block w-100" alt="My face with my dog goofing off"/>
        </div>
        </div>
    )
}