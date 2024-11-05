import React from "react";
import images from "./Slider_images";
import CustomSlider from "./Custom_slider";
import ProductSlider from "./ProductSlider";
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
          
        </div>

        <div id="parallax2">
          
        </div>
        
        <div id="parallax3">
          
        </div>
        <div id="Born-to-race">
        <h1>#Born To Race</h1>
        </div>
        <div id="Bike-video">
          <video loop autoplay muted  width="70%" >
             <source src="bike vid - Made with Clipchamp.mp4" type="video/mp4"/>
          </video>
        </div>
        </>
    )
}
export default Home;
