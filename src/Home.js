import React from "react";
import images from "./Slider_images";
import CustomSlider from "./Custom_slider";
import ProductSlider from "./ProductSlider";
import { Button } from "bootstrap";
const Home=()=>{
    return(
        <>
        <div className="App">
          <CustomSlider>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
        </div>
        <div id="Best-selling-bikes">
        <h1>Best Selling Bikes</h1>
        </div>

        <ProductSlider />

        <div id="parallax">
          <div id="parallax-container">
            <h4>Discover The Collection</h4>
            <h1>Sport Bikes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.</p>
          </div> 
          <div id="parallax-ListItem">
            <ul>
              <li>Officia deserunt mollit</li>
              <li>Sunt in culpa qui</li>
              <li>Excepteur sint occaecat</li>
            </ul>
          </div>
          <div id="parallex-Button">
            <a href="#">Explore Now</a>
           </div>
        </div>

        <div id="parallax2">
          
        </div>
        
        <div id="parallax3">
          
        </div>
        </>
    )
}
export default Home;