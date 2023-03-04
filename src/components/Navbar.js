import React from 'react'
import { BiSearchAlt } from "react-icons/bi"
import { AiOutlineShareAlt } from "react-icons/ai"
import { BsChevronLeft } from "react-icons/bs"
function Navbar() {
    let style = {
        navbar: "w-[100%] h-[50px]  flex item-center  md:w-[100%] md:h-[50px]  lg:w-full lg:m-0",
        in_the_box_chevron: "shadow-lg w-[30px] h-[30px] rounded-md m-[10px] lg:hidden",
        chevron: "ml-[4px] mt-[5px] text-blue-900 font-bold-500",
        text: "flex ml-[100px] mt-[10px] md:ml-[400px] lg:ml-[20px] ",
        text_h1: "text-blue-900 font-bold",
        text_box: "bg-blue-900 rounded-xl w-[25px] h-[25px] text-center",
        text_box_in_the_h1: "text-white font-bold",
        navbar_ul: "hidden lg:flex text-[15px]",
        navbar_li: "lg:pl-[30px] pt-[10px] hover:text-blue-700",
        navbar_select: "hidden lg:flex lg:pl-[20px] lg:w-[150px] lg:h-[30px] lg:rounded-xl lg:bg-gray-200 lg:ml-[230px] lg:mt-[10px]",
        navbar_icon: "hidden lg:flex  lg:w-[30px] lg:h-[30px]  lg:mt-[10px] lg:ml-[20px] lg:rounded-2xl lg:pt-[5px] first-letter:first-line:lg:bg-gray-300",
        navbar_search_icon: "text-[20px] md:ml-[10px] ",
        navbar_share_icons: "text-blue-700 mt-[10px] ml-[150px] text-[20px] md:ml-[520px] lg:hidden",
    }
    return (
        <div className={style.navbar}>
            <div className={style.in_the_box_chevron}>
                <BsChevronLeft className={style.chevron} />
            </div>
            <div className={style.text}>
                <h1 className={style.text_h1}>KUN.</h1>
                <div className={style.text_box}>
                    <h1 className={style.text_box_in_the_h1}>UZ</h1>
                </div>
            </div>
            <div className={style.navbar_ul}>
                <ul className={style.navbar_ul}>
                    <li className={style.navbar_li}><a href="#">O'zbekiston</a></li>
                    <li className={style.navbar_li}><a href="#">Jaxon</a></li>
                    <li className={style.navbar_li}><a href="#">Iqtisodiyot</a></li>
                    <li className={style.navbar_li}><a href="#">Jamiyat</a></li>
                    <li className={style.navbar_li}><a href="#">Fan-texnika</a></li>
                    <li className={style.navbar_li}><a href="#">Sport</a></li>
                    <li className={style.navbar_li}><a href="#">Business Class </a></li>
                    <li className={style.navbar_li}><a href="#">Audio</a></li>
                </ul>
                <select className={style.navbar_select}  >
                    <option>O'zbekcha</option>
                    <option>Ruscha</option>
                    <option>Englizcha</option>
                </select>
                <div className={style.navbar_icon}>
                    <BiSearchAlt className={style.navbar_search_icon} />
                </div>
            </div>
            <AiOutlineShareAlt className={style.navbar_share_icons} />
        </div>
    )
}

export default Navbar