import { useState, useEffect } from "react";
import { getAllOrder, payOrder, deliverProduct, deleteOrder } from "../../../api/orderAPI";
import { formatPrice } from "../../../utils/formatPrice";
import RiseLoader from "react-spinners/RiseLoader";
import ModalViewOrder from "./ModalViewOrder";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { cookieSelector } from "../../../redux/selector";

function ManageOrder() {
    const [showModalView, setShowModalView] = useState(false);
    const [orderList, setOrderList] = useState([]);
    const [orderDetail, setOrderDetail] = useState({});
    const accessToken = useSelector(cookieSelector);

    const fetchAllOrder = async () => {
        try {
            const res = await getAllOrder(accessToken);
            if (res.status === 200) {
                setOrderList(res.data);
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
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchAllOrder();
    }, [accessToken]); // Thêm accessToken vào dependency array

    const handleView = (item) => {
        setOrderDetail(item);
        setShowModalView(true);
    };

    const handleDelete = async (item) => {
        try {
            const res = await deleteOrder(item.order.id, accessToken);
            if (res.status === 200) {
                toast.success(`Đơn hàng của khách hàng ${item.user.firstName} ${item.user.lastName} đã bị hủy`);
                fetchAllOrder();
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
    };

    const handleCash = async (item) => {
        try {
            const res = await payOrder(item.order.id, accessToken);
            if (res.status === 200) {
                toast.success(`Đơn hàng của khách hàng ${item.user.firstName} ${item.user.lastName} đã trả tiền`);
                fetchAllOrder();
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
    };

    const handleDeliver = async (item) => {
        try {
            const res = await deliverProduct(item.order.id, accessToken);
            if (res.status === 200) {
                toast.success(`Đơn hàng của khách hàng ${item.user.firstName} ${item.user.lastName} đã được vận chuyển`);
                fetchAllOrder();
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
    };

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
                        {orderList.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="border py-4 text-lg">Không có dữ liệu</td>
                            </tr>
                        ) : (
                            orderList.map((item, index) => (
                                <tr className="h-12 font-medium md:text-sm sm:text-xs bg-white border-b border-slate-300 overflow-hidden" key={index}>
                                    <td>{item.user && `${item.user.firstName} ${item.user.lastName}`}</td>
                                    <td className="lg:table-cell md:hidden sm:hidden">{item.user && item.user.address}</td>
                                    <td className="lg:table-cell md:hidden sm:hidden">{item.user && item.user.phone}</td>
                                    <td>{formatPrice(item.order.totalPrice)}(VND)</td>
                                    <td className="md:table-cell sm:hidden">{item.order.timeOrder}</td>
                                    <td>
                                        <span className={`md:text-white ${item.order.statusId === 'SP2' ? 'md:bg-green-500 sm:text-green-500' : 'md:bg-red-500 sm:text-red-500'} lg:p-3 md:p-2 rounded-2xl`}>
                                            {item.statusOrder?.statusVN}
                                        </span>
                                    </td>
                                    <td className="p-4 xl:w-[120px] lg:w-[50px] md:w-[35px]">
                                        <button className="text-white xl:w-14 lg:w-10 md:w-22 sm:w-12 bg-green-500 hover:bg-green-400 lg:p-2 md:py-1 border-none outline-none mb-2" onClick={() => handleView(item)}>
                                            <i className="fa-regular fa-eye fa-md"></i>
                                        </button>
                                        {item.order.statusId === 'SP1' ? (
                                            <button className="lg:mb-2 text-white xl:w-14 lg:w-10 md:w-22 sm:w-12 bg-yellow-400 hover:bg-yellow-300 lg:p-2 md:py-1 border-none outline-none mb-2" onClick={() => handleCash(item)}>
                                                <i className="fa-solid fa-dollar-sign fa-md"></i>
                                            </button>
                                        ) : (
                                            <button className="lg:mb-2 text-white xl:w-14 lg:w-10 md:w-22 sm:w-12 bg-blue-600 hover:bg-blue-500 lg:p-2 md:py-1 border-none outline-none mb-2" onClick={() => handleDeliver(item)}>
                                                <i className="fa-solid fa-truck-fast fa-md"></i>
                                            </button>
                                        )}
                                        <button className="mb-2 text-white xl:w-14 lg:w-10 md:w-22 sm:w-12 bg-red-500 hover:bg-red-400 lg:p-2 md:py-1 border-none outline-none" onClick={() => handleDelete(item)}>
                                            <i className="fa-regular fa-trash-can fa-md"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default withRouter(ManageOrder);
