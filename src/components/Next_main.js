import React from 'react'
import img13 from "../images/17.jpg"
import img14 from "../images/18.jpg"
import img15 from "../images/19.jpg"
import img16 from "../images/20.jpg"
import img17 from "../images/21.jpg"
import img18 from "../images/22.jpg"

function Next_main() {
    let style = {
        text: "hidden md:hidden lg:flex  lg:mt-[15px] lg:ml-[50px] mt-[50px] ",
        text_h1: "text-blue-900 font-bold text-[30px]",
        text_box: "bg-blue-900 rounded-3xl w-[45px] [45px] text-center",
        text_box_in_the_h1: "text-white font-bold text-[30px]",
        text_box_in_the_p: "text-[30px] font-bold ml-[15px]",
        big_box: "w-full h-[2200px] md:h-[1300px]  lg:h-[1380px] ",
        big_box_inside_small_box: "lg:w-[400px] lg:h-[50px] flex m-[10px] ",
        big_box_inside_small_box_blue_smaller_box: "w-[20px] h-[20px] bg-blue-900 rounded-3xl m-[12px]  ",
        big_box_inside_small_box_white_smaller_box: "w-[10px] h-[10px]  rounded-3xl absolute  bg-white m-[17px]",
        big_box_inside_small_box_h1: " w-[200px] h-[30px] m-[8px] font-bold text-[20px]",
        big_box_inside_first_box: "lg:w-full lg:h-[600px]  lg:flex",
        big_box_inside_first_box_inside_smaller_box: "md:flex ",
        big_box_inside_first_box_inside_smaller_box_inside_box: "w-full h-[350px] md:w-[450px] md:h-[400px] md:ml-[30px] lg:w-[360px] lg:h-[550px] lg:ml-[70px]",
        big_box_inside_first_box_inside_smaller_box_inside_box_inside_img: "p-[5px] ",
        big_box_inside_first_box_inside_smaller_box_inside_box_inside_h1: "font-bold  p-[15px] ",
        big_box_inside_first_box_inside_smaller_box_inside_box_inside_p: "hidden md:hidden lg:flex lg:ml-[20px]",
        big_box_inside_first_box_inside_smaller_box_inside_second_box: "w-full h-[320px]  md:w-[450px] md:h-[400px]  md:ml-[20px] lg:w-[360px] lg:h-[550px] lg:ml-[30px] ",
        big_box_inside_first_box_inside_smaller_box_inside_second_box_inside_img: "p-[5px] ",
        big_box_inside_first_box_inside_smaller_box_inside_second_box_inside_h1: "font-bold  p-[15px] ",
        big_box_inside_first_box_inside_smaller_box_inside_second_box_inside_p: "hidden md:hidden lg:flex lg:ml-[20px]",
        big_box_inside_first_box_inside_smaller_box_inside_three_box: "w-full h-[350px]  md:w-[450px] md:h-[400px]  md:ml-[30px] lg:w-[360px] lg:h-[550px] lg:ml-[30px] ",
        big_box_inside_first_box_inside_smaller_box_inside_three_box_inside_img: "p-[5px] ",
        big_box_inside_first_box_inside_smaller_box_inside_three_box_inside_h1: "font-bold  p-[15px] ",
        big_box_inside_first_box_inside_smaller_box_inside_three_box_inside_p: "hidden md:hidden lg:flex lg:ml-[20px]",
        big_box_inside_first_box_inside_smaller_box_inside_four_box: "w-full h-[350px]  md:w-[450px] md:h-[400px] md:ml-[20px] lg:w-[356px] lg:h-[550px] lg:ml-[-350px] lg:mt-[600px]",
        big_box_inside_first_box_inside_smaller_box_inside_four_box_inside_img: "p-[5px] ",
        big_box_inside_first_box_inside_smaller_box_inside_four_box_inside_h1: "font-bold  p-[15px] ",
        big_box_inside_first_box_inside_smaller_box_inside_four_box_inside_p: "hidden md:hidden lg:flex lg:ml-[20px]",
        big_box_inside_first_box_inside_smaller_box_inside_five_box: "w-full h-[365px]  md:w-[450px] md:h-[400px]  md:ml-[30px] lg:w-[360px] lg:h-[550px] lg:ml-[65px]",
        big_box_inside_first_box_inside_smaller_box_inside_five_box_inside_img: "p-[5px] ",
        big_box_inside_first_box_inside_smaller_box_inside_five_box_inside_h1: "font-bold  p-[15px] ",
        big_box_inside_first_box_inside_smaller_box_inside_five_box_inside_p: "hidden md:hidden lg:flex lg:ml-[20px]",

    }
    return (
        <div className={style.big_box}>
            <div className={style.big_box_inside_small_box}>
                <div className={style.big_box_inside_small_box_blue_smaller_box}></div>
                <div className={style.big_box_inside_small_box_white_smaller_box}></div>
                <h1 className={style.big_box_inside_small_box_h1}>Dolzarb xabarlar</h1>
            </div>
            <div className={style.big_box_inside_first_box}>
                <div className={style.big_box_inside_first_box_inside_smaller_box}>
                    <div className={style.big_box_inside_first_box_inside_smaller_box_inside_box}>
                        <img src={img13} alt="" className={style.big_box_inside_first_box_inside_smaller_box_inside_box_inside_img} />
                        <h1 className={style.big_box_inside_first_box_inside_smaller_box_inside_box_inside_h1}>Do'ppi o'rniga yulinayotgan bosh:aholi va biznesga quyosh panellari majburiy tarzda o'tkazilmoqda</h1>
                        <p className={style.big_box_inside_first_box_inside_smaller_box_inside_box_inside_p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias porro odit, in fugiat nostrum ad cum facilis. Ut possimus accusantium, placeat dolorem id enim eum vel culpa, aperiam magnam sequi libero reiciendis assumenda, minus maiores. Tempore, eum consectetur voluptatem incidunt, explicabo dolor officia eligen</p>
                    </div>
                    <div className={style.big_box_inside_first_box_inside_smaller_box_inside_second_box} >
                        <img src={img14} alt="" className={style.big_box_inside_first_box_inside_smaller_box_inside_second_box_inside_img} />
                        <h1 className={style.big_box_inside_first_box_inside_smaller_box_inside_second_box_inside_h1}>O'zbekiston tashqi qarzi.Havotirlar o'rinlimi</h1>
                        <p className={style.big_box_inside_first_box_inside_smaller_box_inside_second_box_inside_p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias porro odit, in fugiat nostrum ad cum facilis. Ut possimus accusantium, placeat dolorem id enim eum vel culpa, aperiam magnam sequi libero reiciendis assumenda, minus maiores. Tempore, eum consectetur voluptatem incidunt, explicabo dolor officia eligen</p>
                    </div>
                </div>
                <div className={style.big_box_inside_first_box_inside_smaller_box}>
                    <div className={style.big_box_inside_first_box_inside_smaller_box_inside_three_box}>
                        <img src={img15} alt="" className={style.big_box_inside_first_box_inside_smaller_box_inside_three_box_inside_img} />
                        <h1 className={style.big_box_inside_first_box_inside_smaller_box_inside_three_box_inside_h1}>Daxshatli raqamlar:dunyoda q yilda 8 mln bola yo'qolmoqda</h1>
                        <p className={style.big_box_inside_first_box_inside_smaller_box_inside_three_box_inside_p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias porro odit, in fugiat nostrum ad cum facilis. Ut possimus accusantium, placeat dolorem id enim eum vel culpa, aperiam magnam sequi libero reiciendis assumenda, minus maiores. Tempore, eum consectetur voluptatem incidunt, explicabo dolor officia eligen</p>
                    </div>
                    <div className={style.big_box_inside_first_box_inside_smaller_box_inside_four_box} >
                        <img src={img16} alt="" className={style.big_box_inside_first_box_inside_smaller_box_inside_four_box_inside_img} />
                        <h1 className={style.big_box_inside_first_box_inside_smaller_box_inside_four_box_inside_h1}>Ilg'or shaharsozlik va hozirgi holatimiz-Toshkentning 3ta nuqtasi misolida</h1>
                        <p className={style.big_box_inside_first_box_inside_smaller_box_inside_four_box_inside_p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias porro odit, in fugiat nostrum ad cum facilis. Ut possimus accusantium, placeat dolorem id enim eum vel culpa, aperiam magnam sequi libero reiciendis assumenda, minus maiores. Tempore, eum consectetur voluptatem incidunt, explicabo dolor officia eligen</p>
                    </div>
                </div>
            </div>
            <div className={style.big_box_inside_first_box_inside_smaller_box}>
                <div className={style.big_box_inside_first_box_inside_smaller_box_inside_five_box}>
                    <img src={img17} alt="" className={style.big_box_inside_first_box_inside_smaller_box_inside_five_box_inside_img} />
                    <h1 className={style.big_box_inside_first_box_inside_smaller_box_inside_five_box_inside_h1}>70% gacha kamaygan qog'ozbozlik-maktabdagi sharoitdan o'qituvchilarni ko'ngli to'lmayapqi</h1>
                    <p className={style.big_box_inside_first_box_inside_smaller_box_inside_five_box_inside_p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias porro odit, in fugiat nostrum ad cum facilis. Ut possimus accusantium, placeat dolorem id enim eum vel culpa, aperiam magnam sequi libero reiciendis assumenda, minus maiores. Tempore, eum consectetur voluptatem incidunt, explicabo dolor officia eligen</p>
                </div>
                <div className={style.big_box_inside_first_box_inside_smaller_box_inside_five_box}>
                    <img src={img18} alt="" className={style.big_box_inside_first_box_inside_smaller_box_inside_five_box_inside_img} />
                    <h1 className={style.big_box_inside_first_box_inside_smaller_box_inside_five_box_inside_h1}>Imtiyoz qulaylik va oqotilayotgan buyurokratiya bojxona tizimida nimalar o'zgardi?</h1>
                    <p className={style.big_box_inside_first_box_inside_smaller_box_inside_five_box_inside_p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias porro odit, in fugiat nostrum ad cum facilis. Ut possimus accusantium, placeat dolorem id enim eum vel culpa, aperiam magnam sequi libero reiciendis assumenda, minus maiores. Tempore, eum consectetur voluptatem incidunt, explicabo dolor officia eligen</p>
                </div>
            </div>
            <div className={style.text}>
                <h1 className={style.text_h1}>KUN.</h1>
                <div className={style.text_box}>
                    <h1 className={style.text_box_in_the_h1}>UZ</h1>

                </div>
                <p className={style.text_box_in_the_p}>Biznes</p>
            </div>
        </div>
    )
}

export default Next_main