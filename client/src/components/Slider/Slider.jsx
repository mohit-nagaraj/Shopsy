import React from 'react'
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import './slider.scss';
import { useState } from 'react';
const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = () => {
        if(currentSlide===0){
            setCurrentSlide(data.length-1);
        }
        else{
            setCurrentSlide(currentSlide-1);
        }
    }
    const nextSlide = () => {
        if(currentSlide===data.length-1){
            setCurrentSlide(0);
        }
        else{
            setCurrentSlide(currentSlide+1);
        }
    }
  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <KeyboardDoubleArrowLeftOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <KeyboardDoubleArrowRightOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider