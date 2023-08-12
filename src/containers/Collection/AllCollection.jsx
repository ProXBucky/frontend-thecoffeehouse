import { useEffect, useState } from "react"
import { fetchAllProductByCategory } from "../../api/appAPI"
import { useHistory } from "react-router-dom"
import ProductList from "./ProductList"

export default function AllCollection() {
    const [allProductArr, setAllProductArr] = useState('')
    const history = useHistory()

    const fetchDataProduct = async () => {
        const res = await fetchAllProductByCategory('ALL')
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setAllProductArr(res.data)
        }
    }

    useEffect(() => {
        fetchDataProduct()
        window.scrollTo(0, 0)
    }, [])


    const handleDetail = (item) => {
        history.push(`/products/${item.category}/${item.id}`)
    }

    return (
        <ProductList allProductArr={allProductArr} handleDetail={handleDetail} />
    )
}