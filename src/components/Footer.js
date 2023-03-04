import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineYoutube } from "react-icons/ai"
import { FaTelegramPlane } from "react-icons/fa"
import { GrFacebookOption } from "react-icons/gr"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiOutlineWifi } from "react-icons/ai"
function Footer() {
    let style = {
        to_footer_biggest_box: "hidden md:hidden lg:flex flex-col w-full h-[300px] bg-blue-900",
        footerdagi_tanlov: 'w-full h-[50px] bg-blue-800 text-white font-bold text-[20px] pt-[10px] flex',
        footerdagi_tanlovlar_style: "ml-[40px]",
        oxirgi_a_style: "ml-[410px]",
        text_and_icon_part: "flex",
        p_text: "flex flex-col w-[70%] text-[15px] text-white mt-[25px] ml-[20px]",
        icons_box_style: "flex w-[300px] h-[50px]  mt-[80px] ml-[25px]",
        icons_box_styly_inside_icons_style: "m-[10px] text-blue-200 text-[25px]"
    }
    return (
        <div className={style.to_footer_biggest_box}>
            <div className={style.footerdagi_tanlov}>
                <a href="#" className={style.footerdagi_tanlovlar_style}>Sayt haqida</a>
                <a href="#" className={style.footerdagi_tanlovlar_style}>RSS</a>
                <a href="#" className={style.footerdagi_tanlovlar_style}>Aloqa</a>
                <a href="#" className={style.footerdagi_tanlovlar_style}>Reklama</a>
                <a href="#" className={style.footerdagi_tanlovlar_style}>Kun mavzulari</a>
                <a href="#" className={style.footerdagi_tanlovlar_style}>Kun.uz jamoasi</a>
                <a href="#" className={style.oxirgi_a_style}>
                    <h1>18+</h1>
                </a>
            </div>
            <div className={style.text_and_icon_part}>
                <div className={style.p_text} >
                    <p>«KUN.UZ» сайтида эълон қилинган материаллардан нусха кўчириш, тарқатиш ва бошқа шаклларда фойдаланиш фақат таҳририят ёзма розилиги билан амалга оширилиши мумкин.</p>
                    <p> Гувоҳнома: №0987. Берилган санаси: 22.06.2015 йил. Муассис: «WEB EXPERT» МЧЖ. Таҳририят манзили: 100043, Тошкент шаҳри, К. Ёрматов кўчаси, 12-уй. Электрон манзил: info@kun.uz.</p>
                    <p> Сайтда эълон қилинаётган муаллифлик мақолаларида келтирилган фикрлар муаллифга тегишли ва улар Kun.uz таҳририяти нуқтаи назарини ифода этмаслиги мумкин.</p>
                    <p>  Ⓣ - мақола ва материалларда қўйилган мазкур белги уларнинг тижорат ва реклама ҳуқуқлари асосида эълон қилинганлигини билдиради.</p>
                </div>
                <div className={style.icons_box_style}>
                    <AiOutlineYoutube className={style.icons_box_styly_inside_icons_style} />
                    <FaTelegramPlane className={style.icons_box_styly_inside_icons_style} />
                    <GrFacebookOption className={style.icons_box_styly_inside_icons_style} />
                    <AiOutlineInstagram className={style.icons_box_styly_inside_icons_style} />
                    <AiOutlineTwitter className={style.icons_box_styly_inside_icons_style} />
                    <AiOutlineWifi className={style.icons_box_styly_inside_icons_style} />
                </div>
            </div>
        </div >
    )
}

export default Footer