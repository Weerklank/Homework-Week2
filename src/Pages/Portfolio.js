import React from "react";
import Project from "../Components/Project";

export default function Portfolio(){

    const projects = [
        {
            type: "code",
            name: "Tunado",
            deployed: "https://weerklank.github.io/HyperSlugs/",
            src: require("../css/Pictures/Tunado.png"),
            alt: "A finished spotify project screenshot",
            repo: "https://github.com/Weerklank/HyperSlugs"
        },
        {
            type: "code",
            name: "Password Generator",
            deployed: "https://weerklank.github.io/RandomPasswordGenerator/",
            src: require("../css/Pictures/PassGen.png"),
            alt: "A screenshot of a small password generating project",
            repo: "https://weerklank.github.io/RandomPasswordGenerator/"
        },
        {
            type: "code",
            name: "Alertify",
            deployed: "https://alertifynow.herokuapp.com/",
            src: require("../css/Pictures/Alertify.png"),
            alt: "A finished alert app project screenshot",
            repo: "https://github.com/thusted/Alertify"
        },
        {
            type: "code",
            name: "Moodscape",
            deployed: "https://moodscape2.herokuapp.com/",
            src: require("../css/Pictures/WIP.png"),
            alt: "A image of the letters 'WIP' representing that the project is a Work In Progress",
            repo: "https://github.com/Weerklank/Moodscape"
        },
        {
            type: "code",
            name: "Coding Quiz",
            deployed: "https://weerklank.github.io/HowMuchDoYouKnowAboutCoding/",
            src: require("../css/Pictures/HMDYKAC.png"),
            alt: "Screenshot of a coding quiz",
            repo: "https://github.com/Weerklank/HowMuchDoYouKnowAboutCoding"
        },
        {
            type: "code",
            name: "Daily Calendar",
            deployed: "https://weerklank.github.io/DailyCalendar/",
            src: require("../css/Pictures/DailyCalendar.png"),
            alt: "A screenshot of a small daily calendar",
            repo: "https://github.com/Weerklank/DailyCalendar"
        },
        {
            type: "image",
            src: require("../css/Pictures/Art2.png")
        },
        {
            type: "image",
            src: require("../css/Pictures/Art1.png")
        },
        {
            type: "image",
            src: require("../css/Pictures/Art4.png")
        },
        {
            type: "image",
            src: require("../css/Pictures/Art5.png")
        },
        {
            type: "image",
            src: require("../css/Pictures/Art3.png")
        },
        {
            type: "image",
            src: require("../css/Pictures/Art6.png")
        }
    ]

    return (
        <div className="projContainer">
        {projects.map(({ type, name, deployed, src, alt, repo }) => {
            return (
            <Project type={type} name={name} deployed={deployed} src={src} alt={alt} repo={repo} />
            )
        })}
        </div>
    )
}