import { decodeBase64Func } from "../../utils/base64"
import Slider from "react-slick"
import RiseLoader from "react-spinners/RiseLoader"
import { useHistory } from "react-router-dom"

export default function StoreListComponent({ storeArr }) {
    const history = useHistory()
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
        <div className="relative flex flex-wrap lg:gap-10 md:justify-between sm:gap-14">
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
                                    <div className="lg:w-[40%] md:w-[45%] sm:w-full" key={index}>
                                        <div className="border-b-2 pb-8">
                                            <div className="rounded-lg overflow-hidden">
                                                <Slider {...settings} className="w-full relative">
                                                    {
                                                        item.imageData && item.imageData.length > 0 &&
                                                        item.imageData.map((item, index) => {
                                                            return (
                                                                <div className="rounded-2xl overflow-hidden cursor-pointer bg-contain bg-center" key={index} style={{ boxShadow: '1px 1px 13px 0px #00000040' }} onClick={() => handleDetail(item)}>
                                                                    <img src={(item.image)} className="h-auto hover:scale-105 duration-150" />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </Slider>
                                            </div>
                                            <p className="text-lg font-medium py-2">{item.nameStore}</p>
                                            <a className="w-full text-red-500 hover:text-red-300 bg-[#fff7e6] border-none outline-none p-2 rounded-lg mt-2 flex justify-items-center justify-center" target="_blank" href={item.mapLink}>
                                                <span>Xem bản đồ</span>
                                            </a>
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
    )
}