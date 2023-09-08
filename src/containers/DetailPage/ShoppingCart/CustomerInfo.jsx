
import { Link } from "react-router-dom"
import { formatPrice } from "../../../utils/formatPrice"
import { toast } from "react-toastify";
import { orderProduct } from "../../../api/orderAPI"
import dateFormat from "dateformat";
import { CartSlice } from "../../../redux/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form"


export default function CustomerInfo({ cart, isViewFunction }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const handleOrderSuccess = () => {
        dispatch(CartSlice.actions.orderSuccess());
    };


    const onSubmit = async (data) => {
        const res = await orderProduct({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            address: data.address,
            timeOrder: dateFormat(new Date(), "dd/mm/yyyy, h:MM TT"),
            cartItems: cart.cartItems,
            cartTotalAmount: cart.cartTotalAmount
        })
        if (res && res.errCode === 0) {
            handleOrderSuccess()
        } else {
            toast.error('Lỗi hệ thống')

        }
        reset({
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
        })
    }

    return (
        <>
            <div className="flex lg:flex-row md:flex-col sm:flex-col">
                <div className="lg:w-1/2 md:w-full border-2 bg-[#fff3d9] lg:py-10 md:py-5 sm:py-2 lg:px-10 md:px-5 sm:px-2">
                    <h2 className="font-medium md:text-xl sm:text-base pb-5 text-center">Thông tin khách hàng</h2>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" id="order">
                        <p className="font-normal lg:text-lg md:text-base sm:text-sm">Email</p>
                        {
                            isViewFunction === 'false' ?
                                (
                                    <>
                                        <input className="w-full bg-white border rounded lg:py-3 md:py-2 sm:py-1 px-4 mb-3  focus:outline-none text-black"
                                            type="email" placeholder="example@email.com"
                                            {...register("email", {
                                                required: "Email là trường bắt buộc",
                                                pattern: {
                                                    value:
                                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: "Vui lòng nhập email hợp lệ",
                                                },
                                            })}
                                        />
                                        <p className="text-red-500 mb-2">{errors.email?.message}</p>
                                    </>
                                )
                                :
                                <input type="text" className="bg-white border-2 py-1 px-2 w-full lg:text-lg md:text-base sm:text-sm" name="email" value={cart.UserData.email} disabled />
                        }
                        <div className="flex flex-row gap-[10%]">
                            <div className="w-1/2">
                                <p className="font-normal lg:text-lg md:text-base sm:text-sm">Họ đệm</p>
                                {
                                    isViewFunction === 'false' ?
                                        (
                                            <>
                                                <input className="w-full bg-white border border-gray-200 rounded lg:py-3 md:py-2 sm:py-1 px-4 mb-3  focus:outline-none text-black "
                                                    type="text" placeholder="Nguyễn Văn"
                                                    {...register("firstName", {
                                                        required: "Đây là trường bắt buộc",
                                                    })}
                                                />
                                                <p className="text-red-500 mb-2">{errors.firstName?.message}</p>
                                            </>
                                        )
                                        :
                                        <input type="text" className="bg-white border-2 py-1 px-2 w-full lg:text-lg md:text-base sm:text-sm" name="firstName" value={cart.UserData.firstName} disabled />
                                }
                            </div>
                            <div className="w-1/2">
                                <p className="font-normal lg:text-lg md:text-base sm:text-sm">Tên</p>
                                {
                                    isViewFunction === 'false' ?
                                        (
                                            <>
                                                <input className="w-full bg-white border border-gray-200 rounded lg:py-3 md:py-2 sm:py-1 px-4  focus:outline-none text-black "
                                                    type="text" placeholder="A"
                                                    {...register("lastName", {
                                                        required: "Đây là trường bắt buộc",
                                                    })}
                                                />
                                                <p className="text-red-500 mb-2">{errors.lastName?.message}</p>
                                            </>
                                        )
                                        :
                                        <input type="text" className="bg-white border-2 py-1 px-2 w-full lg:text-lg md:text-base sm:text-sm" name="lastName" value={cart.UserData.lastName} disabled />
                                }
                            </div>
                        </div>
                        <p className="font-normal lg:text-lg md:text-base sm:text-sm">Số điện thoại</p>
                        {
                            isViewFunction === 'false' ?
                                (
                                    <>
                                        <input className="  w-full bg-white border border-gray-200 rounded lg:py-3 md:py-2 sm:py-1 px-4  focus:outline-none text-black"
                                            placeholder="+84xxxxxxxxx"
                                            {...register("phone", {
                                                required: "Đây là trường bắt buộc",
                                                pattern: {
                                                    value:
                                                        /^[0-9]{1,11}$/,
                                                    message:
                                                        "Số điện thoại sẽ ít hơn 11 kí tự và tất cả kí tự là chữ số",
                                                },
                                            })}
                                        />
                                        <p className="text-red-500 mb-2">{errors.phone?.message}</p>
                                    </>
                                )
                                :
                                <input type="text" className="bg-white border-2 py-1 px-2 w-full lg:text-lg md:text-base sm:text-sm" name="phone" value={cart.UserData.phone} disabled />
                        }
                        <p className="font-normal lg:text-lg md:text-base sm:text-sm">Địa chỉ</p>
                        {
                            isViewFunction === 'false' ?
                                (
                                    <>
                                        <input className="  w-full bg-white border border-gray-200 rounded lg:py-3 md:py-2 sm:py-1 px-4  focus:outline-none text-black "
                                            type="text" placeholder="Ha Noi"
                                            {...register("address", {
                                                required: "Đây là trường bắt buộc",
                                            })}
                                        />
                                        <p className="text-red-500 mb-2">{errors.address?.message}</p>
                                    </>
                                )
                                :
                                <input type="text" className="bg-white border-2 py-1 px-2 w-full lg:text-lg md:text-base sm:text-sm" name="address" value={cart.UserData.address} disabled />
                        }
                    </form>
                </div >
                <div className="lg:w-1/2 lg:pl-20 sm:w-full md:mt-10">
                    {
                        isViewFunction === 'false' ?
                            <div className="md:mt-0 sm:mt-5">
                                <span className="font-medium lg:text-2xl md:text-xl sm:text-lg">Tổng hóa đơn:</span>
                                <span className="font-medium lg:text-2xl md:text-xl sm:text-lg ml-4">{formatPrice(cart.cartTotalAmount)} VND</span>
                            </div>
                            :
                            <p>
                                <span className="font-medium lg:text-lg md:text-base sm:text-sm sm:mt-5">Tổng hóa đơn: {formatPrice(cart.totalPrice)} VND </span>
                            </p>
                    }
                    {
                        isViewFunction === 'false' ?
                            <>
                                <button className="text-white w-full md:mt-14 sm:mt-6 mb-8 border-none bg-[#f68122] hover:scale-[0.98]" form="order" type="submit">Đặt hàng</button>
                                <Link to="/collections/all"><i className="fa-solid fa-arrow-left fa-lg"></i> Mua sản phẩm khác</Link>
                            </>
                            :
                            <>
                                <p className="mt-2 font-medium lg:text-lg md:text-base sm:text-sm mb-3">Thời gian đặt: {cart.timeOrder}</p>
                                {cart.StatusData && cart.StatusData.valueVn && cart.statusPayment === 'SP1' && <p className="text-white text-center bg-red-500 lg:p-3 md:p-1 rounded-2xl">{cart.StatusData.valueVn}</p>}
                                {cart.StatusData && cart.StatusData.valueVn && cart.statusPayment === 'SP2' && <p className="text-white text-center bg-green-500 lg:p-3 md:p-1 rounded-2xl">{cart.StatusData.valueVn}</p>}
                                {cart.StatusData && cart.StatusData.valueVn && cart.statusPayment === 'SP3' && <p className="text-white text-center bg-blue-600 lg:p-3 md:p-1 rounded-2xl">{cart.StatusData.valueVn}</p>}
                            </>
                    }
                </div>
            </div>

        </>

    )
}