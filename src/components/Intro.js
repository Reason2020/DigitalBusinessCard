import React from "react"
import logo from "../images/profile.jpg"


export default function Intro() {
    return (
        <div className="intro">
            <picture className="profile-picture">
                <img src={logo} alt="Reason Shrestha Profile" className="profile-picture__image"/>
            </picture>
            <div className="personal-info">
                <h1 className="personal-info__name">Reason Shrestha</h1>
                <h3 className="personal-info__job">Frontend Developer</h3>
                <p className="personal-info__others">reasonshrestha_website</p>
            </div>
            <div className="connect-buttons">
                <button className="btn email-btn"><i class="fa-solid fa-envelope"></i>Email</button>
                <button className="btn linked-in-btn"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}
