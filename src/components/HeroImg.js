import "./HeroImg.css"
import React from 'react'
import IntroImg from "../assets/intro.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="into-img" src={IntroImg} alt="IntroImg"/>
             </div>
             <div className="content">
                <p>HI, I'M ADARSH.</p>
                <h1>FRONTEND DEVELOPER</h1>
                <div>
                <Link to="/project" className="btn">projects</Link>
             <Link to="/contact" className="btn btn-light">contact</Link>
                </div>
             </div>
    </div>
  )
}

export default HeroImg