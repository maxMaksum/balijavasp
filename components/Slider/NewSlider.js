import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {mockData2} from '../MockData/MockData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import CardContentWelcome from '../Card/CardContentWelcome';


const PreviousBtn = (props)=>{
  const {className, onClick} =props
  return(
    <div className={className} onClick ={onClick} className="left-0 absolute top-1/2">
      <div className="flex items-center justify-center  z-10 h-8  p-2 w-10">
    <FontAwesomeIcon
              icon={faArrowCircleLeft}
              className="  z-10 h-5 hover:animate-bounce  text-teal-500 text-xl"
    />
    </div>
  </div>
  )
 
}

const NextBtn = (props)=>{
  const {className, onClick, style} =props
  return(
    <div className={className} onClick ={onClick} className=" z-0 right-3 absolute top-1/2 "  >
      <div className="  flex items-center justify-center  z-10 h-8  p-2 w-10">
    <FontAwesomeIcon
              icon={faArrowCircleRight}
              className=" z-10  h-5 hover:animate-bounce text-teal-500 text-xl"
    />
    </div>
  </div>
  )
 
}

function NewSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        prevArrow:<PreviousBtn/>,
        nextArrow:<NextBtn/>,
        
      };

    return (
      <Slider {...settings} className=" z-10  bg-teal-500 mb-2">
        {mockData2.map((homedata) => (
          <div className=" relative" key={homedata.id} id={homedata.id} >
            <div className ="flex flex-col sm:flex-row justify-start">
              <div className=" z-10  flex">
                <MyImage url={homedata.image} />
              </div>

              <div className="flex justify-center items-center w-full">
                <CardContentWelcome excerpt={homedata.excerpt} />
              </div>
             
            </div>
            <div className="z-5 absolute h-96 w-full bg-gradient-to-t from-gray-900 to transparent top-0 left-0"></div>
          </div>
        ))}
      </Slider>
    );
}

export default NewSlider

function MyImage({url}){
  return(
    <div  className="p-2">
        <img src={url} className="object-contain object-center h-48 z-0 w-full"/>
    </div>
  )
}