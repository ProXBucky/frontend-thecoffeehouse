
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
            toast.error(res.errMessage)
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
            <div className="w-1/2 border-2 bg-[#fff3d9] py-10 px-10">
                <h2 className="font-medium text-xl pb-5 text-center">Thông tin khách hàng</h2>

                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" id="order">
                    <p className="font-normal text-lg">Email</p>
                    {
                        isViewFunction === 'false' ?
                            (
                                <>
                                    <input className="w-full bg-white border rounded py-3 px-4 mb-3  focus:outline-none text-black"
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
                            <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="email" value={cart.UserData.email} disabled />
                    }
                    <div className="flex flex-row gap-[10%]">
                        <div className="w-1/2">
                            <p className="font-normal text-lg">Họ đệm</p>
                            {
                                isViewFunction === 'false' ?
                                    (
                                        <>
                                            <input className="w-full bg-white border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none text-black "
                                                type="text" placeholder="Nguyễn Văn"
                                                {...register("firstName", {
                                                    required: "Đây là trường bắt buộc",
                                                })}
                                            />
                                            <p className="text-red-500 mb-2">{errors.firstName?.message}</p>
                                        </>
                                    )
                                    :
                                    <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="firstName" value={cart.UserData.firstName} disabled />
                            }
                        </div>
                        <div className="w-1/2">
                            <p className="font-normal text-lg">Tên</p>
                            {
                                isViewFunction === 'false' ?
                                    (
                                        <>
                                            <input className="w-full bg-white border border-gray-200 rounded py-3 px-4  focus:outline-none text-black "
                                                type="text" placeholder="A"
                                                {...register("lastName", {
                                                    required: "Đây là trường bắt buộc",
                                                })}
                                            />
                                            <p className="text-red-500 mb-2">{errors.lastName?.message}</p>
                                        </>
                                    )
                                    :
                                    <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="lastName" value={cart.UserData.lastName} disabled />
                            }
                        </div>
                    </div>
                    <p className="font-normal text-lg">Số điện thoại</p>
                    {
                        isViewFunction === 'false' ?
                            (
                                <>
                                    <input className="  w-full bg-white border border-gray-200 rounded py-3 px-4  focus:outline-none text-black"
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
                            <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="phone" value={cart.UserData.phone} disabled />
                    }
                    <p className="font-normal text-lg">Địa chỉ</p>
                    {
                        isViewFunction === 'false' ?
                            (
                                <>
                                    <input className="  w-full bg-white border border-gray-200 rounded py-3 px-4  focus:outline-none text-black "
                                        type="text" placeholder="Ha Noi"
                                        {...register("address", {
                                            required: "Đây là trường bắt buộc",
                                        })}
                                    />
                                    <p className="text-red-500 mb-2">{errors.address?.message}</p>
                                </>
                            )
                            :
                            <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="address" value={cart.UserData.address} disabled />
                    }
                </form>
            </div >
            <div className="w-1/2 pl-20">
                {
                    isViewFunction === 'false' ?
                        <>
                            <span className="font-medium text-2xl">Tổng hóa đơn:</span>
                            <span className="font-medium text-2xl ml-4">{formatPrice(cart.cartTotalAmount)} VND</span>
                        </>
                        :
                        <p>
                            <span className="font-medium text-2xl">Tổng hóa đơn: {formatPrice(cart.totalPrice)} VND </span>
                            (
                            {cart.StatusData && cart.StatusData.valueVn && cart.statusPayment === 'SP1' && <span className="text-green-500 font-semibold">{cart.StatusData.valueVn}</span>}
                            {cart.StatusData && cart.StatusData.valueVn && cart.statusPayment === 'SP2' && <span className="text-red-500 font-semibold">{cart.StatusData.valueVn}</span>}
                            {cart.StatusData && cart.StatusData.valueVn && cart.statusPayment === 'SP3' && <span className="text-blue-600 font-semibold">{cart.StatusData.valueVn}</span>}
                            )
                        </p>
                }
                {
                    isViewFunction === 'false' ?
                        <>
                            <button className="text-white w-full mt-14 mb-8 border-none bg-[#f68122] hover:scale-[0.98]" form="order" type="submit">Đặt hàng</button>
                            <Link to="/collections/all"><i className="fa-solid fa-arrow-left fa-lg"></i> Mua sản phẩm khác</Link>
                        </>
                        :
                        <>
                            <p className="mt-2 font-medium text-2xl">Thời gian đặt: {cart.timeOrder}</p>
                        </>
                }
            </div>

        </>

    )
}