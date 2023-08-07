import Slider from "react-slick";
import { fetchAllProductByCategory } from "../../../../api/appAPI"
import { useState, useEffect } from "react";
import { decodeBase64Func } from "../../../../utils/base64"
import { formatPrice } from "../../../../utils/formatPrice";
import { useHistory } from "react-router-dom";

export default function TeaSlider({ settings }) {
    const [productArr, setProductArr] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await fetchAllProductByCategory('CA2')
        if (res && res.errCode === 0) {
            setProductArr(res.data)
        }
    }

    const handleDetail = (item) => {
        history.push(`/products/${item.category}/${item.id}`)


    }


    return (
        <div className="relative mt-9 h-[450px] px-[140px] mx-auto">
            <div className="header-section text-black flex justify-between h-20 py-5 px-10">
                <p className="font-semibold text-2xl">Trà</p>
                <button className="text-white text-sm outline-none border-none hover:bg-[#ec944a] hover:scale-95">Xem tất cả</button>
            </div>
            <Slider {...settings} className="w-full">
                {
                    productArr && productArr.length > 0 &&
                    productArr.map((item, index) => {
                        return (
                            <div key={index} className="h-[325px] flex flex-wrap px-[30px]">
                                <div className="rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: '1px 1px 13px 0px #00000040' }} onClick={() => handleDetail(item)}>
                                    <img src={decodeBase64Func(item.image)} className="h-auto max-w-full" />
                                </div>
                                <div className="h-[60px] text-black mt-2">
                                    <label className="font-semibold text-base cursor-pointer hover:text-[#ec944a]" onClick={() => handleDetail(item)}>{item.name}</label><br></br>
                                    <label className="font-normal text-sm text-[#666]">{formatPrice(item.originalPrice)} đ</label>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider >
        </div>
    )
}
