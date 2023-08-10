import "./BestSeller.scss"
import { fetchAllProductByCategory } from "../../../../api/appAPI"
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
        const res = await fetchAllProductByCategory('CA2') // CA2, Tra
        if (res && res.errCode === 0) {
            setProductArr(res.data)
        }
    }


    const handleDetail = (item) => {
        history.push(`/products/${item.category}/${item.id}`)

    }


    return (
        <div className="best-sell-container">
            <div className="header-section text-black flex justify-between">
                <p>Sản phẩm phổ biến</p>
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
                        return (
                            <div className="menu-list" key={index} >
                                <div className="logo-menu cursor-pointer" onClick={() => handleDetail(item)}>
                                    <img src={decodeBase64Func(item.image.data)}></img>
                                </div>
                                <div className="name-menu">
                                    <label className="font-semibold text-base hover:text-[#ec944a] cursor-pointer" onClick={() => handleDetail(item)}>{item.name}</label><br></br>
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