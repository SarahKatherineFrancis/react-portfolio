import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "My Client",
    review: "Want to be my first client? Your business could be featured on my portfolio website!"
  },
  {
    avatar: AVTR1,
    name: "My Client",
    review: "Want to be my first client? Your business could be featured on my portfolio website!"
  },
  {
    avatar: AVTR1,
    name: "My Client",
    review: "Want to be my first client? Your business could be featured on my portfolio website!"
  },
  {
    avatar: AVTR1,
    name: "My Client",
    review: "Want to be my first client? Your business could be featured on my portfolio website!"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">
              {review}
            </small>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
