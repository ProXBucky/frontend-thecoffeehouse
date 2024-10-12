
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
        try {
            // Xử lý cartItem trước khi post order
            const newCartItems = await cart.cartItems.map(item => ({
                productId: item.id,
                quantity: item.cartQuantity
            }));

            const res = await orderProduct({
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                address: data.address,
                timeOrder: dateFormat(new Date(), "dd/mm/yyyy, h:MM TT"),
                cartItems: newCartItems,
                cartTotalAmount: cart.cartTotalAmount
            })
            if (res.status === 200) {
                handleOrderSuccess()
            }
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 400) {
                    toast.error("Thiếu dữ liệu đầu vào")
                }
                else {
                    toast.error('Lỗi hệ thống')
                }
            } else {
                toast.error('Lỗi kết nối hoặc không có phản hồi từ server');
            }
        } finally {
            reset({
                email: '',
                firstName: '',
                lastName: '',
                phone: '',
                address: '',
            })
        }
    }

    return (
        <>
            <div className="flex lg:flex-row md:flex-col sm:flex-col">
                <div className="lg:w-1/2 md:w-full border-2 lg:py-10 md:py-5 sm:py-2 lg:px-10 md:px-5 sm:px-2">
                    <h2 className="font-medium md:text-xl sm:text-base pb-5 text-center">Thông tin khách hàng</h2>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" id="order">
                        <p className="lg:text-lg md:text-base sm:text-sm font-medium">Email</p>
                        {
                            isViewFunction === 'false' ?
                                (
                                    <>
                                        <input className="w-full bg-white border-2 rounded lg:py-3 md:py-2 sm:py-1 px-4 mb-3  focus:outline-none text-black"
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
                                <input type="text" className="bg-white border-2 py-1 px-2 w-full lg:text-lg md:text-base sm:text-sm font-medium" name="email" value={cart.user.email} disabled />
                        }
                        <div className="flex flex-row gap-[10%]">
                            <div className="w-1/2">
                                <p className="lg:text-lg md:text-base sm:text-sm font-medium">Họ đệm</p>
                                {
                                    isViewFunction === 'false' ?
                                        (
                                            <>
                                                <input className="w-full bg-white border-2 border-gray-200 rounded lg:py-3 md:py-2 sm:py-1 px-4 mb-3  focus:outline-none text-black "
                                                    type="text" placeholder="Nguyễn Văn"
                                                    {...register("firstName", {
                                                        required: "Đây là trường bắt buộc",
                                                    })}
                                                />
                                                <p className="text-red-500 mb-2">{errors.firstName?.message}</p>
                                            </>
                                        )
                                        :
                                        <input type="text" className="bg-white border-2 py-1 px-2 w-full lg:text-lg md:text-base sm:text-sm font-medium" name="firstName" value={cart.user.firstName} disabled />
                                }
                            </div>
                            <div className="w-1/2">
                                <p className="lg:text-lg md:text-base sm:text-sm font-medium">Tên</p>
                                {
                                    isViewFunction === 'false' ?
                                        (
                                            <>
                                                <input className="w-full bg-white border-2 border-gray-200 rounded lg:py-3 md:py-2 sm:py-1 px-4  focus:outline-none text-black "
                                                    type="text" placeholder="A"
                                                    {...register("lastName", {
                                                        required: "Đây là trường bắt buộc",
                                                    })}
                                                />
                                                <p className="text-red-500 mb-2">{errors.lastName?.message}</p>
                                            </>
                                        )
                                        :
                                        <input type="text" className="bg-white border-2 py-1 px-2 w-full lg:text-lg md:text-base sm:text-sm font-medium" name="lastName" value={cart.user.lastName} disabled />
                                }
                            </div>
                        </div>
                        <p className="lg:text-lg md:text-base sm:text-sm font-medium">Số điện thoại</p>
                        {
                            isViewFunction === 'false' ?
                                (
                                    <>
                                        <input className="  w-full bg-white border-2 border-gray-200 rounded lg:py-3 md:py-2 sm:py-1 px-4  focus:outline-none text-black"
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
                                <input type="text" className="bg-white border-2 py-1 px-2 w-full lg:text-lg md:text-base sm:text-sm font-medium" name="phone" value={cart.user.phone} disabled />
                        }
                        <p className="lg:text-lg md:text-base sm:text-sm font-medium">Địa chỉ</p>
                        {
                            isViewFunction === 'false' ?
                                (
                                    <>
                                        <input className="  w-full bg-white border-2 border-gray-200 rounded lg:py-3 md:py-2 sm:py-1 px-4  focus:outline-none text-black "
                                            type="text" placeholder="Ha Noi"
                                            {...register("address", {
                                                required: "Đây là trường bắt buộc",
                                            })}
                                        />
                                        <p className="text-red-500 mb-2">{errors.address?.message}</p>
                                    </>
                                )
                                :
                                <input type="text" className="bg-white border-2 py-1 px-2 w-full lg:text-lg md:text-base sm:text-sm font-medium" name="address" value={cart.user.address} disabled />
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
                                <span className="lg:text-lg md:text-base sm:text-sm font-medium sm:mt-5">Tổng hóa đơn: {formatPrice(cart.order.totalPrice)} VND </span>
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
                                <p className="mt-2 lg:text-lg md:text-base sm:text-sm font-medium mb-3">Thời gian đặt: {cart.order.timeOrder}</p>
                                {cart.order && cart.order.statusId === 'SP1' && <p className="text-white text-center bg-red-500 lg:p-3 md:p-1 rounded-2xl">{cart.statusOrder.statusVN}</p>}
                                {cart.order && cart.order.statusId === 'SP2' && <p className="text-white text-center bg-green-500 lg:p-3 md:p-1 rounded-2xl">{cart.statusOrder.statusVN}</p>}
                                {cart.order && cart.order.statusId === 'SP3' && <p className="text-white text-center bg-blue-600 lg:p-3 md:p-1 rounded-2xl">{cart.statusOrder.statusVN}</p>}
                            </>
                    }
                </div>
            </div>

        </>

    )
}