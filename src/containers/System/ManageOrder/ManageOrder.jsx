import { useState, useEffect, useCallback } from "react"
import { getAllOrder, payOrder, deliverProduct, deleteOrder } from "../../../api/orderAPI"
import { formatPrice } from "../../../utils/formatPrice"
import RiseLoader from "react-spinners/RiseLoader"
import ModalViewOrder from "./ModalViewOrder"
import { toast } from "react-toastify"
import { withRouter } from "react-router-dom"


function ManageOrder() {
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

    const handleDelete = async (item) => {
        const res = await deleteOrder(item.id)
        if (res && res.errCode === 0) {
            toast.success(`Đơn hàng của khách hàng ${item.UserData.firstName} ${item.UserData.lastName} đã bị hủy`)
            fetchAllOrder()
        }
    }

    const handleCash = async (item) => {
        const res = await payOrder({ id: item.id })
        if (res && res.errCode === 0) {
            toast.success(`Đơn hàng của khách hàng ${item.UserData.firstName} ${item.UserData.lastName} đã trả tiền`)
            fetchAllOrder()
        }
    }

    const handleDeliver = async (item) => {
        const res = await deliverProduct({ id: item.id })
        if (res && res.errCode === 0) {
            toast.success(`Đơn hàng của khách hàng ${item.UserData.firstName} ${item.UserData.lastName} đã được vận chuyển`)
            fetchAllOrder()
        }
    }


    return (
        <>
            <ModalViewOrder showModalView={showModalView} setShowModalView={setShowModalView} orderDetail={orderDetail} />
            <div className="lg:p-10 md:p-3 sm:p-3 text-sm">
                <p className="text-2xl font-medium inline-block md:pb-10 sm:pb-5">Đơn hàng</p>
                <table className="w-full md:px-3 sm:px-2 rounded-lg overflow-hidden">
                    <thead className="h-14 bg-[#f68122] text-white border-slate-300 text-center overflow-hidden">
                        <tr>
                            <th className="px-5">Tên người đặt</th>
                            <th className="lg:table-cell md:hidden sm:hidden">Địa chỉ</th>
                            <th className="lg:table-cell md:hidden sm:hidden">SĐT</th>
                            <th>Tổng tiền</th>
                            <th className="md:table-cell sm:hidden">Thời gian đặt</th>
                            <th className="px-2">Trạng thái</th>
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
                                                    <tr className="h-12 font-medium md:text-sm sm:text-xs bg-white border-b border-slate-300 overflow-hidden" key={index}>
                                                        <td>{item.UserData && item.UserData.firstName && item.UserData.lastName && (`${item.UserData.firstName} ${item.UserData.lastName}`)}</td>
                                                        <td className="lg:table-cell md:hidden sm:hidden">{item.UserData && item.UserData.address}</td>
                                                        <td className="lg:table-cell md:hidden sm:hidden">{item.UserData && item.UserData.phone}</td>
                                                        <td>{formatPrice(item.totalPrice)}(VND)</td>
                                                        <td className="md:table-cell sm:hidden">{item.timeOrder}</td>
                                                        <td>
                                                            {item.StatusData && item.StatusData.valueVn && item.statusPayment === 'SP2' ?
                                                                <span className="md:text-white md:bg-green-500 sm:text-green-500 lg:p-3 md:p-2 rounded-2xl">{item.StatusData.valueVn}</span>
                                                                :
                                                                <span className="md:text-white md:bg-red-500 sm:text-red-500 lg:p-3 md:p-2 rounded-2xl">{item.StatusData.valueVn}</span>
                                                            }
                                                        </td>
                                                        <td className="p-4 xl:w-[120px] lg:w-[50px] md:w-[35px]">
                                                            <button className="text-white xl:w-14 lg:w-10 md:w-22 sm:w-12 bg-green-500 hover:bg-green-400 lg:p-2 md:py-1 border-none outline-none mb-2" name="Delete" onClick={() => handleView(item)}>
                                                                <i className="fa-regular fa-eye fa-md"></i>
                                                                {/* Chi tiết */}
                                                            </button>
                                                            {
                                                                item.statusPayment === 'SP1' ?
                                                                    (
                                                                        <button className="lg:mb-2 text-white xl:w-14 lg:w-10 md:w-22 sm:w-12 bg-yellow-400 hover:bg-yellow-300 lg:p-2 md:py-1 border-none outline-none mb-2" name="View" onClick={() => handleCash(item)}>
                                                                            <i className="fa-solid fa-dollar-sign fa-md"></i>
                                                                            <br />
                                                                            {/* Đã trả */}
                                                                        </button>
                                                                    )
                                                                    :
                                                                    (
                                                                        <button className="lg:mb-2 text-white xl:w-14 lg:w-10 md:w-22 sm:w-12 bg-blue-600 hover:bg-blue-500 lg:p-2 md:py-1 border-none outline-none mb-2" name="Deliver" onClick={() => handleDeliver(item)}>
                                                                            <i className="fa-solid fa-truck-fast fa-md"></i>
                                                                            <br />
                                                                            {/* Đã ship */}
                                                                        </button>
                                                                    )
                                                            }

                                                            <button className="mb-2 text-white xl:w-14 lg:w-10 md:w-22 sm:w-12 bg-red-500 hover:bg-red-400 lg:p-2 md:py-1 border-none outline-none" name="Delete" onClick={() => handleDelete(item)}>
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
                </table >
            </div >
        </>
    )
}

export default withRouter(ManageOrder)