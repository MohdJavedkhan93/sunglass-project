import React from "react";
import Logo from "../assets/images/about_img.png"

const About = () => {
    return ( <div className="about">
    <div className="container">
       <div className="row d_flex">
          <div className="col-md-5">
             <div className="about_img">
                <figure><img src={Logo} alt="#"/></figure>
             </div>
          </div>
          <div className="col-md-7">
             <div className="titlepage">
                <h2>About Our Shop</h2>
                <p>There are many type of branded Glasses are available in our stote. We also sell the frame of many branded glasses.
                  If you want to buy glasses plz visit our website: https://www.sungla.com</p>
             </div>
             <a className="read_more" href="!#">Read More</a>
          </div>
       </div>
    </div>
 </div>

    )
}
export default About