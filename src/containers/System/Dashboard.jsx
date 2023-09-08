import { useSpring, animated } from "react-spring"
import { fetchStatisticsApp, fetchBestSeller } from "../../api/appAPI"
import { getLastestOrder } from "../../api/orderAPI"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
// import RiseLoader from "react-spinners/RiseLoader"
import { formatPrice } from "../../utils/formatPrice"
import { withRouter } from "react-router-dom"

function DashBoard() {
    const [statistic, setStatistic] = useState({})
    const [bestSeller, setBestSeller] = useState([])
    const [lastestOrder, setLastestOrder] = useState([])

    useEffect(() => {
        fetchDataDashboard()
        fetchSellerBest()
        fetchLastestOrder()
    }, [])

    const fetchDataDashboard = async () => {
        const res = await fetchStatisticsApp()
        if (res && res.errCode === 0) {
            setStatistic(res.data)
        } else {
            toast.error('Lỗi hệ thống')
        }
    }

    const fetchSellerBest = async () => {
        const res = await fetchBestSeller(5)
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setBestSeller(res.data)
        } else {
            toast.error('Lỗi hệ thống')
        }
    }

    const fetchLastestOrder = async () => {
        const res = await getLastestOrder(5)
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setLastestOrder(res.data)
        } else {
            toast.error('Lỗi hệ thống')
        }
    }

    const increaseNumberEffect = (n) => {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 }
        })
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    }


    return (
        <>
            <div className="md:mx-10 sm:mx-[0px] mt-1">
                <h1 className="md:text-4xl sm:text-3xl font-medium text-center">Trang chủ</h1>
                <div className="flex flex-wrap justify-center mt-5 pb-5 md:gap-5 sm:gap-3">
                    <div className="bg-white rounded-lg w-1/5 mx-5 md:p-2 sm:p-4 flex md:flex-row sm:flex-col sm:gap-2" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <div className="md:w-2/5 sm:w-full font-medium lg:text-lg md:text-xs sm:text-[10px] flex justify-center items-center">
                            <i className="fa-solid fa-user-tie fa-2xl"></i>
                        </div>
                        <div className="md:w-3/5 sm:w-full text-center">
                            <span className="font-medium lg:text-3xl md:text-2xl">{increaseNumberEffect(statistic.totalAdmins)}</span>
                            <p className="font-medium lg:text-sm md:text-xs sm:text-[10px] text-gray-500">Nhân viên</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg w-1/5 mx-5 md:p-2 sm:p-4 flex md:flex-row sm:flex-col sm:gap-2" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <div className="md:w-2/5 sm:w-full font-medium lg:text-lg md:text-xs sm:text-[10px]  flex justify-center items-center">
                            <i className="fa-solid fa-mug-saucer fa-2xl"></i>
                        </div>
                        <div className="md:w-3/5 sm:w-full text-center">
                            <span className="font-medium lg:text-3xl md:text-2xl">{increaseNumberEffect(statistic.totalProducts)}</span>
                            <p className="font-medium lg:text-sm md:text-xs sm:text-[10px] text-gray-500">Sản phẩm</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg w-1/5 mx-5 md:p-2 sm:p-4 flex md:flex-row sm:flex-col sm:gap-2" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <div className="md:w-2/5 sm:w-full font-medium lg:text-lg md:text-xs sm:text-[10px]  flex justify-center items-center">
                            <i className="fa-solid fa-shop fa-2xl"></i>
                        </div>
                        <div className="md:w-3/5 sm:w-full text-center">
                            <span className="font-medium lg:text-3xl md:text-2xl">{increaseNumberEffect(statistic.totalStores)}</span>
                            <p className="font-medium lg:text-sm md:text-xs sm:text-[10px] text-gray-500">Cửa hàng</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg w-1/5 mx-5 md:p-2 sm:p-4 flex md:flex-row sm:flex-col sm:gap-2" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <div className="md:w-2/5 sm:w-full font-medium lg:text-lg md:text-xs sm:text-[10px]  flex justify-center items-center">
                            <i className="fa-solid fa-truck fa-2xl"></i>
                        </div>
                        <div className="md:w-3/5 sm:w-full text-center">
                            <span className="font-medium lg:text-3xl md:text-2xl">{increaseNumberEffect(statistic.totalOrders)}</span>
                            <p className="font-medium lg:text-sm md:text-xs sm:text-[10px] text-gray-500">Đơn hàng</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg w-1/3 mx-5 md:p-2 sm:p-4 flex md:flex-row sm:flex-col sm:gap-2" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <div className="md:w-1/4 sm:w-full font-medium lg:text-lg md:text-xs sm:text-[10px]  flex justify-center items-center">
                            <i className="fa-solid fa-landmark fa-2xl"></i>
                        </div>
                        <div className="md:w-3/4 sm:w-full text-center">
                            <span className="font-medium lg:text-3xl md:text-2xl">{increaseNumberEffect((statistic.totalIncome))}</span>
                            <p className="font-medium lg:text-sm md:text-xs sm:text-[10px] text-gray-500">Tổng thu nhập (VNĐ)</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center lg:mt-8 md:mt-2 text-gray-500 xl:flex-nowrap py-5 md:flex-wrap sm:flex-wrap md:gap-5 sm:gap-3">
                    <div className="bg-white rounded-lg xl:w-1/2 md:w-full mx-5 px-4 pb-4" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <p className="font-medium my-4 md:text-lg sm:text-base">Đơn hàng gần nhất</p>
                        <table className="w-full px-3 overflow-hidden border">
                            <thead className="h-14 bg-[#f5f2f0] text-black md:text-lg sm:text-[12px]">
                                <tr>
                                    <th>Khách hàng</th>
                                    <th>Tổng số tiền</th>
                                    <th>Ngày</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody className="text-center md:text-lg sm:text-[12px]">
                                {
                                    lastestOrder === 'None' ?
                                        (
                                            <tr colSpan="4" className="text-lg" >Không có dữ liệu</tr>
                                        )
                                        :
                                        lastestOrder && lastestOrder.length > 0 &&
                                        lastestOrder.map((item, index) => {
                                            return (
                                                <tr className="border-b-2 h-12" key={index}>
                                                    <td>
                                                        {`${item.UserData && item.UserData.firstName} ${item.UserData && item.UserData.lastName}`}
                                                    </td>
                                                    <td>
                                                        {formatPrice(item.totalPrice)} VNĐ
                                                    </td>
                                                    <td>
                                                        {item.timeOrder}
                                                    </td>
                                                    <td>

                                                        {item.statusPayment === 'SP1' && <span className="text-white md:bg-red-500 md:text-white sm:text-red-500 p-1 rounded-lg">{item.StatusData.valueVn}</span>}
                                                        {item.statusPayment === 'SP2' && <span className="text-white md:bg-green-500 md:text-white sm:text-green-500 p-1 rounded-lg">{item.StatusData.valueVn}</span>}
                                                        {item.statusPayment === 'SP3' && <span className="text-white md:bg-blue-600 md:text-white sm:text-blue-600 p-1 rounded-lg">{item.StatusData.valueVn}</span>}

                                                    </td>
                                                </tr>
                                            )
                                        })
                                    // :
                                    // <RiseLoader color="#36d7b7" className="absolute top-[45%] left-[45%] " />
                                }
                            </tbody>
                        </table >
                    </div>

                    <div className="bg-white rounded-lg xl:w-1/2 md:w-full mx-5 px-4 pb-4" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <p className="font-medium my-4 md:text-lg sm:text-base">Sản phẩm bán nhiều nhất</p>
                        <table className="w-full px-3 overflow-hidden border">
                            <thead className="h-14 bg-[#f5f2f0] text-black md:text-lg sm:text-[12px]">
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Số lượng bán được</th>
                                </tr>
                            </thead>
                            <tbody className="text-center md:text-lg sm:text-[12px]">
                                {
                                    bestSeller === 'None' ?
                                        (
                                            <tr colSpan="2" className="text-lg" >Không có dữ liệu</tr>
                                        )
                                        :
                                        bestSeller && bestSeller.length > 0 &&
                                        bestSeller.map((item, index) => {
                                            return (
                                                <tr className="border-b-2 h-12" key={index}>
                                                    <td>
                                                        {item.name}
                                                    </td>
                                                    <td>
                                                        {item.quantitySold}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                }
                            </tbody>
                        </table >
                    </div>
                </div>
            </div >

        </>
    )
}

export default withRouter(DashBoard)