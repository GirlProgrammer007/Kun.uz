import React from 'react'
import img1 from "../images/1.jpg"
import { BsCalendarMonth } from "react-icons/bs"
// import { AiOutlineEye } from "react-icons"


function Banner() {
    let style = {
        banner: "w-[393px] h-[570px] md:w-[100%] md:h-[800px]  lg:w-[72%] lg:h-[370px]  lg:flex ",
        banner_img: "w-[100%] h-[300px] md:h-[500px] lg:w-[470px] lg:h-[350px] lg:m-[15px]",
        banner_big_box: "w-[393px] h-[300px] bg-gray-100 md:w-[100%] md:h-[190px] lg:mt-[15px] lg:ml-[-20px] lg:h-[350px]",
        banner_big_box_h1: "w-[95%] h-[70px] ml-[20px]   text-[20px]  pt-[5px] font-bold lg:w-[95%] lg:h-[100px] lg:mt-[45px]",
        banner_big_box_in_the_box: "w-[280px] h-[30px] flex ml-[20px] mt-[30px] md:mt-[5px] lg:mt-[-125px] ",
        banner_big_box_in_the_box_icon: "mt-[5px]",
        banner_big_box_in_the_box_p: "ml-[5px]  text-gray-500 ",
        banner_p: "w-[100%] h-[200px] pl-[20px] pt-10px] pr-[20px] pb-[10px]  lg:mt-[100px]"

    }
    return (
        <div className={style.banner}>
            <img src={img1} alt="" className={style.banner_img} />
            <div className={style.banner_big_box}>
                <h1 className={style.banner_big_box_h1}>Turkiyadagi navbatdagi zilzila yanada daxshatli bo'lishim mumkin.Bu xolda Istanbul jiddiy zarar ko'radi</h1>
                <div className={style.banner_big_box_in_the_box}>
                    <BsCalendarMonth className={style.banner_big_box_in_the_box_icon} />
                    <p className={style.banner_big_box_in_the_box_p}>15:45/10.02.2023 </p>
                </div>
                <p className={style.banner_p}>Tadqiqotchilat Turkiya yaqin yillarda yana bir shunday daxshatli tabiiy ofatni boshdan kechirini aytmoqda.Va bu safargi epik markaz 15million aholiga ega istanbul shahrhi bo'lishi mumkin.Olimlat mahalliy hukumatning bunga tayyorlanmayotganidan qattiq norozi.</p>
            </div>
        </div>
    )
}

export default Banner