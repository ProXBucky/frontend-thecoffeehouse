import "./HomePage.scss"
import Slider from "./Slider/Slider"
import Footer from "./Footer/Footer"
import BestSeller from "./Section/BestSellerCategory/BestSeller"

function HomePage() {
    return (
        <>
            <div className="homepage-container">
                <Slider />
                <BestSeller />
                <Footer />
            </div>
        </>
    )
}

export default (HomePage)