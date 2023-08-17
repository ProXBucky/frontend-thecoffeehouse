import { formatPrice } from "../../../utils/formatPrice"
import { decodeBase64Func } from "../../../utils/base64"
import { CartSlice } from "../../../redux/Slice/CartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function OrderList({ cart, isViewFunction }) {
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


    return (
        <>
            <table className="w-full px-3 overflow-hidden border-2">
                <thead className="h-14 bg-[#f68122] text-white">
                    <tr>
                        <th>Sản phẩm</th>
                        <th>Giá tiền</th>
                        <th>Số lượng</th>
                        <th>Tổng cộng</th>
                        {
                            isViewFunction === 'false' && <th>Xóa</th>
                        }
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        isViewFunction === 'false' ?
                            (
                                cart.cartItems &&
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
                                        {
                                            isViewFunction === 'false' &&
                                            <td>
                                                <i className="fa-solid fa-trash-can fa-xl cursor-pointer text-red-500 hover:text-red-400 hover:scale-95" onClick={() => handleRemoveFromCart(cartItem)}></i>
                                            </td>
                                        }
                                    </tr>
                                ))
                            )
                            :
                            (
                                cart.OrderData && cart.OrderData.map((product) => (
                                    <tr key={product.id} className="border-b-2">
                                        <td className="w-[200px] px-10 py-5">
                                            <img src={decodeBase64Func(product.ProductData.image)} alt={product.ProductData.name} />
                                            <p>{product.ProductData.name}</p>
                                        </td>
                                        <td>{formatPrice(product.ProductData.originalPrice)} VND</td>
                                        <td>
                                            <span className="text-lg">{product.quantity}</span>
                                        </td>
                                        <td>
                                            {formatPrice(product.ProductData.originalPrice * product.quantity)} VND
                                        </td>
                                    </tr>
                                ))
                            )
                    }
                </tbody>
            </table >
            {
                isViewFunction === 'false' &&
                <div className="mt-5">
                    <button className="text-white border-none bg-[#f68122] hover:scale-95" onClick={() => handleClearCart()}>Xóa tất cả</button>
                </div>
            }
        </>
    )
}