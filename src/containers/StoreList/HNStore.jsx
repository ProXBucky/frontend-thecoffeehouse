import { fetchAllStoreByCity } from "../../api/appAPI"
import { useState, useEffect } from "react"
import { decodeBase64Func } from "../../utils/base64"
import Slider from "react-slick"
import RiseLoader from "react-spinners/RiseLoader"
import { useHistory } from "react-router-dom"

export default function HNStore() {
    const [storeArr, setStoreArr] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetchStore()
    }, [])

    const fetchStore = async () => {
        const res = await fetchAllStoreByCity('C1')
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setStoreArr(res.data)
        } else {
            console.log(res.errMessage)
        }
    }

    const SamplePrevArrow = (props) => {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", left: "20px", top: "45%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-arrow-left fa-xl text-white"></i>
            </div>
        );
    }

    const SampleNextArrow = (props) => {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", right: "20px", top: "45%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-arrow-right fa-xl text-white"></i>
            </div >
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const handleDetail = (item) => {
        history.push(`/detail-store/${item.storeId}`)
    }

    return (
        <div className="ml-20 mr-3">
            <p className="font-medium text-xl mb-4">Khám phá cửa hàng của chúng tôi ở Tp Hà Nội</p>
            <div className="flex flex-wrap gap-10 relative">
                {
                    storeArr === 'None' ?
                        (
                            <span className="text-lg text-center mt-10">Không có dữ liệu</span>
                        )
                        :
                        (
                            storeArr && storeArr.length > 0 ?
                                storeArr.map((item, index) => {
                                    return (
                                        <div className="w-[45%]" key={index}>
                                            <div className="border-b-2 pb-8">
                                                <div className="rounded-lg overflow-hidden">
                                                    <Slider {...settings} className="w-full relative">
                                                        {
                                                            item.imageData && item.imageData.length > 0 &&
                                                            item.imageData.map((item, index) => {
                                                                return (
                                                                    <div className="rounded-2xl overflow-hidden cursor-pointer" key={index} style={{ boxShadow: '1px 1px 13px 0px #00000040' }} onClick={() => handleDetail(item)}>
                                                                        <img src={decodeBase64Func(item.image)} className="h-auto max-w-full" />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </Slider>
                                                </div>
                                                <p className="text-lg font-medium py-2">{item.nameStore}</p>
                                                <button className="w-full text-red-500 bg-[#fff7e6] border-none outline-none">Xem bản đồ</button>
                                            </div >
                                            <div className="py-3">
                                                <p>{item.address}</p>
                                                <p className="my-2">7:00 - 22:00</p>
                                                <p><i className="fa-solid fa-car"></i> Có chỗ đỗ xe hơi</p>
                                                <p><i className="fa-solid fa-face-smile-beam"></i> Thân thiện với gia đình</p>
                                                <p><i className="fa-solid fa-bag-shopping"></i> Mua mang đi </p>
                                            </div>
                                        </div >
                                    )
                                })
                                :
                                <RiseLoader color="#36d7b7" className="absolute top-[45%] left-[45%] " />
                        )
                }
            </div >
        </div >
    )
}