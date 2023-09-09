import Slider from "react-slick";

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
    );
}

const slidersArr = [
    {
        id: 1,
        urlSlider: "https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265833/image_app/Slider1_aur0ff.webp"
    },
    {
        id: 2,
        urlSlider: "https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265835/image_app/Slider2_qjygcp.webp"
    },
    {
        id: 3,
        urlSlider: "https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265834/image_app/Slider3_wsol2z.webp"
    },
    {
        id: 4,
        urlSlider: "https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265835/image_app/Slider4_erfimr.webp"
    },
]

const sliderArrMobile = [
    {
        id: 1,
        urlSlider: "https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265835/image_app/SliderMobile1_yd2sfs.webp"
    },
    {
        id: 2,
        urlSlider: "https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265836/image_app/SliderMobile2_zhbh1v.webp"
    },
    {
        id: 3,
        urlSlider: "https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265836/image_app/SliderMobile3_h8fedl.webp"
    },
    {
        id: 4,
        urlSlider: "https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265837/image_app/SliderMobile4_es0kc1.webp"
    },
]

export default function Sliders() {
    const settingSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    nextArrow: false,
                    prevArrow: false,
                }
            }
        ]
    };


    return (
        <>
            <div className="relative w-full xl:h-[460px] lg:h-[350px] md:h-[250px] md:block sm:hidden">
                <Slider {...settingSlider}>
                    {
                        slidersArr.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.urlSlider} className="bg-cover bg-center bg-no-repeat" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className="relative w-full md:hidden sm:block sm:h-[350px]">
                <Slider {...settingSlider}>
                    {
                        sliderArrMobile.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.urlSlider} className="bg-cover bg-center bg-no-repeat" />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}