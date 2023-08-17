import "./HomePage.scss"
import { lazy, Suspense } from "react"
import Loading from "../../components/Loading.jsx"

import Sliders from "./Slider/Sliders"
import Footer from "./Footer/Footer"
import BestSeller from "./Section/BestSellerCategory/BestSeller"
import CoffeeSlider from "./Section/CoffeeSlider"
import TeaSlider from "./Section/TeaSlider"
import FrostySlider from "./Section/FrostySlider"
import CakeSnackSlider from "./Section/CakeSnackSlider"
import Poster1 from "./Poster/Poster1"
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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className="homepage-container">
                {/* <Suspense fallback={<Loading />}> */}
                <Sliders />
                <BestSeller />
                <Poster1 />
                <CoffeeSlider settings={settings} />
                <TeaSlider settings={settings} />
                <Poster2 />
                <CakeSnackSlider settings={settings} />
                <FrostySlider settings={settings} />
                <StoreSlider />
                <Footer />
                {/* </Suspense> */}
            </div>
        </>
    )
}
