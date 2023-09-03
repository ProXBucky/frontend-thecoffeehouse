import { useEffect, useState } from "react"
import { fetchAllProductByCategory } from "../../api/appAPI"
import { useHistory } from "react-router-dom"
import ProductList from "./ProductList"
import Pagination from "../../components/Pagination/Pagination";


export default function AllCollection() {
    const [allProductArr, setAllProductArr] = useState('')
    const history = useHistory()

    const fetchDataProduct = async () => {
        const res = await fetchAllProductByCategory('ALL', currentPage, 6, 0)
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setAllProductArr(res.data)
            setTotalPages(res.totalPages)
        }
    }
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };

    useEffect(() => {
        fetchDataProduct()
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        fetchDataProduct();
    }, [currentPage]);



    const handleDetail = (item) => {
        history.push(`/products/${item.category}/${item.id}`)
    }

    return (
        <>
            <ProductList allProductArr={allProductArr} handleDetail={handleDetail} />
            <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
        </>
    )
}