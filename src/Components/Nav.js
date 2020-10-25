import React from "react"

export default function Nav(){
    return (
        <nav>
            <ul className="nav-links">
                <li><a className="nav-link" href="/">Home</a></li>
                <li><a className="nav-link" href="/portfolio">Portfolio</a></li>
                <li><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}