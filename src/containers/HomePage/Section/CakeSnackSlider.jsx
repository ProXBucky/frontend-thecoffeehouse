import { fetchAllProductByCategory } from "../../../api/appAPI"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SliderSection from "./SliderSection";


export default function CakeSnackSlider({ settings }) {

    const [productArr, setProductArr] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await fetchAllProductByCategory('CA3', 8) // get cake limit 8
        if (res && res.errCode === 0) {
            setProductArr(res.data)
        }
    }


    const handleDetail = (item) => {
        history.push(`/products/${item.category}/${item.id}`)

    }

    const handleNavigation = () => {
        history.push(`/collections/cakesnack`)
    }


    return (
        <SliderSection productArr={productArr} handleDetail={handleDetail} handleNavigation={handleNavigation} settings={settings} />
    )
}
