import React from 'react'
function Sub_navbar() {
    let style = {
        sub_navbar: "hidden  lg:flex",
        sub_navbar_box: "flex lg:w-[100%] h-[50px]  bg-gray-200",
        sub_navbar_box_in_the_small_box: "bg-blue-900 text-white",
        sub_navbar_box_in_the_small_box_h1: "p-[10px] font-bold",
        sub_navbar_box_ul: " flex items-center",
        sub_navbar_box_ul_li: "flex items-center p-[11px] text-[11px] h-2/5 border-transparent  hover:text-blue-700",
        sub_navbar_box_ul_li_finished: "flex p-[11px] items-center text-[11px] h-2/5 border-transparent",
    }
    return (
        <div className={style.sub_navbar}>
            <div className={style.sub_navbar_box}>
                <div className={style.sub_navbar_box_in_the_small_box} >
                    <div className=""></div>
                    <h1 className={style.sub_navbar_box_in_the_small_box_h1}>Hududlar</h1>
                </div>
                <ul className={style.sub_navbar_box_ul}>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Toshkent sh.</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Qoraqalpog'iston</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Andijon</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Farg'ona</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Namangan</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Samarqand</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Buxoro</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Xorazm</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Surhandaryo</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Qashqadaryo</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Jizzax</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Sirdaryo</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li}>
                        <a href="#">Toshkent vil.</a>
                    </li>
                    <li className={style.sub_navbar_box_ul_li_finished}>
                        <a href="#">Navoiy</a>
                    </li>
                </ul>
            </div>


            {/* / <h1 className='md: lg: w-[100%] h-[100px]  text-[18px] m-[10px]'>Turkiyadagi navbatdagi zilzila yanada daxshatli bo'lishim mumkin.Bu xolda Istanbul jiddiy zarar ko'radi</h1> */}
        </div>
    )
}

export default Sub_navbar