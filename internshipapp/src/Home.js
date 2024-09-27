import React from "react";
import images from "./Slider_images";
import CustomSlider from "./Custom_slider";
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
        
        </>
    )
}
export default Home;