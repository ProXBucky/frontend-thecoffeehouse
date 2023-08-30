import Slider from "react-slick";
import { decodeBase64Func } from "../../../utils/base64";

export default function ModalViewStore({ showModalView, setShowModalView, dataStore }) {

    function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", left: "-30px", top: "45%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-chevron-left fa-2xl text-black"></i>
            </div>
        );
    }

    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
            <div
                className="absolute"
                style={{ ...style, zIndex: "1", right: "-30px", top: "45%", cursor: "pointer" }}
                onClick={onClick}
            >
                <i className="fa-solid fa-chevron-right fa-2xl text-black"></i>
            </div>
        );
    }

    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            {showModalView ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative w-[85%] my-8 h-[90%]">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Thông tin cửa hàng: {dataStore.nameStore}
                                    </h3>

                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalView(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 mx-10 flex flex-auto">
                                    <div className="w-[40%] h-auto">
                                        <Slider {...settings}>
                                            {
                                                dataStore && dataStore.imageData && dataStore.imageData.length > 0 &&
                                                dataStore.imageData.map((item, index) => {
                                                    return (
                                                        <div key={index} className="h-[300px] w-full">
                                                            <img src={(item.image)} className="h-[300px] mx-auto" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider >
                                        <p className="text-xl font-medium mt-2">Mô tả cửa hàng rút gọn: </p>
                                        <textarea className="border-2 outline-none bg-white p-2 w-full" rows={3}
                                            value={dataStore.shortDescription}
                                            disabled
                                        >
                                        </textarea>
                                    </div>
                                    <div className="w-[60%] font-normal text-base pl-40">
                                        <p className="text-xl font-medium">Tên cửa hàng: </p>{dataStore.nameStore}
                                        <p className="text-xl font-medium mt-7">Địa chỉ: </p>{dataStore.address}
                                        <p className="text-xl font-medium mt-7">Thành phố: </p>{dataStore.cityData.valueVn}
                                        <p className="text-xl font-medium mt-7">Mô tả cửa hàng: </p>
                                        <textarea className=" border-2 outline-none bg-white p-2 w-full" rows={6}
                                            value={dataStore.description}
                                            disabled
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                {/* Footer */}
                                <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => setShowModalView(false)}
                                        >
                                            Hủy
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div >
                    </div >
                    <div className="opacity-30 fixed inset-0 z-[49] bg-black"></div>
                </>
            ) : null
            }
        </>
    )
}