import React from 'react'
import { BsCalendarMonth } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
function Next_banner() {
    let style = {

        first_biggest_box_inside_first_bigger_box_inside_box_inside_img: "w-[150px] h-[100px]  rounded-md m-[20px]",
        first_biggest_box_inside_first_bigger_box_inside_box_inside_box: "flex text-gray-500  mt-[20px]",
        first_biggest_box_inside_first_bigger_box_inside_box_inside_box_inside_icon: "mt-[5px]",
        first_biggest_box_inside_first_bigger_box_inside_box_inside_box_inside_first_p: "ml-[5px]",
        first_biggest_box_inside_first_bigger_box_inside_box_inside_second_p: 'w-[200px] h-[250px] text-[12px] mt-[50px] ml-[-120px]',
        first_biggest_box_inside_three_bigger_box: "hidden md:hidden lg:flex lg:flex-col lg:w-[340px] lg:h-[700px] lg:ml-[900px] lg:mt-[-717px]",
        first_biggest_box_inside_three_bigger_box_inside_small_box: "w-[393px] h-[50px]  p-[10px] flex md:ml-[15px] md:mt-[-10px] lg:w-[340px] lg:ml-[20px] lg:mt-[20px]",
        first_biggest_box_inside_three_bigger_box_inside_small_box_inside_blue_small_box: "w-[20px] h-[20px] bg-blue-900 rounded-3xl",
        first_biggest_box_inside_three_bigger_box_inside_small_box_inside_white_small_box: "w-[10px] h-[10px]  rounded-3xl absolute ml-[5px] mt-[5px] bg-white",
        first_biggest_box_inside_three_bigger_box_inside_small_box_h1: " w-[200px] h-[30px] ml-[20px]",
        first_biggest_box_inside_four: "hidden md:hidden lg:flex lg:flex-col lg:w-[360px] lg:h-[2000px]",
        first_biggest_box_inside_four_inside_small_box: "hidden md:hidden lg:flex lg:flex-col lg:w-[320px] lg:h-[120px] lg:mt-[5px] lg:ml-[20px]",
        first_biggest_box_inside_four_inside_small_box_smaller_box: "flex text-gray-500  mt-[10px]",
        first_biggest_box_inside_four_inside_small_box_smaller_box_inside_icon: "mt-[5px]",
        first_biggest_box_inside_four_inside_small_box_smaller_box_inside_p: "ml-[5px]",
        first_biggest_box_inside_four_inside_small_box_inside_p: "hidden md:hidden lg:flex",
        first_biggest_box_inside_four_inside_small_box_inside_hr: "hidden md:hidden lg:flex lg:flex-col lg:mt-[10px] ",
        first_biggest_box_inside_five_box: "hidden md:hidden lg:flex lg:w-[340px] h-[80px]  ml-[10px] ",
        first_biggest_box_inside_five_box_inside_btn: "lg:w-[340px] lg:h-[60px]  rounded-r-3xl lg:bg-gray-200 lg:mt-[10px] flex",
        first_biggest_box_inside_five_box_inside_btn_inside_h1: "lg:m-[16px] font-bold",
        first_biggest_box_inside_five_box_inside_btn_inside_icon: " lg:mt-[18px] lg:ml-[140px] lg:text-[25px]",
        button: "w-full  h-[50px] text-center bg-gray-100 md:mt-[-5px] lg:hidden ",
    }
    return (
        <div className=' '>
            <div className="w-[100%] h-[680px] mt-[30px]  md:mt-[-120px] md:h-[320px]  lg:mt-[-5px] lg:w-[72%]">
                <div className="md:w-full md:h-[330px]  md:flex m-[10px]">
                    <div className="">
                        <div className="flex w-[393px] h-[150px] ">
                            <img src={img2} alt="" className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_img} />
                            <div className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box_inside_first_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_second_p}>Duppi o'rniga yulinayotgan bosh:aholi va biznesga quyow panellari majburiy tarzda o'tkazilmoqda </p>
                        </div>
                        <hr />
                        <div className="flex w-[393px] h-[150px] ">
                            <img src={img2} alt="" className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_img} />
                            <div className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box_inside_first_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_second_p}>Vazirlikning kutilmagan talabi:kartadan kartaga pul o'tkazish qimmatlashishi mumkin </p>
                        </div>
                        <hr />
                    </div>
                    {/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className="md:ml-[60px]">
                        <div className="flex w-[393px] h-[150px] ">
                            <img src={img3} alt="" className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_img} />
                            <div className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box_inside_first_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_second_p}>O'zbekistonda Onix'ni seriyali ishlab chiqarish boshlanadi </p>
                        </div>
                        <hr />
                        <div className="flex w-[393px] h-[150px] ">
                            <img src={img2} alt="" className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_img} />
                            <div className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_box_inside_first_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_first_bigger_box_inside_box_inside_second_p}>Yiliga 95 mlrd so'mlik "To'k" tejaladi-Navoiyda yashil energiyaga o'tish boshlandi </p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className={style.first_biggest_box_inside_three_bigger_box}>
                    <div className={style.first_biggest_box_inside_three_bigger_box_inside_small_box}>
                        <div className={style.first_biggest_box_inside_three_bigger_box_inside_small_box_inside_blue_small_box}></div>
                        <div className={style.first_biggest_box_inside_three_bigger_box_inside_small_box_inside_white_small_box}></div>
                        <h1 className={style.first_biggest_box_inside_three_bigger_box_inside_small_box_h1}>So'nggi yangiliklar</h1>
                    </div>
                    <div className={style.first_biggest_box_inside_four}>
                        <div className={style.first_biggest_box_inside_four_inside_small_box}>
                            < div className={style.first_biggest_box_inside_four_inside_small_box_smaller_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_four_inside_small_box_inside_p}>Lorem ipsum dolor sit,  Iusto incidunt vel optio! Quod illum ab molestiae perspiciatis voluptatem aliqu</p>
                            <hr className={style.first_biggest_box_inside_four_inside_small_box_inside_hr} />
                        </div>
                        <div className={style.first_biggest_box_inside_four_inside_small_box}>
                            < div className={style.first_biggest_box_inside_four_inside_small_box_smaller_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_four_inside_small_box_inside_p}>Lorem ipsum dolor sit,  Iusto incidunt vel optio! Quod illum ab molestiae perspiciatis voluptatem aliqu</p>
                            <hr className={style.first_biggest_box_inside_four_inside_small_box_inside_hr} />
                        </div>
                        <div className={style.first_biggest_box_inside_four_inside_small_box}>
                            < div className={style.first_biggest_box_inside_four_inside_small_box_smaller_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_four_inside_small_box_inside_p}>Lorem ipsum dolor sit,  Iusto incidunt vel optio! Quod illum ab molestiae perspiciatis voluptatem aliqu</p>
                            <hr className={style.first_biggest_box_inside_four_inside_small_box_inside_hr} />
                        </div>
                        <div className={style.first_biggest_box_inside_four_inside_small_box}>
                            < div className={style.first_biggest_box_inside_four_inside_small_box_smaller_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_four_inside_small_box_inside_p}>Lorem ipsum dolor sit,  Iusto incidunt vel optio! Quod illum ab molestiae perspiciatis voluptatem aliqu</p>
                            <hr className={style.first_biggest_box_inside_four_inside_small_box_inside_hr} />
                        </div>
                        <div className={style.first_biggest_box_inside_four_inside_small_box}>
                            < div className={style.first_biggest_box_inside_four_inside_small_box_smaller_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_four_inside_small_box_inside_p}>Lorem ipsum dolor sit,  Iusto incidunt vel optio! Quod illum ab molestiae perspiciatis voluptatem aliqu</p>
                            <hr className={style.first_biggest_box_inside_four_inside_small_box_inside_hr} />
                        </div>
                        <div className={style.first_biggest_box_inside_four_inside_small_box}>
                            < div className={style.first_biggest_box_inside_four_inside_small_box_smaller_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_four_inside_small_box_inside_p}>Lorem ipsum dolor sit,  Iusto incidunt vel optio! Quod illum ab molestiae perspiciatis voluptatem aliqu</p>
                            <hr className={style.first_biggest_box_inside_four_inside_small_box_inside_hr} />
                        </div>
                        <div className={style.first_biggest_box_inside_four_inside_small_box}>
                            < div className={style.first_biggest_box_inside_four_inside_small_box_smaller_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_four_inside_small_box_inside_p}>Lorem ipsum dolor sit,  Iusto incidunt vel optio! Quod illum ab molestiae perspiciatis voluptatem aliqu</p>
                            <hr className={style.first_biggest_box_inside_four_inside_small_box_inside_hr} />
                        </div>
                        <div className={style.first_biggest_box_inside_four_inside_small_box}>
                            < div className={style.first_biggest_box_inside_four_inside_small_box_smaller_box}>
                                <BsCalendarMonth className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_icon} />
                                <p className={style.first_biggest_box_inside_four_inside_small_box_smaller_box_inside_p}>13:30/15.02.23</p>
                            </div>
                            <p className={style.first_biggest_box_inside_four_inside_small_box_inside_p}>Lorem ipsum dolor sit,  Iusto incidunt vel optio! Quod illum ab molestiae perspiciatis voluptatem aliqu</p>

                        </div>
                        <div className={style.first_biggest_box_inside_five_box}>
                            <button className={style.first_biggest_box_inside_five_box_inside_btn} >
                                <h1 className={style.first_biggest_box_inside_five_box_inside_btn_inside_h1}>Ko'proq yangilik</h1>
                                < BsArrowRight className={style.first_biggest_box_inside_five_box_inside_btn_inside_icon} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button className={style.button}>Barchasi</button>

        </div >
    )
}

export default Next_banner