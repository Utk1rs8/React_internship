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
            <h1>SPORTS Bikes</h1>
            <p>A sports bike is a high-performance motorcycle designed for speed, agility, and precise handling, featuring a powerful engine, lightweight frame, and aerodynamic design for fast riding and cornering.</p>
          </div> 
          <div id="parallax-ListItem">
            <ul>
              <li>High-performance engine</li>
              <li>Aerodynamic design</li>
              <li>Responsive handling</li>
            </ul>
          </div>
          <div id="parallex-Button">
            <a href="#">Explore Now</a>
           </div>
        </div>

        <div id="parallax2">
          <div id="parallax-all">
            <div id="parallax-container">
              <h4>Discover The Collection</h4>
              <h1>CRUISER Bikes</h1>
              <p>Cruiser bikes are motorcycles known for their low, relaxed riding position, larger engines, and classic design. Built for comfort and long-distance cruising, they offer a smooth ride on highways and open roads.</p>
            </div>
            <div id="parallax-ListItem">
              <ul>
                <li>Comfortable riding position</li>
                <li>Large-displacement engines</li>
                <li>Classic styling</li>
              </ul>
            </div>
            <div id="parallex-Button">
              <a href="#">Explore Now</a>
              </div>
          </div>
        </div>
        
        <div id="parallax3">
          <div id="parallax-container">
            <h4>Discover The Collection</h4>
            <h1>TOURING Bikes</h1>
            <p>Touring bikes are designed for long-distance travel, prioritizing comfort, storage, and advanced features for riders on extended journeys.</p>
          </div>
          <div id="parallax-ListItem">
            <ul>
              <li>Advanced comfort</li>
              <li>Extensive storage</li>
              <li>High-tech features</li>
            </ul>
          </div>
          <div id="parallex-Button">
            <a href="#">Explore Now</a>
          </div>
        </div>
        <div id="Born-to-race">
        <h1>#Born To Race</h1>
        </div>
        <div id="Bike-video">
        <video loop autoPlay muted width="70%">
          <source src="bike vid - Made with Clipchamp.mp4" type="video/mp4" />
        </video>
      </div>

        </>
    )
}
export default Home;
