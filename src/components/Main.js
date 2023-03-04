import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsCalendarMonth } from "react-icons/bs"
import { Autoplay, Pagination, Navigation } from "swiper";
import img3 from "../images/3.jpg"
import img2 from "../images/2.jpg"
import img1 from "../images/1.jpg"
import img4 from "../images/7.jpg"
import img5 from "../images/8.jpg"
import img6 from "../images/9.jpg"
import img7 from "../images/10.jpg"
import img8 from "../images/11.jpg"
import img9 from "../images/12.jpg"
import img10 from "../images/13.jpg"
import img11 from "../images/14.jpg"
function Main() {
    let style = {
        first_bigger_box: "w-full h-[1252px]  lg:hidden",
        first_bigger_box_inside_box: "w-full h-[50px] flex lg:w-[72%]",
        small_blue_box_style: "w-[20px] h-[20px] bg-blue-900 rounded-3xl m-[10px]",
        small_white_box_style: "w-[10px] h-[10px]  rounded-3xl absolute  bg-white m-[15px]",
        first_bigger_box_inside_box_h1: "w-[200px] h-[30px] m-[8px] font-bold text-[20px]",
        cards_around_box: "md:flex",
        cards_around_box_first_box: "w-full h-[350px]  md:w-[500px] md:h-[400px]",
        cards_around_box_first_box_inside_img: "rounded-3xl p-[10px] md:w-[500px] md:h-[300px]",
        cards_around_box_first_box_inside_h1: "font-bold p-[10px]",
        second_bigger_box: "lg:hidden",
        carousel: "w-full h-[340px] flex  mt-[560px]  md:mt-[10px]",
        caruosel_inside_box: "flex text-gray-500  m-[20px]",
        caruosel_inside_box_icon: "caruosel_inside_box",
        carousel_inside_box_first_p: "ml-[5px] ",
        carousel_inside_box_second_p: 'ml-[20px] mt-[-10px]',
        carousel_inside_box_img: "w-[200px] h-[340px]",
        three_bigger_box: "hidden md:hidden lg:flex lg:flex-col lg:w-full lg:h-[500px] lg:bg-gray-200 lg:mt-[180px]",
        three_bigger_box_inside_box: "lg:w-[400px] lg:h-[50px] flex m-[20px] ",
        three_bigger_box_inside_box_inside_blue_box: "w-[20px] h-[20px] bg-blue-900 rounded-3xl m-[12px]",
        three_bigger_box_inside_box_inside_white_box: "w-[10px] h-[10px]  rounded-3xl absolute  bg-white m-[17px]",
        three_bigger_box_inside_box_inside_h1: " w-[200px] h-[30px] m-[8px] font-bold text-[20px]",
        three_bigger_box_second_box: "lg:w-full lg:h-[500px]  mt-[10px] flex",
        three_bigger_box_second_box_inside_first_box: "w-[280px] h-[350px]  ml-[95px] mt-[10px] lg:bg-white",
        three_bigger_box_second_box_inside_first_box_h1: "mt-[170px] m-[20px] text-[20px] font-bold",
        three_bigger_box_second_box_inside_second_box: "w-[250px] h-[150px] bg-blue-800 absolute ml-[95px]  mt-[10px]",
        three_bigger_box_second_box_inside_img: "w-[240px] h-[150px]  absolute ml-[75px]  mt-[0px]",
        three_bigger_box_three_box: "w-[280px] h-[350px]  ml-[95px] mt-[10px] lg:bg-white",
        three_bigger_box_three_box_inside_h1: "mt-[170px] m-[20px] text-[20px] font-bold",
        three_bigger_box_four: "w-[250px] h-[150px] bg-blue-800 absolute ml-[470px]  mt-[10px]",
        three_bigger_box_four_inside_img: "w-[240px] h-[150px]  absolute ml-[450px]  mt-[0px]",
        three_bigger_box_five: "w-[280px] h-[350px]  ml-[95px] mt-[10px] lg:bg-white",
        three_bigger_box_five_img: "mt-[170px] m-[20px] text-[20px] font-bold",
        three_bigger_box_six: "w-[250px] h-[150px] bg-blue-800 absolute ml-[845px]  mt-[10px]",
        three_bigger_box_six_inside_img: "w-[240px] h-[150px]  absolute ml-[825px]  mt-[0px]",
    }
    return (
        <div className=''>
            <div className={style.first_bigger_box}>
                <div className={style.first_bigger_box_inside_box}>
                    <div className={style.small_blue_box_style}></div>
                    <div className={style.small_white_box_style}></div>
                    <h1 className={style.first_bigger_box_inside_box_h1}> Dolzarb xabarlarz</h1>
                </div>
                <div className={style.cards_around_box}>
                    <div className={style.cards_around_box_first_box}>
                        <img src={img4} alt="" className={style.cards_around_box_first_box_inside_img} />
                        <h1 className={style.cards_around_box_first_box_inside_h1}>G'arb Ukrainani qo'llashda davom etaveradimi yoki barchasi Putin istagandek tugaydimi</h1>
                    </div>
                    <div className={style.cards_around_box_first_box}>
                        <img src={img5} alt="" className={style.cards_around_box_first_box_inside_img} />
                        <h1 className={style.cards_around_box_first_box_inside_h1}>"Kuvaldaning yangi qurbni"."Vagner" navbatdagi daxshatli qatli haqida nimalar ma'lum?  </h1>
                    </div>
                </div>
                <div className={style.cards_around_box}>
                    <div className={style.cards_around_box_first_box}>
                        <img src={img6} alt="" className={style.cards_around_box_first_box_inside_img} />
                        <h1 className={style.cards_around_box_first_box_inside_h1}>Frontdagi vaziayt: Rossiya Donbassga 4 yo'nalishdan xujum qilmoqda</h1>
                    </div>
                    <div className={style.cards_around_box_first_box}>
                        <img src={img7} alt="" className={style.cards_around_box_first_box_inside_img} />
                        <h1 className={style.cards_around_box_first_box_inside_h1}>"Yaxshiyam Qo'shnilarimizda Mirziyoyev prezident,Karimov emas-Ataboyev O'zbek qizrg'iz chegara masalasi hal qilingani haqida"</h1>
                    </div>
                </div>

                <div className={style.cards_around_box_first_box}>
                    <img src={img8} alt="" className={style.cards_around_box_first_box_inside_img} />
                    <h1 className={style.cards_around_box_first_box_inside_h1}>Jo'rabek Mirzamahmudov: "Lukoyl" bilan shartnoma 55/45 O'zbekiston foydasiga</h1>
                </div>
            </div>
            {/* ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo */}
            <div className={style.second_bigger_box}>
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
                        <div className={style.caruosel_inside_box}>
                            <BsCalendarMonth className={style.caruosel_inside_box_icon} />
                            <p className={style.carousel_inside_box_first_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.carousel_inside_box_second_p}>Lorem ipsum untur tempora labore </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img2} alt="" />
                        <div className={style.caruosel_inside_box}>
                            <BsCalendarMonth className={style.caruosel_inside_box_icon} />
                            <p className={style.carousel_inside_box_first_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.carousel_inside_box_second_p}>Lorem ipsum dolor sit amet consectetue </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img1} alt="" />
                        <div className={style.caruosel_inside_box}>
                            <BsCalendarMonth className={style.caruosel_inside_box_icon} />
                            <p className={style.carousel_inside_box_first_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.carousel_inside_box_second_p}>Lorem ipsum dolor sit amet consectetur  </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img3} alt="" />
                        <div className={style.caruosel_inside_box}>
                            <BsCalendarMonth className={style.caruosel_inside_box_icon} />
                            <p className={style.carousel_inside_box_first_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.carousel_inside_box_second_p}>Lorem ipsum dolor sit amet consectetur </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img3} alt="" />
                        <div className={style.caruosel_inside_box}>
                            <BsCalendarMonth className={style.caruosel_inside_box_icon} />
                            <p className={style.carousel_inside_box_first_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.carousel_inside_box_second_p}>Lorem ipsum dolor sit amet consectet</p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img3} alt="" />
                        <div className={style.caruosel_inside_box}>
                            <BsCalendarMonth className={style.caruosel_inside_box_icon} />
                            <p className={style.carousel_inside_box_first_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.carousel_inside_box_second_p}>Lorem ipsum dolor sit amet consectetur  </p>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={img3} alt="" />
                        <div className={style.caruosel_inside_box}>
                            <BsCalendarMonth className={style.caruosel_inside_box_icon} />
                            <p className={style.carousel_inside_box_first_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.carousel_inside_box_second_p}>Lorem ipsum dolor sit amet consectetur  </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt={style.carousel_inside_box_img} />
                        <div className={style.caruosel_inside_box}>
                            <BsCalendarMonth className={style.caruosel_inside_box_icon} />
                            <p className={style.carousel_inside_box_first_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.carousel_inside_box_second_p}>Lorem ipsum dolor sit amet consectetur  </p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt={style.carousel_inside_box_img} />
                        <div className={style.caruosel_inside_box}>
                            <BsCalendarMonth className={style.caruosel_inside_box_icon} />
                            <p className={style.carousel_inside_box_first_p}>13:30/15.02.23</p>
                        </div>
                        <p className={style.carousel_inside_box_second_p}>Lorem ipsum dolor sit amet consectetur  </p>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={style.three_bigger_box}>
                <div className={style.three_bigger_box_inside_box}>
                    <div className={style.three_bigger_box_inside_box_inside_blue_box}></div>
                    <div className={style.three_bigger_box_inside_box_inside_white_box}></div>
                    <h1 className={style.three_bigger_box_inside_box_inside_h1}>Intervyuv</h1>
                </div>
                <div className={style.three_bigger_box_second_box}>
                    <div className={style.three_bigger_box_second_box_inside_first_box}>
                        <h1 className={style.three_bigger_box_second_box_inside_first_box_h1}>Toshkent uchun sotib olinayotgan 100ta Abtobusdan 200tasi 18metrli bo'ladi</h1>
                    </div>
                    <div className={style.three_bigger_box_second_box_inside_second_box}></div>
                    <img src={img9} alt="" className={style.three_bigger_box_second_box_inside_img} />

                    <div className={style.three_bigger_box_three_box}>
                        <h1 className={style.three_bigger_box_three_box_inside_h1}>Toshkent uchun sotib olinayotgan 100ta Abtobusdan 200tasi 18metrli bo'ladi</h1>
                    </div>
                    <div className={style.three_bigger_box_four}></div>
                    <img src={img10} alt="" className={style.three_bigger_box_four_inside_img} />

                    <div className={style.three_bigger_box_five}>
                        <h1 className={style.three_bigger_box_five_img}>Toshkent uchun sotib olinayotgan 100ta Abtobusdan 200tasi 18metrli bo'ladi</h1>
                    </div>
                    <div className={style.three_bigger_box_six}></div>
                    <img src={img11} alt="" className={style.three_bigger_box_six_inside_img} />
                </div>
            </div >
        </div >
    )
}

export default Main