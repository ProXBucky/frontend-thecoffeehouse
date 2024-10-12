import { fetchAllStoreByCity } from "../../api/appAPI"
import { useState, useEffect } from "react"
import StoreListComponent from "./StoreListComponent"
import Pagination from "../../components/Pagination/Pagination"
import { toast } from "react-toastify"


export default function HCMStore() {
    const [storeArr, setStoreArr] = useState([])
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };


    useEffect(() => {
        fetchStore()
        window.scrollTo(0, 0)
    }, [currentPage])


    // useEffect(() => {
    //     fetchStore();
    // }, []);



    const fetchStore = async () => {
        const res = await fetchAllStoreByCity('C2', currentPage, 4, 0)
        console.log(res)
        if (res.status === 200) {
            setStoreArr(res.data.data)
            setTotalPages(res.data.totalPages)
        }
        else {
            toast.error("Lỗi hệ thống")
        }
    }

    return (
        <>
            <div className="lg:ml-20 md:mx-6 sm:mx-[10px] mt-5">
                <p className="font-medium text-xl mb-4">Khám phá cửa hàng của chúng tôi ở Tp Hồ Chí Minh</p>
                <StoreListComponent storeArr={storeArr} />
                {storeArr != 'None' && <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />}
            </div >
        </>
    )
}