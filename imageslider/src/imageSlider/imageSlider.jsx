import React,{useState} from 'react';
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs";
import "./imageSlider.css";

export default function ImageSlider({data}){
        const [slide,setSlide]=React.useState(0);

        const nextSlide=()=>{
            setSlide(curr => curr===data.length-1?0:curr+1)
        }
        const prevSlide=()=>{
            setSlide(curr => curr===0?data.lenght-1:curr-1)
        }
        return (
            <div className='carasol'>
                <BsArrowLeftCircleFill onClick={prevSlide}/>
                {
                    data.map((item , idx ) => {
                        return <img src={require('../memecollection/' +item.image)} alt={item.alt} key={idx} className={slide===idx? "slide":"slide slide-hidden"}/>
                    })
                }
                <BsArrowRightCircleFill onClick={nextSlide}/>
            </div>
        );
    }


