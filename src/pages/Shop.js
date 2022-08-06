import React from "react";
import Logo from "../assets/images/shop_img.png"

const Shop = () => {
    return (<div id="about" className="shop">
    <div className="container-fluid">
       <div className="row">
          <div className="col-md-5">
             <div  className="shop_img">
                <figure><img src={Logo} alt="#"/></figure>
             </div>
          </div>
          <div className="col-md-7 padding_right0">
             <div className="max_width">
                <div className="titlepage">
                   <h2>Best SunGlasses  At Our shop</h2>
                   <p>There are many type of branded Glasses are available in our stote. We also sell the frame of many branded glasses.
                   If you want to buy glasses plz visit our website: https://www.sungla.com </p>
                   <a className="read_more" href="!#">Shop Now</a>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>

    )
}
export default Shop