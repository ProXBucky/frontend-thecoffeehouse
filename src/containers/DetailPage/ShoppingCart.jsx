import { Link } from "react-router-dom"
import { cartSelector } from "../../redux/selector"
import { useDispatch, useSelector } from "react-redux";
import { CartSlice } from "../../redux/Slice/CartSlice";
import { useEffect, useState } from "react";
import { decodeBase64Func } from "../../utils/base64";
import { formatPrice } from "../../utils/formatPrice";
import { toast } from "react-toastify";
import { orderProduct } from "../../api/appAPI"
import dateFormat from "dateformat";


export default function ShoppingCart() {
    const cart = useSelector(cartSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CartSlice.actions.getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(CartSlice.actions.addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(CartSlice.actions.decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(CartSlice.actions.removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(CartSlice.actions.clearCart());
    };
    const handleOrderSuccess = () => {
        dispatch(CartSlice.actions.orderSuccess());
    };

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
            <div className="text-black mt-16 px-[160px]">
                <h2 className="font-medium text-3xl text-[#f68122] mb-10">Giỏ hàng</h2>
                {
                    cart.cartItems.length === 0 ?
                        <div className="text-center">
                            <p className="text-2xl font-medium mt-20 mb-10">Giỏ hàng trống</p>
                            <Link to="/collections/all">
                                <span className="text-xl font-normal"><i className="fa-solid fa-arrow-left fa-lg"></i> Tìm sản phẩm</span>
                            </Link>

                        </div>
                        :
                        <div className="flex flex-col gap-10">
                            <div className="w-full">
                                <table className="w-full px-3 overflow-hidden border-2">
                                    <thead className="h-14 bg-[#f68122] text-white">
                                        <tr>
                                            <th>Sản phẩm</th>
                                            <th>Giá tiền</th>
                                            <th>Số lượng</th>
                                            <th>Tổng cộng</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {cart.cartItems &&
                                            cart.cartItems.map((cartItem) => (
                                                <tr key={cartItem.id} className="border-b-2">
                                                    <td className="w-[200px] px-10 py-5">
                                                        <img src={decodeBase64Func(cartItem.image)} alt={cartItem.name} />
                                                        <p>{cartItem.name}</p>
                                                    </td>
                                                    <td>{formatPrice(cartItem.originalPrice)} VND</td>
                                                    <td>
                                                        <div className="border-2 py-2">
                                                            <i className="fa-solid fa-minus cursor-pointer fa-lg mr-2" onClick={() => handleDecreaseCart(cartItem)}></i>
                                                            <span className="text-lg">{cartItem.cartQuantity}</span>
                                                            <i className="fa-solid fa-plus cursor-pointer fa-lg ml-2" onClick={() => handleAddToCart(cartItem)}></i>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {formatPrice(cartItem.originalPrice * cartItem.cartQuantity)} VND
                                                    </td>
                                                    <td>
                                                        <i className="fa-solid fa-trash-can fa-xl cursor-pointer text-red-500 hover:text-red-400 hover:scale-95" onClick={() => handleRemoveFromCart(cartItem)}></i>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table >
                                <div className="mt-5">
                                    <button className="text-white border-none bg-[#f68122] hover:scale-95" onClick={() => handleClearCart()}>Xóa tất cả</button>
                                </div>
                            </div>

                            <div className="w-full flex flex-row pt-10 pb-28" >
                                <div className="w-1/2 border-2 bg-[#fff3d9] py-10 px-10">
                                    <h2 className="font-medium text-xl pb-5 text-center">Thông tin khách hàng</h2>
                                    <p className="font-normal text-lg">Email</p>
                                    <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="email" value={inputValues.email} onChange={handleOnChange} />
                                    <div className="flex flex-row gap-[10%]">
                                        <div className="w-1/2">
                                            <p className="font-normal text-lg">Họ</p>
                                            <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="firstName" value={inputValues.firstName} onChange={handleOnChange} />
                                        </div>
                                        <div className="w-1/2">
                                            <p className="font-normal text-lg">Tên</p>
                                            <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="lastName" value={inputValues.lastName} onChange={handleOnChange} />
                                        </div>
                                    </div>
                                    <p className="font-normal text-lg">Số điện thoại</p>
                                    <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="phone" value={inputValues.phone} onChange={handleOnChange} />
                                    <p className="font-normal text-lg">Địa chỉ</p>
                                    <input type="text" className="bg-white border-2 py-1 px-2 w-full" name="address" value={inputValues.address} onChange={handleOnChange} />
                                </div>
                                <div className="w-1/2 pl-20">
                                    <span className="font-medium text-2xl">Tổng sản phẩm:</span>
                                    <span className="font-medium text-2xl ml-4">{cart.cartTotalQuantity} sản phẩm</span><br></br>
                                    <span className="font-medium text-2xl">Tổng hóa đơn:</span>
                                    <span className="font-medium text-2xl ml-4">{formatPrice(cart.cartTotalAmount)} VND</span>
                                    <button className="text-white w-full mt-14 mb-8 border-none bg-[#f68122] hover:scale-[0.98]" onClick={handleAction}>Đặt hàng</button>
                                    <Link to="/collections/all"><i className="fa-solid fa-arrow-left fa-lg"></i> Mua sản phẩm khác</Link>
                                </div>
                            </div >

                        </div >
                }
            </div >
        </>

    )
}

