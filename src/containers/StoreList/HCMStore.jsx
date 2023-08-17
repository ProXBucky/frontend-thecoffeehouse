import { fetchAllStoreByCity } from "../../api/appAPI"
import { useState, useEffect } from "react"
import StoreListComponent from "./StoreListComponent"


export default function HCMStore() {
    const [storeArr, setStoreArr] = useState([])



    useEffect(() => {
        fetchStore()
        window.scrollTo(0, 0)
    }, [])

    const fetchStore = async () => {
        const res = await fetchAllStoreByCity('C2')
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setStoreArr(res.data)
        } else {
            console.log(res.errMessage)
        }
    }

    return (
        <div className="ml-20 mr-3">
            <p className="font-medium text-xl mb-4">Khám phá cửa hàng của chúng tôi ở Tp Hồ Chí Minh</p>
            <StoreListComponent storeArr={storeArr} />
        </div >
    )
}