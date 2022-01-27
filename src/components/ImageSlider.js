import React, {useState} from 'react';
import { SliderData } from './SliderData';

const left = '<i class="fas fa-arrow-circle-left"></i>'
const right = '<i class="fas fa-arrow-circle-right"></i>'

const ImageSlider = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

const nextSlide= (() => {
    setCurrent(current === length -1 ? 0 : current + 1)
})

const prevSlide = (() =>{
    setCurrent(current === 0 ? length-1 : current -1)
})


if(!Array.isArray(slides) || slides.length <= 0){
    return null;
}

console.log(current);

  return (
      <section className='slider'>
          <i className="fas fa-arrow-circle-left left-arrow" onClick={prevSlide}></i>
          <i className="fas fa-arrow-circle-right right-arrow" onClick={nextSlide}></i>
        {SliderData.map((slide, index) =>{
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <img src={slide.image} alt={slide.alt} key={slide.alt} className='image'/>
                    )}
                </div>
            )
        })}
      </section>
  )
};

export default ImageSlider;
{/* <i class="fas fa-arrow-circle-left"></i> */}
{/* <i class="fas fa-arrow-circle-right"></i> */}