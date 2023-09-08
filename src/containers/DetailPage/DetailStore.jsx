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
import Slider from "react-slick";
import NavbarMobile from "../HomePage/NavbarMobile";


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

    const SamplePrevArrow = (props) => {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", left: "40px", top: "45%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-chevron-left fa-2xl text-black"></i>
            </div>
        );
    }

    const SampleNextArrow = (props) => {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", right: "40px", top: "45%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-chevron-right fa-2xl text-black"></i>
            </div>
        )
    }

    const settingSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }



    return (
        <div>
            <NavbarMobile />
            {
                detailData &&
                <div className="lg:py-10 md:pb-10  text-black xl:px-[160px] lg:px-[100px] md:px-[50px] sm:px-[10px] flex lg:flex-row md:flex-col sm:flex-col">
                    <div className="lg:hidden md:inline-block sm:inline-block md:py-0 pt-10">
                        <Slider {...settingSlider}>
                            {
                                imgData && imgData.length > 0 &&
                                imgData.map((item, index) => {
                                    return (
                                        <div className="xl:w-[600px] lg:w-[500px] mb-2" key={index}>
                                            <img src={(item.image)} />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    <div className="pb-5 flex flex-col lg:block md:hidden sm:hidden">
                        {
                            imgData && imgData.length > 0 &&
                            imgData.map((item, index) => {
                                return (
                                    <div className="xl:w-[600px] lg:w-[500px] mb-2" key={index}>
                                        <img src={(item.image)} />
                                    </div>
                                )
                            })
                        }
                        <div className="xl:block lg:hidden md:hidden sm:hidden" dangerouslySetInnerHTML={{ __html: detailData.mapHTML }}></div>
                    </div>
                    <div className="w-auto lg:pl-10">
                        <p className="font-medium md:text-2xl sm:text-xl">{detailData.nameStore}</p>
                        <p className="text-gray-500 py-2 md:text-lg sm:text-sm">
                            {detailData.description}
                        </p>
                        <p className="font-medium md:text-lg sm:text-base">Địa chỉ</p>
                        <p className="py-2 md:text-lg sm:text-base">
                            {detailData.address}
                        </p>
                        <p className="font-medium md:text-lg sm:text-base">Giờ mở cửa</p>
                        <p className="py-2">07:00 - 21:30</p>
                        <p className="mb-1 md:text-lg sm:text-base"><i className="fa-solid fa-car"></i> Có chỗ đỗ xe hơi</p>
                        <p className="mb-1 md:text-lg sm:text-base"><i className="fa-solid fa-face-smile-beam"></i> Phục vụ tại chỗ</p>
                        <p className="mb-1 md:text-lg sm:text-base"><i className="fa-solid fa-bag-shopping"></i> Mua mang đi</p>
                        <div className="-2 border-b-2 py-5 mt-5">
                            <p className="font-medium">Món ngon tại {detailData.nameStore}</p>
                            <button className="w-full mt-2 text-[#f68122] bg-[#FFF7E6] outline-none border-none" onClick={viewMenu}>Xem menu quán</button>
                        </div>
                    </div>

                </div>

            }
            <Footer />
        </div>
    )
}