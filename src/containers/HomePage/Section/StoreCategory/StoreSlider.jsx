import Slider from "react-slick";
import "./StoreSlider.scss"
import { fetchAllStoreByCity } from "../../../../api/appAPI"
import { useState, useEffect } from "react";
import { decodeBase64Func } from "../../../../utils/base64";
import { useHistory } from "react-router-dom";

export default function StoreSlider() {
    const [storeArr, setStoreArr] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetchStore()
    }, [])

    const fetchStore = async () => {
        const res = await fetchAllStoreByCity('ALL')
        if (res && res.errCode === 0) {
            setStoreArr(res.data)
        }
    }

    function ButtonPrevArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", left: "250px", top: "70%", cursor: "pointer" }}
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
                style={{ ...style, zIndex: "1", left: "300px", top: "70%", cursor: "pointer" }}
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
                style={{ ...style, zIndex: "1", left: "100px", top: "45%", cursor: "pointer" }}
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
                style={{ ...style, zIndex: "1", right: "100px", top: "45%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-arrow-right fa-2xl text-white "></i>
            </div>
        );
    }

    const settingStore = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ButtonNextArrow />,
        prevArrow: <ButtonPrevArrow />
    }

    const settingImage = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const handleDetail = (item) => {
        history.push(`/detail-store/${item.id}`)
    }


    return (
        <div className="mt-10 h-[650px] text-black border-2" >
            <Slider {...settingStore} className="w-full h-full py-20">
                {
                    storeArr && storeArr.length > 0 &&
                    storeArr.map((item, index) => {
                        return (
                            <div className="slider relative" key={index}>
                                <div className="w-2/5 px-32 pt-20 relative">
                                    <label className="font-medium text-3xl">{item.nameStore}</label>
                                    <p className="mt-3">{item.shortDescription}</p>
                                    <button className="mt-6 mx-auto bg-red-500 text-white flex self-center hover:scale-[0.98] outline-none border-none"
                                        onClick={() => handleDetail(item)} >
                                        Show more information
                                    </button>
                                </div>
                                <div className="w-3/5">
                                    <Slider {...settingImage} className="w-full">
                                        {
                                            item && item.imageData && item.imageData.length > 0 &&
                                            item.imageData.map((item, index) => {
                                                return (
                                                    <div className="relative flex justify-center" key={index}>
                                                        <img src={decodeBase64Func(item.image)} className="h-[500px] mx-auto rounded-xl" />
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
            </Slider >

        </div >
    )
}
