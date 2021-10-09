import React from "react";
import Carousel from "../Components/Carousel";

export default function Index(){


    return (
        <div id="index" className="intro">
            <br/>
            <Carousel/>
            <div class="container">
            <h1><b>Hi! My name is Echo</b></h1>
            </div>
            <p>I'm an artist, dancer, gamer, and professional coder.</p>
            <br/>
            <p>If you have any questions or have a project you'd like me to take a look at feel free to enter your information in my contact section or email me at the address below.</p>
            <a className="socials" href="https://github.com/Weerklank" target="_blank" rel="noopener noreferrer">My Github</a>
            <a className="socials" href="https://www.linkedin.com/in/zoe-vanryn-gregg-50b108177/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
            <p>E-mail: <a className="socials"href="mailto:echo.vanryn@gmail.com">Echo.vanryn@gmail.com</a></p>
            <br/>
            <h1>Have a lovely day!~</h1>
        </div>
    )
}