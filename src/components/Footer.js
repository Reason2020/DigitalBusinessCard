import React from "react"
// import twitterLogo from "../images/twitter.jpg"
// import facebookLogo from "../images/facebook.jpg"
// import instagramLogo from "../images/instagram.jpg"
// import githubLogo from "../images/github.jpg"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-media-icon">
                <i className="fa-brands fa-square-twitter icon"></i>
            </div>
            <div className="social-media-icon">
                <i className="fa-brands fa-square-facebook icon"></i>
            </div>
            <div className="social-media-icon">
                <i className="fa-brands fa-square-instagram icon"></i>
            </div>
            <div className="social-media-icon">
                <i className="fa-brands fa-square-github icon"></i>
            </div>
        </footer>
    )
}
