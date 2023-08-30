import Slider from "react-slick";
import { decodeBase64Func } from "../../../utils/base64"
import { formatPrice } from "../../../utils/formatPrice";
import RiseLoader from "react-spinners/RiseLoader"


export default function SliderSection({ productArr, handleNavigation, handleDetail, settings }) {
    return (
        <div className="relative mt-9 h-auto px-[140px] mx-auto">
            <div className="header-section text-black flex justify-between h-20 py-5 px-10">
                <p className="font-semibold text-2xl">Menu</p>
                <button className="text-white text-sm outline-none border-none bg-[#f68122] hover:scale-95" onClick={handleNavigation}>Xem tất cả</button>
            </div>
            {
                !productArr || productArr.length === 0 ?
                    (
                        <RiseLoader color="#36d7b7" className="absolute top-[45%] left-[45%] " />
                    )
                    :
                    <Slider {...settings} className="w-full">
                        {
                            productArr && productArr.length > 0 &&
                            productArr.map((item, index) => {
                                return (
                                    <div key={index} className="h-[325px] flex flex-wrap px-[30px]">
                                        <div className="rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: '1px 1px 13px 0px #00000040' }} onClick={() => handleDetail(item)}>
                                            <img src={(item.image)} className="h-auto max-w-full hover:scale-105" />
                                        </div>
                                        <div className="h-[60px] text-black mt-2">
                                            <label className="font-semibold text-base cursor-pointer hover:text-[#f68122]" onClick={() => handleDetail(item)}>{item.name}</label><br></br>
                                            <label className="font-normal text-sm text-[#666]">{formatPrice(item.originalPrice)} đ</label>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider >
            }
        </div >
    )
}