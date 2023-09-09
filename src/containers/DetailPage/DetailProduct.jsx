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
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CartSlice } from "../../redux/Slice/CartSlice";
import NavbarMobile from "../HomePage/NavbarMobile"

export default function DetailProduct() {
    const { category, id } = useParams();
    const [detailData, setDetailData] = useState({})
    const [diffProduct, setDiffProduct] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchDataProduct()
        fetchDataDiffientProduct()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchDataProduct()
        fetchDataDiffientProduct()
    }, [id, category])

    const fetchDataProduct = async () => {
        const respone = await fetchDetailProductById(id)
        if (respone && respone.errCode === 0) {
            setDetailData(respone.data)
        } else {
            toast.error('Lỗi hệ thống')
        }
    }

    const fetchDataDiffientProduct = async () => {
        const respone = await fetchAllProductByCategory(category, 0, 0, 5)
        if (respone && respone.errCode === 0) {
            setDiffProduct(respone.data)
        } else {
            toast.error('Lỗi hệ thống')
        }
    }

    const handleDetail = (item) => {
        history.push(`/products/${item.category}/${item.id}`)
    }


    const handleAddItem = () => {
        dispatch(CartSlice.actions.addToCart(detailData))
    }

    return (
        <div>
            <NavbarMobile />
            {
                detailData &&
                <div className="text-black h-auto pt-12 w-full lg:px-[160px] md:px-[20px] sm:px-[10px]">
                    <p className="py-6 font-medium md:text-base sm:text-sm">Menu / {detailData && detailData.categoryData && detailData.categoryData.valueVn} / {detailData.name}</p>
                    <div className="flex md:flex-row sm:flex-col border-b pb-10">
                        <div className="lg:w-1/2 md:w-1/3 sm:w-full ">
                            <img src={(detailData.image)} />
                        </div>
                        <div className="lg:w-1/2 md:pl-10 lg:text-left md:text-center md:w-2/3 sm:w-full sm:mt-2">
                            <h1 className="md:text-[26px] sm:text-[20px] font-medium mb-2">{detailData.name}</h1>
                            <p className="text-[25px] font-medium text-[#e57905]">{formatPrice(detailData.originalPrice)}đ</p>
                            <p className="font-medium md:text-lg sm:text-base mt-4"> Đã bán: {detailData.quantitySold} sản phẩm</p>
                            <button className="text-white bg-[#e57905] w-full mt-10 hover:scale-[0.98] border-none" onClick={handleAddItem}><i className="fa-solid fa-cart-plus fa-lg mr-3"></i>Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                    <div className="w-full md:py-8 sm:py-4 border-b">
                        <p className="md:text-lg sm:text-base font-medium mb-2">Mô tả sản phẩm</p>
                        {detailData.description}
                    </div>
                    <div className="w-full pt-8 pb-12">
                        <p className="text-lg font-medium mb-4">Sản phẩm liên quan</p>
                        <div className="flex flex-wrap">
                            {
                                diffProduct && diffProduct.length > 0 &&
                                diffProduct.map((item, index) => {
                                    return (
                                        <div className="md:w-[20%] sm:w-[47%] px-5 py-3 flex sm:flex-col sm:text-center sm:items-center gap-2" key={index} >
                                            <div className="md:w-full sm:w-[45%] rounded-2xl overflow-hidden cursor-pointer" style={{ boxShadow: '1px 1px 13px 0px #00000040' }} onClick={() => handleDetail(item)}>
                                                <img src={(item.image)}></img>
                                            </div>
                                            <div className="w-full">
                                                <label className="font-semibold text-base hover:text-[#f68122] cursor-pointer" onClick={() => handleDetail(item)}>{item.name}</label><br></br>
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
        </div >
    )
}