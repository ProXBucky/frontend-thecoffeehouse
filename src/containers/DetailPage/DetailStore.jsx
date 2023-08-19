import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";
import { fetchDetailStoreById } from "../../api/appAPI"
import { toast } from "react-toastify";
import { decodeBase64Func } from "../../utils/base64";
import Footer from "../HomePage/Footer/Footer";
import { useHistory } from "react-router-dom";


export default function DetailStore() {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({})
    const [imgData, setImgData] = useState([])
    const history = useHistory()

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchDataProduct()
    }, [])

    const fetchDataProduct = async () => {
        const respone = await fetchDetailStoreById(id)
        if (respone && respone.errCode === 0) {
            setDetailData(respone.data)
            setImgData(respone.imgData)
        } else {
            toast.error('Lỗi hệ thống')
        }
    }

    const viewMenu = () => {
        history.push('/collections/all')
    }



    return (
        <div>
            {
                detailData &&
                <div className="my-20 text-black px-[160px] flex flex-row">
                    <div className="w-[600px] pb-5 flex flex-col">
                        {
                            imgData && imgData.length > 0 &&
                            imgData.map((item, index) => {
                                return (
                                    <div className="w-full mb-2" key={index}>
                                        <img src={decodeBase64Func(item.image)} />
                                    </div>
                                )
                            })
                        }
                        <div dangerouslySetInnerHTML={{ __html: detailData.mapHTML }}></div>
                    </div>
                    <div className="w-auto pl-10">
                        <p className="font-medium text-2xl">{detailData.nameStore}</p>
                        <p className="text-gray-500 py-2 text-md">
                            {detailData.description}
                        </p>
                        <p className="font-medium text-lg">Địa chỉ</p>
                        <p className="py-2">
                            {detailData.address}
                        </p>
                        <p className="font-medium text-lg">Giờ mở cửa</p>
                        <p className="py-2">07:00 - 21:30</p>
                        <p className="mb-1"><i className="fa-solid fa-car"></i> Có chỗ đỗ xe hơi</p>
                        <p className="mb-1"><i className="fa-solid fa-face-smile-beam"></i> Phục vụ tại chỗ</p>
                        <p className="mb-1"><i className="fa-solid fa-bag-shopping"></i> Mua mang đi</p>
                        <div className="-2 border-b-2 py-5 mt-5">
                            <p className="font-medium">Món ngon tại {detailData.nameStore}</p>
                            <button className="w-full mt-2 text-[#f68122] bg-[#FFF7E6]" onClick={viewMenu}>Xem menu quán</button>
                        </div>
                    </div>

                </div>

            }
            <Footer />
        </div>
    )
}