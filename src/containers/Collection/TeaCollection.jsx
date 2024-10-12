import { useEffect, useState } from "react"
import { fetchAllProductByCategory } from "../../api/appAPI"
import { useHistory } from "react-router-dom"
import ProductList from "./ProductList"
import Pagination from "../../components/Pagination/Pagination"
import { toast } from "react-toastify"


export default function TeaCollection() {
    const [allProductArr, setAllProductArr] = useState('')
    const history = useHistory()

    const fetchDataProduct = async () => {
        const res = await fetchAllProductByCategory('CA2', currentPage, 6, 0)
        if (res.status === 200) {
            setAllProductArr(res.data.data)
            setTotalPages(res.data.totalPages)
        }
        else {
            toast.error("Lỗi hệ thống")
        }
    }

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchDataProduct()
    }, [currentPage])

    // useEffect(() => {
    //     fetchDataProduct();
    // }, []);


    const handleDetail = (item) => {
        history.push(`/products/${item.categoryId}/${item.id}`)

    }


    return (
        <>
            <ProductList allProductArr={allProductArr} handleDetail={handleDetail} />
            <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
        </>
    )
}