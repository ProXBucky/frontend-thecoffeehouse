import Slider from "react-slick";


function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            className="absolute"
            style={{ ...style, zIndex: "1", left: "-30px", top: "35%", cursor: "pointer" }}
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
            style={{ ...style, zIndex: "1", right: "-30px", top: "35%", cursor: "pointer" }}
            onClick={onClick}
        >
            <i className="fa-solid fa-chevron-right fa-2xl text-black"></i>
        </div>
    );
}

const sliders = [
    {
        urlSlider: "/src/assets/ProductImg/CloudFeeHanh NhanNuong.webp"
    },
    {
        urlSlider: "/src/assets/ProductImg/CloudFeeHanh NhanNuong.webp"
    },
    {
        urlSlider: "/src/assets/ProductImg/CloudFeeHanh NhanNuong.webp"
    },
    {
        urlSlider: "/src/assets/ProductImg/CloudFeeHanh NhanNuong.webp"
    },
    {
        urlSlider: "/src/assets/ProductImg/CloudFeeHanh NhanNuong.webp"
    },
]

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};
export default function FrostySlider() {

    return (
        <div className="relative mt-9 h-[450px] px-[140px] mx-auto">
            <div className="header-section text-black flex justify-between h-20 py-5 px-10">
                <p className="font-semibold text-2xl">Đá xay</p>
                <button className="text-white text-sm outline-none border-none hover:bg-[#ec944a]">Xem tất cả</button>
            </div>
            <Slider {...settings} className="w-full">
                {
                    sliders.map((item, index) => {
                        return (
                            <div key={index} className="h-[325px] flex  px-[30px]">
                                <div className="rounded-2xl overflow-hidden " style={{ boxShadow: '1px 1px 13px 0px #00000040' }}>
                                    <img src={item.urlSlider} className="h-auto max-w-full" />
                                </div>
                                <div className="h-[60px] text-black mt-2">
                                    <label className="font-semibold text-base">CloudFee Hạnh Nhân Nướng</label><br></br>
                                    <label className="font-normal text-sm text-[#666]">49.000 đ</label>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider >

        </div >
    )
}
