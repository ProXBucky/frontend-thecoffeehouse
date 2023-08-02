import Slider from "react-slick";
import { fetchAllProductByCategory } from "../../../../api/appAPI"
import { useState, useEffect } from "react";
import { decodeBase64Func } from "../../../../utils/base64"




export default function FrostySlider({ settings }) {
    const [productArr, setProductArr] = useState([])

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await fetchAllProductByCategory('CA4')
        if (res && res.errCode === 0) {
            setProductArr(res.data)
        }
    }


    return (
        <div className="relative mt-9 h-[450px] px-[140px] mx-auto">
            <div className="header-section text-black flex justify-between h-20 py-5 px-10">
                <p className="font-semibold text-2xl">Đá xay</p>
                <button className="text-white text-sm outline-none border-none hover:bg-[#ec944a]">Xem tất cả</button>
            </div>
            <Slider {...settings} className="w-full">
                {
                    productArr && productArr.length > 0 &&
                    productArr.map((item, index) => {
                        return (
                            <div key={index} className="h-[325px] flex  px-[30px]">
                                <div className="rounded-2xl overflow-hidden " style={{ boxShadow: '1px 1px 13px 0px #00000040' }}>
                                    <img src={decodeBase64Func(item.image)} className="h-auto max-w-full" />
                                </div>
                                <div className="h-[60px] text-black mt-2">
                                    <label className="font-semibold text-base">{item.name}</label><br></br>
                                    <label className="font-normal text-sm text-[#666]">{item.originalPrice} đ</label>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider >

        </div >
    )
}
