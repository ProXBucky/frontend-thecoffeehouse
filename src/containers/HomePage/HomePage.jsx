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
    return (
        <>
            <div className="homepage-container">
                <Sliders />
                <BestSeller />
                <Poster1 />
                <CoffeeSlider />
                <TeaSlider />
                <CakeSnackSlider />
                <FrostySlider />
                <Footer />
            </div>
        </>
    )
}

export default (HomePage)