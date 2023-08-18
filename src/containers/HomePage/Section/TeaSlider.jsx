import { fetchAllProductByCategory } from "../../../api/appAPI"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SliderSection from "./SliderSection";


export default function TeaSlider({ settings }) {
    const [productArr, setProductArr] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await fetchAllProductByCategory('CA2', 8)   // get Tea limit 8
        if (res && res.errCode === 0) {
            setProductArr(res.data)
        }
    }

    const handleDetail = (item) => {
        history.push(`/products/${item.category}/${item.id}`)
    }

    const handleNavigation = () => {
        history.push(`/collections/tea`)
    }


    return (
        <SliderSection productArr={productArr} handleDetail={handleDetail} handleNavigation={handleNavigation} settings={settings} />

    )
}
