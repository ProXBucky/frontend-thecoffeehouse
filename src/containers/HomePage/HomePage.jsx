import "./HomePage.scss"
import Sliders from "./Slider/Sliders"
import Footer from "./Footer/Footer"
import BestSeller from "./Section/BestSellerCategory/BestSeller"
import CoffeeSlider from "./Section/CoffeeSlider"
// import Poster1 from "./Poster/Poster1"
import StoreSlider from "./Section/StoreCategory/StoreSlider"
import Poster2 from "./Poster/Poster2"
import NavbarMobile from "./NavbarMobile"



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
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 4,
                    speed: 500,
                    slidesToScroll: 4,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 2,
                    speed: 500,
                    slidesToScroll: 2,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    centerPadding: "60px",
                    slidesToShow: 2,
                    speed: 500,
                    slidesToScroll: 2,
                    nextArrow: false,
                    prevArrow: false,
                }
            }
        ]
    };
    return (
        <>
            <NavbarMobile />
            <div className="homepage-container lg:w-full md:w-full">
                <Sliders />
                <BestSeller />
                <Poster2 />
                <CoffeeSlider settings={settings} />
                <StoreSlider />
                <Footer />
            </div>
        </>
    )
}
