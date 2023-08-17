
import { Link } from "react-router-dom"
import { formatPrice } from "../../../utils/formatPrice"
import { useState } from "react";
import { toast } from "react-toastify";
import { orderProduct } from "../../../api/orderAPI"
import dateFormat from "dateformat";
import { CartSlice } from "../../../redux/Slice/CartSlice";
import { useDispatch } from "react-redux";


export default function CustomerInfo({ cart, isViewFunction }) {
    const dispatch = useDispatch()
    const [inputValues, setInputValues] = useState({
        email: '', firstName: '', lastName: '',
        phone: '', address: '',
    });

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const validateForm = () => {
        let check = true;
        const valueArr = ['email', 'firstName', 'lastName', 'address', 'phone']
        const valueLabel = ['Email', 'First Name', 'Last Name', 'Address', 'Phone']
        for (let i = 0; i < valueArr.length; i++) {
            if (!inputValues[valueArr[i]]) {
                toast.error('Please type ' + valueLabel[i])
                check = false;
                break
            }
        }
        return check
    }

    const handleOrderSuccess = () => {
        dispatch(CartSlice.actions.orderSuccess());
    };

    const handleAction = async () => {
        if (validateForm()) {
            orderProduct({
                email: inputValues.email,
                firstName: inputValues.firstName,
                lastName: inputValues.lastName,
                phone: inputValues.phone,
                address: inputValues.address,
                timeOrder: dateFormat(new Date(), "dd/mm/yyyy, h:MM TT"),
                cartItems: cart.cartItems,
                cartTotalAmount: cart.cartTotalAmount
            })
            setInputValues({
                email: '', firstName: '', lastName: '',
                phone: '', address: '',
            });
            handleOrderSuccess()
        }
    }
    return (
        <>
            <div className="w-1/2 border-2 bg-[#fff3d9] py-10 px-10">
                <h2 className="font-medium text-xl pb-5 text-center">Thông tin khách hàng</h2>
                <p className="font-normal text-lg">Email</p>
                {
                    isViewFunction === 'false' ?
                        <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="email" value={inputValues.email} onChange={handleOnChange} />
                        :
                        <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="email" value={cart.UserData.email} disabled />
                }
                <div className="flex flex-row gap-[10%]">
                    <div className="w-1/2">
                        <p className="font-normal text-lg">Họ</p>
                        {
                            isViewFunction === 'false' ?
                                <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="firstName" value={inputValues.firstName} onChange={handleOnChange} />
                                :
                                <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="firstName" value={cart.UserData.firstName} disabled />
                        }
                    </div>
                    <div className="w-1/2">
                        <p className="font-normal text-lg">Tên</p>
                        {
                            isViewFunction === 'false' ?
                                <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="lastName" value={inputValues.lastName} onChange={handleOnChange} />
                                :
                                <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="lastName" value={cart.UserData.lastName} disabled />
                        }
                    </div>
                </div>
                <p className="font-normal text-lg">Số điện thoại</p>
                {
                    isViewFunction === 'false' ?
                        <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="phone" value={inputValues.phone} onChange={handleOnChange} />
                        :
                        <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="phone" value={cart.UserData.phone} disabled />
                }
                <p className="font-normal text-lg">Địa chỉ</p>
                {
                    isViewFunction === 'false' ?
                        <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="address" value={inputValues.address} onChange={handleOnChange} />
                        :
                        <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="address" value={cart.UserData.address} disabled />
                }
            </div>
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
                            ( {cart.StatusData && cart.StatusData.valueVn && cart.statusPayment === 'SP2' ?
                                <span className="text-green-500 font-semibold">{cart.StatusData.valueVn}</span>
                                :
                                <span className="text-red-500 font-semibold">{cart.StatusData.valueVn}</span>
                            } )
                        </p>
                }
                {
                    isViewFunction === 'false' ?
                        <>
                            <button className="text-white w-full mt-14 mb-8 border-none bg-[#f68122] hover:scale-[0.98]" onClick={handleAction}>Đặt hàng</button>
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