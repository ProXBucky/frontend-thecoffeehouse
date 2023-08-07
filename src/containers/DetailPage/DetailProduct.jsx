import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
import { fetchDetailProductById, fetchAllProductByCategory } from "../../api/appAPI"
import { toast } from "react-toastify";
import { decodeBase64Func } from "../../utils/base64";
import { formatPrice } from "../../utils/formatPrice";
import Footer from "../HomePage/Footer/Footer";



export default function DetailProduct() {
    const { category, id } = useParams();
    const [detailData, setDetailData] = useState({})
    const [diffProduct, setDiffProduct] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchDataProduct()
        fetchDataDiffientProduct()
    }, [])

    const fetchDataProduct = async () => {
        const respone = await fetchDetailProductById(id)
        if (respone && respone.errCode === 0) {
            setDetailData(respone.data)
        } else {
            toast.error(respone.errMessage)
        }
    }

    const fetchDataDiffientProduct = async () => {
        const respone = await fetchAllProductByCategory(category)
        if (respone && respone.errCode === 0) {
            setDiffProduct(respone.data)
        } else {
            toast.error(respone.errMessage)
        }
    }

    console.log(detailData)

    return (
        <div>
            {
                detailData &&
                <div className="text-black h-auto mt-12 w-full px-[160px]">
                    <p className="py-6 font-medium">Menu / {detailData && detailData.categoryData && detailData.categoryData.valueVn} / {detailData.name}</p>
                    <div className="flex flex-row border-b pb-10">
                        <div className="w-1/2">
                            <img src={decodeBase64Func(detailData.image)} />
                        </div>
                        <div className="w-1/2 pl-10">
                            <h1 className="text-[26px] font-medium mb-2">{detailData.name}</h1>
                            <span className="text-[25px] font-medium text-[#e57905]">{formatPrice(detailData.originalPrice)}đ</span><br />
                            <p className="text-base mt-6">Chọn size (bắt buộc)</p>
                            <p>{detailData.size}</p>
                            <button className="text-white bg-[#e57905] w-full mt-10">Đặt giao tận nơi</button>
                        </div>
                    </div>
                    <div className="w-full py-8 border-b">
                        <p className="text-lg font-medium mb-2">Mô tả sản phẩm</p>
                        {detailData.description}
                    </div>
                    <div className="w-full pt-8 pb-12">
                        <p className="text-lg font-medium mb-2">Sản phẩm liên quan</p>
                        <div className="flex flex-row gap-[35px]">
                            {
                                diffProduct && diffProduct.length > 0 &&
                                diffProduct.map((item, index) => {
                                    return (
                                        <div className="" key={index} >
                                            <div className="w-[170px] rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: '1px 1px 13px 0px #00000040' }} onClick={() => handleDetail(item)}>
                                                <img src={decodeBase64Func(item.image.data)}></img>
                                            </div>
                                            <div className="">
                                                <label className="font-semibold text-base hover:text-[#ec944a] cursor-pointer" onClick={() => handleDetail(item)}>{item.name}</label><br></br>
                                                <label className="font-normal text-sm text-[#666]">{formatPrice(item.originalPrice)} đ</label>
                                            </div>
                                        </div>
                                    )
                                })

                            }

                        </div>
                    </div>
                </div >

            }
            <Footer />
        </div>
    )
}