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
        
        </>
    )
}
export default Home;