import { useEffect, useState } from "react"
import { decodeBase64Func } from "../../utils/base64"
import { fetchAllProductByCategory } from "../../api/appAPI"
import { formatPrice } from "../../utils/formatPrice"
import { useHistory } from "react-router-dom"
import RiseLoader from "react-spinners/RiseLoader"


export default function CoffeeCollection() {
    const [allProductArr, setAllProductArr] = useState('')
    const history = useHistory()

    const fetchDataProduct = async () => {
        const res = await fetchAllProductByCategory('CA1')
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setAllProductArr(res.data)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchDataProduct()
    }, [])


    const handleDetail = (item) => {
        history.push(`/products/${item.category}/${item.id}`)

    }

    return (
        <div className="relative h-full px-16 flex flex-wrap gap-10">
            {
                allProductArr === 'None' ?
                    (
                        <div className="text-2xl mt-24">Không có dữ liệu</div>
                    )
                    :
                    allProductArr && allProductArr.length > 0 ?
                        allProductArr.map((item, index) => {
                            return (
                                <div className="w-[270px] cursor-pointer" key={index} onClick={() => handleDetail(item)}>
                                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: '1px 1px 13px 0px #00000040' }}>
                                        <img src={decodeBase64Func(item.image.data)} ></img>
                                    </div>
                                    <div className="mt-2">
                                        <label className="font-semibold text-base">{item.name}</label><br></br>
                                        <label className="font-normal text-sm text-[#666]">{formatPrice(item.originalPrice)} đ</label>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <RiseLoader color="#36d7b7" className="absolute top-[45%] left-[45%] " />

            }

        </div >
    )
}