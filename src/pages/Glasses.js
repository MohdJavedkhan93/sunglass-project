import React from "react";

const Glasses = () => {
    return (<div className="glasses">
    <div className="container">
       <div className="row">
          <div className="col-md-10 offset-md-1">
             <div className="titlepage">
                <h2>Our Glasses</h2>
                <p>Branded Glasses
                </p>
             </div>
          </div>
       </div>
    </div>
    <div className="container-fluid">
       <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
             <div className="glasses_box">
                <figure><img src={require(`../assets/images/glass1.png`)} alt="#"/></figure>
                <h3><span className="blu">$</span>50</h3>
                <p>Sunglasses</p>
             </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
             <div className="glasses_box">
                <figure><img src={require(`../assets/images/glass2.png`)} alt="#"/></figure>
                <h3><span className="blu">$</span>50</h3>
                <p>Sunglasses</p>
             </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
             <div className="glasses_box">
                <figure><img src={require(`../assets/images/glass3.png`)} alt="#"/></figure>
                <h3><span className="blu">$</span>50</h3>
                <p>Sunglasses</p>
             </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
             <div className="glasses_box">
                <figure><img src={require(`../assets/images/glass4.png`)} alt="#"/></figure>
                <h3><span className="blu">$</span>50</h3>
                <p>Sunglasses</p>
             </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
             <div className="glasses_box">
                <figure><img src={require(`../assets/images/glass5.png`)} alt="#"/></figure>
                <h3><span className="blu">$</span>50</h3>
                <p>Sunglasses</p>
             </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
             <div className="glasses_box">
                <figure><img src={require(`../assets/images/glass6.png`)} alt="#"/></figure>
                <h3><span className="blu">$</span>50</h3>
                <p>Sunglasses</p>
             </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
             <div className="glasses_box">
                <figure><img src={require(`../assets/images/glass7.png`)} alt="#"/></figure>
                <h3><span className="blu">$</span>50</h3>
                <p>Sunglasses</p>
             </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
             <div className="glasses_box">
                <figure><img src={require(`../assets/images/glass8.png`)} alt="#"/></figure>
                <h3><span className="blu">$</span>50</h3>
                <p>Sunglasses</p>
             </div>
          </div>
          <div className="col-md-12">
             <a className="read_more" href="!#">Read More</a>
          </div>
       </div>
    </div>
 </div>

    )
}
export default Glasses