import "./BestSeller.scss"
import { fetchBestSeller } from "../../../../api/appAPI"
import { useState, useEffect } from "react";
import { decodeBase64Func } from "../../../../utils/base64";
import { formatPrice } from "../../../../utils/formatPrice";
import { useHistory } from "react-router-dom";


export default function BestSeller() {
    const [productArr, setProductArr] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await fetchBestSeller(6) // limit 6
        if (res && res.errCode === 0) {
            setProductArr(res.data)
        }
    }


    const handleDetail = (item) => {
        history.push(`/products/${item.category}/${item.id}`)
    }

    const navigatorPage = () => {
        history.push(`/collections/tea`)

    }


    return (
        <div className="w-full px-[150px] py-[50px]">
            <div className="h-[80px] px-[40px] py-[20px] text-2xl font-medium text-black flex justify-between">
                <p>Sản phẩm phổ biến</p>
            </div>
            <div className="w-full flex flex-wrap gap-[20px] pl-[30px]">
                <div className="rounded-2xl overflow-hidden cursor-pointer w-[calc(50%_-_20px)]" onClick={navigatorPage}>
                    <img src="/src/assets/SliderImg/MatchaPoster.webp"></img>
                </div>
                {
                    productArr && productArr.length > 0 &&
                    productArr.map((item, index) => {
                        return (
                            <div className="w-[calc(25%_-_20px)]" key={index} >
                                <div className="overflow-hidden rounded-2xl w-full h-[265px] cursor-pointer" style={{ 'boxShadow': '0px 0px 13px 0px #00000040' }} onClick={() => handleDetail(item)}>
                                    <img className="hover:scale-105" src={decodeBase64Func(item.image.data)}></img>
                                </div>
                                <div className="w-full h-[60px] text-black font-semibold mt-2">
                                    <label className="font-semibold text-base hover:text-[#f68122] cursor-pointer" onClick={() => handleDetail(item)}>{item.name}</label><br></br>
                                    <div className="flex justify-between">
                                        <label className="font-normal text-sm text-[#666]">{formatPrice(item.originalPrice)} đ</label>
                                        <label className="font-normal text-sm text-[#666]">Đã bán: {item.quantitySold}</label>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}