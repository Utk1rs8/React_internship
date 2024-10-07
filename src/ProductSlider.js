import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./product";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "24EX500G_242BK1DRF3CG_A-removebg-preview.png",
          title:"Kawasaki ninja 500",
          price:620000
        },
        {
          img: "23ZX1002P_40RBK1DRF3CG_A-removebg-preview.png",
          title:"Kawasaki H2 SX",
          price:620000
        },
        {
          img: "24ZX636J_40RGN1DRF3CG_A-removebg-preview.png",
          title:"Kawasaki ZX-6R",
          price:620000
        },
        {
          img: "bmw-select-model-light-whitem-motorsport-1696501104164.webp",
          title:"BMW S1000R",
          price:620000
        },
        {
          img: "BMW-website-600x360-S-1000-RR.jpg.asset.1686660374063.jpg",
          title:"BMW S1000RR",
          price:620000
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00"
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc"
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd"
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222"
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00"
        }
      ]
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive Product Carousel</h2>
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard imgSrc={slide.img} title={slide.title} price={slide.price}/>
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
