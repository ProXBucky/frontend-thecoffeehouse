import { fetchAllProductByCategory } from "../../../api/appAPI"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SliderSection from "./SliderSection";


export default function CoffeeSlider({ settings }) {
    const [productArr, setProductArr] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await fetchAllProductByCategory('ALL', 0, 0, 15) // CA1, Coffee limit 8
        // console.log(res.data)
        if (res && res.errCode === 0) {
            setProductArr(res.data)
        }
    }

    const handleDetail = (item) => {
        history.push(`/products/${item.category}/${item.id}`)
    }

    const handleNavigation = () => {
        history.push(`/collections/all`)
    }


    return (
        <SliderSection productArr={productArr} handleDetail={handleDetail} handleNavigation={handleNavigation} settings={settings} />

    )
}
