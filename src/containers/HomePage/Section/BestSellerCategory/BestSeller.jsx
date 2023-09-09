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
        <div className="w-full lg:px-[150px] md:px-[20px] sm:px-[10px] xl:py-[50px] lg:py-[30px]">
            <div className="h-[80px] lg:px-[40px] md:px-0 py-[20px] md:text-2xl sm:text-xl font-medium text-black flex justify-between">
                <p>Sản phẩm phổ biến</p>
            </div>
            <div className="w-full flex flex-wrap gap-[20px] lg:pl-[30px] md:pl-0">
                <div className="rounded-2xl overflow-hidden cursor-pointer xl:w-[calc(50%_-_20px)] lg:w-[calc(100%)]" onClick={navigatorPage}>
                    <img src="https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265832/image_app/MatchaPoster_tvrwnv.webp"></img>
                </div>
                {
                    productArr && productArr.length > 0 &&
                    productArr.map((item, index) => {
                        return (
                            <div className="xl:w-[calc(25%_-_20px)] lg:w-[calc(31.33%)] md:w-[48.5%] sm:w-[46.5%]" key={index} >
                                <div className="overflow-hidden rounded-2xl w-full h-auto cursor-pointer" style={{ 'boxShadow': '0px 0px 13px 0px #00000040' }} onClick={() => handleDetail(item)}>
                                    <img className="lg:hover:scale-105 sm:hover:scale-100" src={(item.image)}></img>
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