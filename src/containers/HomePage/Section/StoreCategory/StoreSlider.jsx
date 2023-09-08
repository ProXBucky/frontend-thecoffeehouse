import Slider from "react-slick";
import "./StoreSlider.scss"
import { fetchAllStoreByCity } from "../../../../api/appAPI"
import { useState, useEffect } from "react";
import { decodeBase64Func } from "../../../../utils/base64";
import { useHistory } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader"


export default function StoreSlider() {
    const [storeArr, setStoreArr] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetchStore()
    }, [])

    const fetchStore = async () => {
        const res = await fetchAllStoreByCity('ALL', 0, 0, 3)
        if (res && res.errCode === 0) {
            setStoreArr(res.data)
        }
    }

    function ButtonPrevArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", left: "15%", bottom: "20%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-circle-arrow-left fa-xl text-black"></i>
            </div>
        );
    }

    function ButtonNextArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", left: "18%", bottom: "20%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-circle-arrow-right fa-xl text-black"></i>
            </div>
        );
    }

    function ButtonPrevArrow2(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", left: "40%", bottom: "5%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-circle-arrow-left fa-xl text-black"></i>
            </div>
        );
    }

    function ButtonNextArrow2(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", left: "55%", bottom: "5%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-circle-arrow-right fa-xl text-black"></i>
            </div>
        );
    }


    function PrevArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", left: "10%", top: "45%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-arrow-left fa-2xl text-white"></i>
            </div>
        );
    }

    function NextArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", right: "10%", top: "45%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-arrow-right fa-2xl text-white "></i>
            </div>
        );
    }

    const settingStore = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <ButtonNextArrow />,
        prevArrow: <ButtonPrevArrow />,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <ButtonNextArrow2 />,
                    prevArrow: <ButtonPrevArrow2 />,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false,
                    prevArrow: false,
                }
            }
        ]
    }

    const settingImage = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    const handleDetail = (item) => {
        history.push(`/detail-store/${item.id}`)
    }


    return (
        <div className="lg:mt-10 md:mt-2 lg:h-[650px] md:h-[900px] md:px-[30px] sm:px-[10px] text-black border-2 relative" >
            {
                !storeArr || storeArr.length === 0 ?
                    (
                        <RiseLoader color="#36d7b7" className="absolute top-[45%] left-[45%]" />
                    )
                    :
                    < Slider {...settingStore} className="w-full h-full py-20">
                        {
                            storeArr && storeArr.length > 0 &&
                            storeArr.map((item, index) => {
                                return (
                                    <div className="slider" key={index}>
                                        <div className="lg:w-2/5 md:w-full xl:px-32 lg:px-20 lg:pt-20 md:pt-10 relative px-2">
                                            <label className="font-medium md:text-3xl sm:text-2xl">{item.nameStore}</label>
                                            <p className="mt-3 lg:hidden xl:block">{item.shortDescription}</p>
                                            <button className="mt-6 mx-auto w-full bg-red-500 text-white lg:hover:scale-[0.98] md:hover:scale-100 outline-none border-none"
                                                onClick={() => handleDetail(item)} >
                                                Xem thông tin chi tiết
                                            </button>
                                        </div>
                                        <div className="lg:w-3/5 md:w-full">
                                            <Slider {...settingImage} className="w-full px-2">
                                                {
                                                    item && item.imageData && item.imageData.length > 0 &&
                                                    item.imageData.map((item, index) => {
                                                        return (
                                                            <div className="relative flex justify-center" key={index}>
                                                                <img src={(item.image)} className="xl:h-[500px] lg:h-[400px] mx-auto rounded-xl" />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </Slider>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </ Slider>
            }
        </div >
    )
}
