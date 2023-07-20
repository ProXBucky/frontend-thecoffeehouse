import "./HomePage.scss"
import Sliders from "./Slider/Sliders"
import Footer from "./Footer/Footer"
import BestSeller from "./Section/BestSellerCategory/BestSeller"

function HomePage() {
    return (
        <>
            <div className="homepage-container">
                <Sliders />
                <BestSeller />
                <Footer />
            </div>
        </>
    )
}

export default (HomePage)