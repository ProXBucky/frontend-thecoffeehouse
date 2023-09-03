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
            <div className="mx-10 mt-1 ">
                <h1 className="text-4xl font-medium text-center">Trang chủ</h1>
                <div className="flex flex-wrap justify-center mt-5 gap-5">
                    <div className="bg-white rounded-lg w-1/5 mx-5 p-2 flex flex-row" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <div className="w-2/5 font-medium text-md  flex justify-center items-center">
                            <i className="fa-solid fa-user-tie fa-2xl"></i>
                        </div>
                        <div className="w-3/5 text-center">
                            <span className="font-medium text-3xl">{increaseNumberEffect(statistic.totalAdmins)}</span>
                            <p className="font-medium text-sm text-gray-500">Nhân viên</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg w-1/5 mx-5 p-2 flex flex-row" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <div className="w-2/5 font-medium text-md  flex justify-center items-center">
                            <i className="fa-solid fa-mug-saucer fa-2xl"></i>
                        </div>
                        <div className="w-3/5 text-center">
                            <span className="font-medium text-3xl">{increaseNumberEffect(statistic.totalProducts)}</span>
                            <p className="font-medium text-sm text-gray-500">Sản phẩm</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg w-1/5 mx-5 p-2 flex flex-row" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <div className="w-2/5 font-medium text-md  flex justify-center items-center">
                            <i className="fa-solid fa-shop fa-2xl"></i>
                        </div>
                        <div className="w-3/5 text-center">
                            <span className="font-medium text-3xl">{increaseNumberEffect(statistic.totalStores)}</span>
                            <p className="font-medium text-sm text-gray-500">Cửa hàng</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg w-1/5 mx-5 p-2 flex flex-row" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <div className="w-2/5 font-medium text-md  flex justify-center items-center">
                            <i className="fa-solid fa-truck fa-2xl"></i>
                        </div>
                        <div className="w-3/5 text-center">
                            <span className="font-medium text-3xl">{increaseNumberEffect(statistic.totalOrders)}</span>
                            <p className="font-medium text-sm text-gray-500">Đơn hàng</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg w-1/3 mx-5 p-2 flex flex-row" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <div className="w-1/4 font-medium text-md  flex justify-center items-center">
                            <i className="fa-solid fa-landmark fa-2xl"></i>
                        </div>
                        <div className="w-3/4 text-center">
                            <span className="font-medium text-3xl">{increaseNumberEffect((statistic.totalIncome))}</span>
                            <p className="font-medium text-sm text-gray-500">Tổng thu nhập (VNĐ)</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8 text-gray-500">
                    <div className="bg-white rounded-lg w-1/2 mx-5 px-4 pb-4" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <p className="font-medium my-4 text-lg">Đơn hàng gần nhất</p>
                        <table className="w-full px-3 overflow-hidden border">
                            <thead className="h-14 bg-[#f5f2f0] text-black">
                                <tr>
                                    <th>Khách hàng</th>
                                    <th>Tổng số tiền</th>
                                    <th>Ngày</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
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

                                                        {item.statusPayment === 'SP1' && <span className="text-white bg-red-500 p-1 rounded-lg">{item.StatusData.valueVn}</span>}
                                                        {item.statusPayment === 'SP2' && <span className="text-white bg-green-500 p-1 rounded-lg">{item.StatusData.valueVn}</span>}
                                                        {item.statusPayment === 'SP3' && <span className="text-white bg-blue-600 p-1 rounded-lg">{item.StatusData.valueVn}</span>}

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

                    <div className="bg-white rounded-lg w-1/2 mx-5 px-4 pb-4" style={{ boxShadow: '1px 1px 7px 1px #00000040' }}>
                        <p className="font-medium my-4 text-lg">Sản phẩm bán nhiều nhất</p>
                        <table className="w-full px-3 overflow-hidden border">
                            <thead className="h-14 bg-[#f5f2f0] text-black">
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Số lượng bán được</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
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