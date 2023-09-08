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
        urlSlider: "/src/assets/SliderImg/Slider1.webp"
    },
    {
        id: 2,
        urlSlider: "/src/assets/SliderImg/Slider2.webp"
    },
    {
        id: 3,
        urlSlider: "/src/assets/SliderImg/Slider3.webp"
    },
    {
        id: 4,
        urlSlider: "/src/assets/SliderImg/Slider4.webp"
    },
]

const sliderArrMobile = [
    {
        id: 1,
        urlSlider: "/src/assets/SliderImg/SliderMobile1.webp"
    },
    {
        id: 2,
        urlSlider: "/src/assets/SliderImg/SliderMobile2.webp"
    },
    {
        id: 3,
        urlSlider: "/src/assets/SliderImg/SliderMobile3.webp"
    },
    {
        id: 4,
        urlSlider: "/src/assets/SliderImg/SliderMobile4.webp"
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