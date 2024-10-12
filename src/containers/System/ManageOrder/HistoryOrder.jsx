import { useState, useEffect } from "react"
import { getAllOrderDelivered, deleteOrder } from "../../../api/orderAPI"
import { formatPrice } from "../../../utils/formatPrice"
import RiseLoader from "react-spinners/RiseLoader"
import ModalViewOrder from "./ModalViewOrder"
import { withRouter } from "react-router-dom"
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import { cookieSelector } from "../../../redux/selector"


function HistoryOrder() {
    const [showModalView, setShowModalView] = useState(false)
    const [orderList, setOrderList] = useState([])
    const [orderDetail, setOrderDetail] = useState({})
    const accessToken = useSelector(cookieSelector)

    const fetchAllOrder = async () => {
        try {
            const res = await getAllOrderDelivered(accessToken)
            if (res.status === 200) {
                setOrderList(res.data)
            }
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 401) {
                    toast.error("Phiên làm việc đã hết hạn")
                }
                else if (status === 403) {
                    toast.error("Bạn không có quyền")
                }
                else {
                    toast.error('Lỗi hệ thống')
                }
            } else {
                toast.error('Lỗi kết nối hoặc không có phản hồi từ server');
            }
        } finally {
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
        try {
            const res = await deleteOrder(item.order.id, accessToken)
            if (res.status === 200) {
                toast.success(`Đơn hàng của khách hàng ${item.user.firstName} ${item.user.lastName} đã bị hủy`)
                fetchAllOrder()
            }
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 401) {
                    toast.error("Phiên làm việc đã hết hạn")
                }
                else if (status === 403) {
                    toast.error("Bạn không có quyền")
                }
                else {
                    toast.error('Lỗi hệ thống')
                }
            } else {
                toast.error('Lỗi kết nối hoặc không có phản hồi từ server');
            }
        } finally {
        }
    }


    return (
        <>
            <ModalViewOrder showModalView={showModalView} setShowModalView={setShowModalView} orderDetail={orderDetail} />
            <div className="lg:p-10 md:p-3 sm:p-3 text-sm">
                <p className="md:text-2xl sm:text-xl font-medium inline-block pb-10"> Lịch sử đơn hàng</p>
                <table className="w-full px-3 rounded-lg overflow-hidden md:text-base sm:text-xs">
                    <thead className="h-14 bg-[#f68122] text-white border-slate-300 text-center overflow-hidden">
                        <tr>
                            <th className="md:px-5 sm:px-3">Tên người đặt</th>
                            <th className="lg:table-cell md:hidden sm:hidden">Địa chỉ</th>
                            <th className="lg:table-cell md:hidden sm:hidden">SĐT</th>
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
                                                        <td>{item.user && item.user.firstName && item.user.lastName && (`${item.user.firstName} ${item.user.lastName}`)}</td>
                                                        <td className="lg:table-cell md:hidden sm:hidden">{item.user && item.user.address}</td>
                                                        <td className="lg:table-cell md:hidden sm:hidden">{item.user && item.user.phone}</td>
                                                        <td>{formatPrice(item.order.totalPrice)}(VND)</td>
                                                        <td>{item.order.timeOrder}</td>
                                                        <td>
                                                            <span className="md:text-white sm:text-blue-600 md:bg-blue-600 lg:p-3 md:p-2 rounded-2xl">{item.statusOrder.statusVN}</span>
                                                        </td>
                                                        <td className="md:p-4 sm:p-1 md:w-[120px]">
                                                            <button className="text-white md:w-14 bg-green-500 hover:bg-green-400 lg:p-2 md:p-1 border-none outline-none" name="Delete" onClick={() => handleView(item)}>
                                                                <i className="fa-regular fa-eye fa-md"></i>
                                                                {/* Chi tiết */}
                                                            </button>
                                                            <button className="mt-2 text-white md:w-14 bg-red-500 hover:bg-red-400 lg:p-2 md:p-1 border-none outline-none" name="Delete" onClick={() => handleDelete(item)}>
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