import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import swiper1 from '../assets/swiper1.jpg'
import swiper2 from '../assets/swiper2.jpg'
import swiper3 from '../assets/swiper3.jpg'
import swiper4 from '../assets/swiper4.jpg'
import swiper5 from '../assets/swiper5.jpg'
import swiper6 from '../assets/swiper6.jpg'
import swiper7 from '../assets/swiper7.jpg'
import swiper8 from '../assets/swiper8.jpg'
import swiper9 from '../assets/swiper9.jpg'


const HomeSwiper = () => {
    return (
        <div>

            <div className='px-[150px] pt-[50px]'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop
                    className="w-full mx-auto rounded-2xl overflow-hidden relative z-[1]" // важно overflow-hidden для скруглений
                >
                    <SwiperSlide>
                        <img src={swiper1} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper2} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper3} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper4} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper5} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper6} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper7} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper8} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiper9} alt="" className="w-full h-full object-cover" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSwiper