import { render } from "react-dom";
import "./Slider.scss"
import Slider from "react-slick";


function SamplePrevArrow(props) {
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

function SampleNextArrow(props) {
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

const sliders = [
    {
        urlSlider: "/src/assets/SliderImg/Slider1.webp"
    },
    {
        urlSlider: "/src/assets/SliderImg/Slider2.webp"
    },
    {
        urlSlider: "/src/assets/SliderImg/Slider3.webp"
    },
    {
        urlSlider: "/src/assets/SliderImg/Slider4.webp"
    },
]

export default function Sliders() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="slider relative">
            <Slider {...settings}>
                {
                    sliders.map((item) => {
                        return (
                            <div>
                                <img src={item.urlSlider}></img>
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    )
}