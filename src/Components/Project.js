import React from "react"

export default function Project(props){

    if (props.type === "code") {
    return (
        <div class="col-sm-4">
            <h2 class="divider">{props.name}</h2>
            <a href={props.deployed} target="_blank" rel="noopener noreferrer">
                <img class="img-fluid port-image" src={props.src} alt={props.alt} />
            </a><h2 class="divider"><a href={props.repo} target="_blank" rel="noopener noreferrer">The Repository</a></h2>
        </div>
    )}
    else if (props.type === "image") {
        return (
            <div class="col-sm-4">

            <img class="img-fluid port-image" src={props.src} alt="An example of my art"/>

            </div>
        )
    }
}