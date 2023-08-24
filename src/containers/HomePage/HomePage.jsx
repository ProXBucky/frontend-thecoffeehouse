import "./HomePage.scss"
import Sliders from "./Slider/Sliders"
import Footer from "./Footer/Footer"
import BestSeller from "./Section/BestSellerCategory/BestSeller"
import CoffeeSlider from "./Section/CoffeeSlider"
// import Poster1 from "./Poster/Poster1"
import StoreSlider from "./Section/StoreCategory/StoreSlider"
import Poster2 from "./Poster/Poster2"


// const Sliders = lazy(() => import('./Slider/Sliders'));
// const Footer = lazy(() => import('./Footer/Footer'));
// const BestSeller = lazy(() => import('./Section/BestSellerCategory/BestSeller'));
// const CoffeeSlider = lazy(() => import('./Section/CoffeeSlider'));
// const TeaSlider = lazy(() => import('./Section/TeaSlider'));
// const FrostySlider = lazy(() => import('./Section/FrostySlider'));
// const CakeSnackSlider = lazy(() => import('./Section/CakeSnackSlider'));
// const Poster1 = lazy(() => import('./Poster/Poster1'));
// const StoreSlider = lazy(() => import('./Section/StoreCategory/StoreSlider'));



export default function HomePage() {

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
        className: "center",
        // centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className="homepage-container">
                <Sliders />
                <BestSeller />
                <Poster2 />
                {/* <Poster1 /> */}
                <CoffeeSlider settings={settings} />
                <StoreSlider />
                <Footer />
            </div>
        </>
    )
}
