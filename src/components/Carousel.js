import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img3 from "../images/3.jpg"
import img2 from "../images/2.jpg"
import img1 from "../images/1.jpg"
import { BsCalendarMonth } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"
import { Autoplay, Pagination, Navigation } from "swiper";
function Carousel() {
    let style = {
        carousel_big_box: "",
        from_carousel_before_box: "flex flex-col lg:hidden",
        from_carousel_before_box_inside_box: "lg:hidden w-[full h-[50px] flex",
        from_carousel_before_box_inside_box_inside_first_box: "w-[20px] flex h-[20px] bg-blue-900 rounded-3xl m-[10px] md:ml-[18px]",
        from_carousel_before_box_inside_box_inside_second_white_box: "w-[10px] h-[10px]  rounded-3xl absolute  bg-white m-[15px] md:ml-[23px]",
        from_carousel_before_box_inside_box_h1: "w-[200px] h-[30px] m-[10px]",
        from_carousel_before_box_inside_box_icon: "text-[25px] ml-[90px] mt-[10px] md:ml-[650px]",
        carousel: " w-full h-[340px] flex ",
        inside_carousel: "flex text-gray-500  m-[20px]",
        inside_carousel_inside_icon: "mt-[5px]",
        inside_carousel_inside_p: "ml-[5px]",
        inside_carousel_inside_second_p: "ml-[20px] mt-[-10px]",
        inside_carousel_inside_first: "inside_carousel_inside",
        next_carousel_big_box: "hidden md:hidden lg:flex lg:flex-col lg:w-[70%] lg:h-[400px] border-2 border-black",
        next_carousel_big_box_first_box: "flex w-[300px] h-[50px] "
    }
    return (
        <div className="">
            <div className={style.from_carousel_before_box}>
                <div className={style.from_carousel_before_box_inside_box}>
                    <div className={style.from_carousel_before_box_inside_box_inside_first_box}></div>
                    <div className={style.from_carousel_before_box_inside_box_inside_second_white_box}></div>
                    <h1 className={style.from_carousel_before_box_inside_box_h1}>So'nggi yangiliklar</h1>
                    <BsArrowRight className={style.from_carousel_before_box_inside_box_icon} />
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={style.carousel}>
                    <SwiperSlide >
                        <img src={img3} alt="" />
                        <div className={style.inside_carousel}>
                            <BsCalendarMonth className={style.inside_carousel_inside_icon} />
                            <p className={style.inside_carousel_inside_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.inside_carousel_inside_second_p}>Lorem ipsum untur tempora labore </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img2} alt="" />
                        <div className={style.inside_carousel}>
                            <BsCalendarMonth className={style.inside_carousel_inside_icon} />
                            <p className={style.inside_carousel_inside_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.inside_carousel_inside_second_p}>Lorem ipsum dolor sit amet consectetue </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img1} alt="" />
                        <div className={style.inside_carousel}>
                            <BsCalendarMonth className={style.inside_carousel_inside_icon} />
                            <p className={style.inside_carousel_inside_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.inside_carousel_inside_second_p}>Lorem ipsum dolor sit amet consectetur  </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img3} alt="" />
                        <div className={style.inside_carousel}>
                            <BsCalendarMonth className={style.inside_carousel_inside_icon} />
                            <p className={style.inside_carousel_inside_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.inside_carousel_inside_second_p}>Lorem ipsum dolor sit amet consectetur </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img3} alt="" />
                        <div className={style.inside_carousel}>
                            <BsCalendarMonth className={style.inside_carousel_inside_icon} />
                            <p className={style.inside_carousel_inside_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.inside_carousel_inside_second_p}>Lorem ipsum dolor sit amet consectet</p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img3} alt="" />
                        <div className={style.inside_carousel}>
                            <BsCalendarMonth className={style.inside_carousel_inside_icon} />
                            <p className={style.inside_carousel_inside_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.inside_carousel_inside_second_p}>Lorem ipsum dolor sit amet consectetur  </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img3} alt="" />
                        <div className={style.inside_carousel}>
                            <BsCalendarMonth className={style.inside_carousel_inside_icon} />
                            <p className={style.inside_carousel_inside_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.inside_carousel_inside_second_p}>Lorem ipsum dolor sit amet consectetur  </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt={style.inside_carousel_inside_first} />
                        <div className={style.inside_carousel}>
                            <BsCalendarMonth className={style.inside_carousel_inside_icon} />
                            <p className={style.inside_carousel_inside_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.inside_carousel_inside_second_p}>Lorem ipsum dolor sit amet consectetur  </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt={style.inside_carousel_inside_first} />
                        <div className={style.inside_carousel}>
                            <BsCalendarMonth className={style.inside_carousel_inside_icon} />
                            <p className={style.inside_carousel_inside_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.inside_carousel_inside_second_p}>Lorem ipsum dolor sit amet consectetur  </p>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={style.next_carousel_big_box}>
                <div className={style.next_carousel_big_box_first_box}>
                    <div className="w-[18px] h-[18px] bg-blue-900 rounded-3xl m-[15px] "></div>
                    <div className='w-[10px] h-[10px]  rounded-3xl absolute  bg-white ml-[19px] mt-[19px] '></div>
                    <h1 className=' w-[200px] h-[30px] ml-[4px] mt-[10px] font-bold text-[20px]'>So'nggi yangiliklar</h1>
                </div>
                <div className="w-full  h-[400px] border-2 border-black flex">
                    <div className="w-[35%] h-[300px] border-2 border-black">
                        <img src={img3} alt="" className="w-[260px] h-[150px] m-[10px] " />
                        <div className="flex  m-[10px] ">
                            <BsCalendarMonth className='mt-[5px]' />
                            <p className='ml-[5px] text-gray-500  '>13:30/15.02.23</p>
                        </div>
                        <h1 className="m-[10px]">Mahallalarda yurgan ko'chma shifoxonalar</h1>
                    </div>
                    <div className="w-[35%] h-[300px] border-2 border-black">
                        <img src={img3} alt="" className="w-[260px] h-[150px] m-[10px] " />
                        <div className="flex  m-[10px] ">
                            <BsCalendarMonth className='mt-[5px]' />
                            <p className='ml-[5px] text-gray-500  '>13:30/15.02.23</p>
                        </div>
                        <h1 className="m-[10px]">Mahallalarda yurgan ko'chma shifoxonalar</h1>
                    </div>
                    <div className="w-[35%] h-[300px] border-2 border-black">
                        <img src={img3} alt="" className="w-[260px] h-[150px] m-[10px]" />
                        <div className="flex  m-[10px] ">
                            <BsCalendarMonth className='mt-[5px]' />
                            <p className='ml-[5px] text-gray-500  '>13:30/15.02.23</p>
                        </div>
                        <h1 className="m-[10px]">Mahallalarda yurgan ko'chma shifoxonalar</h1>
                    </div>
                </div>
            </div>

        </div >

    );
}

export default Carousel