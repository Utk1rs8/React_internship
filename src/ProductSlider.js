import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProductCard from "./product";
import axios from "axios";
import { useDispatch } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const ProductSlider = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
    
  const loadData = () => {
    let url = "http://127.0.0.1:8000/slider/";
    axios.get(url).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {mydata.map((slide, index) => (
          <div key={index}>
            <ProductCard imgSrc={slide.image} title={slide.name} price={slide.price} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
