import { useState, useEffect } from "react"
import { getAllOrderDelivered } from "../../../api/orderAPI"
import { formatPrice } from "../../../utils/formatPrice"
import RiseLoader from "react-spinners/RiseLoader"
import ModalViewOrder from "./ModalViewOrder"
import { withRouter } from "react-router-dom"


function HistoryOrder() {
    const [showModalView, setShowModalView] = useState(false)
    const [orderList, setOrderList] = useState([])
    const [orderDetail, setOrderDetail] = useState({})


    const fetchAllOrder = async () => {
        const res = await getAllOrderDelivered()
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

    const handleDelete = async (item) => {
        const res = await deleteOrder({ id: item.id })
        if (res && res.errCode === 0) {
            toast.success(`Đơn hàng của khách hàng ${item.UserData.firstName} ${item.UserData.lastName} đã bị hủy`)
            fetchAllOrder()
        }
    }


    return (
        <>
            <ModalViewOrder showModalView={showModalView} setShowModalView={setShowModalView} orderDetail={orderDetail} />
            <div className="p-10 text-sm">
                <p className="text-2xl font-medium inline-block pb-10">Đơn hàng</p>
                <table className="w-full px-3 rounded-lg overflow-hidden">
                    <thead className="h-14 bg-[#f68122] text-white border-slate-300 text-center overflow-hidden">
                        <tr>
                            <th className="px-5">Tên người đặt</th>
                            <th>Địa chỉ</th>
                            <th>SĐT</th>
                            <th>Tổng tiền</th>
                            <th>Thời gian đặt</th>
                            <th>Trạng thái</th>
                            <th>Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <>
                            {
                                orderList === 'None' ?
                                    (
                                        <td colSpan="7" className="border py-4 text-lg">Không có dữ liệu</td>
                                    )
                                    :
                                    (
                                        orderList && orderList.length > 0 ?
                                            orderList.map((item, index) => {
                                                return (
                                                    <tr className="h-12 font-medium bg-white border-b border-slate-300 overflow-hidden" key={index}>
                                                        <td>{item.UserData && item.UserData.firstName && item.UserData.lastName && (`${item.UserData.firstName} ${item.UserData.lastName}`)}</td>
                                                        <td>{item.UserData && item.UserData.address}</td>
                                                        <td>{item.UserData && item.UserData.phone}</td>
                                                        <td>{formatPrice(item.totalPrice)}(VND)</td>
                                                        <td>{item.timeOrder}</td>
                                                        <td>
                                                            <span className="text-white bg-blue-600 p-3 rounded-2xl">{item.StatusData.valueVn}</span>
                                                        </td>
                                                        <td className="p-4 w-[120px]">
                                                            <button className="text-white w-14 bg-green-500 hover:bg-green-400 p-2 border-none outline-none" name="Delete" onClick={() => handleView(item)}>
                                                                <i className="fa-regular fa-eye fa-md"></i>
                                                                {/* Chi tiết */}
                                                            </button>
                                                            <button className="mt-2 text-white w-14 bg-red-500 hover:bg-red-400 p-2 border-none outline-none" name="Delete" onClick={() => handleDelete(item)}>
                                                                <i className="fa-regular fa-trash-can fa-md"></i>
                                                                <br />
                                                                {/* Xoas */}
                                                            </button>
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

export default withRouter(HistoryOrder)