import "./BestSeller.scss"
import { fetchAllProductByCategory } from "../../../../api/appAPI"
import { useState, useEffect } from "react";
import { decodeBase64Func } from "../../../../utils/base64";
import { formatPrice } from "../../../../utils/formatPrice";

export default function BestSeller() {
    const [productArr, setProductArr] = useState([])

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await fetchAllProductByCategory('CA1') // CA1, Coffee
        if (res && res.errCode === 0) {
            setProductArr(res.data)
        }
    }
    return (
        <div className="best-sell-container">
            <div className="header-section text-black flex justify-between">
                <p>Sản phẩm phổ biến</p>
                {/* <button className="text-white text-sm">Xem tất cả</button> */}
            </div>

            <div className="menu-list-group">
                <div className="menu-list menu-poster">
                    <div className="logo-poster">
                        <img src="/src/assets/SliderImg/MatchaPoster.webp"></img>
                    </div>
                </div>
                {
                    productArr && productArr.length > 0 &&
                    productArr.map((item, index) => {
                        console.log(item)
                        return (
                            <div className="menu-list" key={index}>
                                <div className="logo-menu">
                                    <img src={decodeBase64Func(item.image.data)}></img>
                                </div>
                                <div className="name-menu">
                                    <label className="font-semibold text-base">{item.name}</label><br></br>
                                    <label className="font-normal text-sm text-[#666]">{formatPrice(item.originalPrice)} đ</label>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}