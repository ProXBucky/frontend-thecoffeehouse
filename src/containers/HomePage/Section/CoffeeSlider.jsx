import { fetchAllProductByCategory } from "../../../api/appAPI"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SliderSection from "./SliderSection";
import { toast } from "react-toastify";


export default function CoffeeSlider({ settings }) {
    const [productArr, setProductArr] = useState([])
    const history = useHistory()

    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await fetchAllProductByCategory('ALL', 0, 0, 15) // CA1, Coffee limit 8

        if (res.status === 200) {
            setProductArr(res.data.data)
        }
        else {
            toast.error("Lỗi hệ thống")
        }
    }

    const handleDetail = (item) => {
        history.push(`/products/${item.categoryId}/${item.id}`)
    }

    const handleNavigation = () => {
        history.push(`/collections/all`)
    }


    return (
        <SliderSection productArr={productArr} handleDetail={handleDetail} handleNavigation={handleNavigation} settings={settings} />

    )
}
