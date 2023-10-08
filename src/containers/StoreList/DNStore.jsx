import { fetchAllStoreByCity } from "../../api/appAPI"
import { useState, useEffect } from "react"
import StoreListComponent from "./StoreListComponent"
import Pagination from "../../components/Pagination/Pagination"


export default function DNStore() {
    const [storeArr, setStoreArr] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };


    useEffect(() => {
        fetchStore()
    }, [])

    useEffect(() => {
        fetchStore();
    }, [currentPage]);

    const fetchStore = async () => {
        const res = await fetchAllStoreByCity('C3', currentPage, 4, 0)
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setStoreArr(res.data)
            setTotalPages(res.totalPages)
        } else {
            console.log(res.errMessage)
        }
    }


    return (
        <div className="lg:ml-20 md:mx-6 mt-5">
            <p className="font-medium text-xl mb-4">Khám phá cửa hàng của chúng tôi ở Tp Đà Nẵng</p>
            <StoreListComponent storeArr={storeArr} />
            {storeArr != 'None' && <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />}

        </div >
    )
}