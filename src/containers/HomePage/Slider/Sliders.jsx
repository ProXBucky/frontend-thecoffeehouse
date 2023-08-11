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

export default function Sliders() {
    const settingSlider = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    return (
        <div className="relative mt-9 w-full h-[460px] ">
            <Slider {...settingSlider}>
                {
                    slidersArr.map((item) => {
                        return (
                            <div key={item.id}>
                                <img src={item.urlSlider} />
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    )
}