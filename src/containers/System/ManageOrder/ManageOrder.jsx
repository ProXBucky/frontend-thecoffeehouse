import { useState, useEffect, useCallback } from "react"
import { getAllOrder, payOrder, deliverProduct } from "../../../api/orderAPI"
import { formatPrice } from "../../../utils/formatPrice"
import RiseLoader from "react-spinners/RiseLoader"
import ModalViewOrder from "./ModalViewOrder"
import { toast } from "react-toastify"


export default function ManageOrder() {
    const [showModalView, setShowModalView] = useState(false)
    const [orderList, setOrderList] = useState([])
    const [orderDetail, setOrderDetail] = useState({})


    const fetchAllOrder = async () => {
        const res = await getAllOrder()
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setOrderList(res.data)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchAllOrder()
    }, [])

    const handleView = (item) => {
        setOrderDetail(item)
        setShowModalView(true)
    }

    const handleCash = async (item) => {
        const res = await payOrder({ id: item.id })
        if (res && res.errCode === 0) {
            toast.success(`Order of ${item.UserData.firstName} ${item.UserData.lastName} was paid`)
            fetchAllOrder()
        }
    }

    const handleDeliver = async (item) => {
        const res = await deliverProduct({ id: item.id })
        if (res && res.errCode === 0) {
            toast.success(`Order of ${item.UserData.firstName} ${item.UserData.lastName} was delivered`)
            fetchAllOrder()
        }
    }


    return (
        <>
            <ModalViewOrder showModalView={showModalView} setShowModalView={setShowModalView} orderDetail={orderDetail} />
            <div className="p-10">
                <p className="text-3xl font-medium inline-block pb-10">Đơn hàng</p>
                <table className="w-full px-3 rounded-lg overflow-hidden">
                    <thead className="h-14 bg-[#f68122] text-white border border-slate-300 text-center overflow-hidden">
                        <tr>
                            <th className="px-5">Tên người đặt</th>
                            <th>Địa chỉ</th>
                            <th>SĐT</th>
                            <th>Tổng tiền</th>
                            <th>Thời gian đặt</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <>
                            {
                                orderList === 'None' ?
                                    (
                                        <td colspan="7" className="border py-4 text-lg">Không có dữ liệu</td>
                                    )
                                    :
                                    (
                                        orderList && orderList.length > 0 ?
                                            orderList.map((item, index) => {
                                                return (
                                                    <tr className="h-12 font-medium text-base odd:bg-neutral-100 even:bg-slate-200 border border-slate-300 overflow-hidden" key={index}>
                                                        <td>{item.UserData && item.UserData.firstName && item.UserData.lastName && (`${item.UserData.firstName} ${item.UserData.lastName}`)}</td>
                                                        <td>{item.UserData && item.UserData.address}</td>
                                                        <td>{item.UserData && item.UserData.phone}</td>
                                                        <td>{formatPrice(item.totalPrice)}(VND)</td>
                                                        <td>{item.timeOrder}</td>
                                                        <td className="text-lg">
                                                            {item.StatusData && item.StatusData.valueVn && item.statusPayment === 'SP2' ?
                                                                <span className="text-green-500">{item.StatusData.valueVn}</span>
                                                                :
                                                                <span className="text-red-500">{item.StatusData.valueVn}</span>
                                                            }
                                                        </td>
                                                        <td className="p-4 w-[120px]">
                                                            <button className="text-white w-14 bg-green-500 hover:bg-green-400  p-2 border-none outline-none mb-2" name="Delete" onClick={() => handleView(item)}>
                                                                <i className="fa-regular fa-eye fa-md mr-1"></i>
                                                                Chi tiết
                                                            </button>
                                                            {
                                                                item.statusPayment === 'SP1' ?
                                                                    (
                                                                        <button className="mb-2 text-white w-14 bg-yellow-400 hover:bg-yellow-300 p-2 border-none outline-none" name="View" onClick={() => handleCash(item)}>
                                                                            <i className="fa-solid fa-dollar-sign fa-md"></i>
                                                                            <br />
                                                                            Đã trả
                                                                        </button>
                                                                    )
                                                                    :
                                                                    (
                                                                        <button className="mb-2 text-white w-14 bg-blue-600 hover:bg-blue-500 p-2 border-none outline-none" name="Deliver" onClick={() => handleDeliver(item)}>
                                                                            <i className="fa-solid fa-dollar-sign fa-md"></i>
                                                                            <br />
                                                                            Đã ship
                                                                        </button>
                                                                    )
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            :
                                            <RiseLoader color="#36d7b7" className="absolute top-[45%] left-[45%] " />
                                    )
                            }
                        </>
                    </tbody>
                </table>
            </div >
        </>
    )
}