import "./HomePage.scss"
import Sliders from "./Slider/Sliders"
import Footer from "./Footer/Footer"
import BestSeller from "./Section/BestSellerCategory/BestSeller"
import CoffeeSlider from "./Section/CoffeeCategory/CoffeeSlider"
import TeaSlider from "./Section/TeaCategory/TeaSlider"
import FrostySlider from "./Section/FrostyCategory/FrostySlider"
import CakeSnackSlider from "./Section/CakeSnackCategory/CakeSnackSlider"
import Poster1 from "./Poster/Poster1"

function HomePage() {

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

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className="homepage-container">
                <Sliders />
                <BestSeller />
                <Poster1 />
                <CoffeeSlider settings={settings} />
                <TeaSlider settings={settings} />
                <CakeSnackSlider settings={settings} />
                <FrostySlider settings={settings} />
                <Footer />
            </div>
        </>
    )
}

export default (HomePage)