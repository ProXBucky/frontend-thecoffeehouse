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
                <thead className="md:h-14 sm:h-10 bg-[#f68122] text-white">
                    <tr className="md:text-lg sm:text-xs">
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
                                    <tr key={cartItem.id} className="border-b-2 md:text-base sm:text-xs">
                                        <td className="md:w-[200px] sm:w-[75px] md:px-10 md:py-5 sm:px-1 sm:py-2">
                                            <img src={(cartItem.image)} alt={cartItem.name} />
                                            <p>{cartItem.name}</p>
                                        </td>
                                        <td>{formatPrice(cartItem.originalPrice)} VND</td>
                                        <td>
                                            <div className="md:border-2 sm:border-none py-2 flex justify-center md:flex-row sm:flex-col-reverse sm:gap-2 items-center">
                                                <i className="fa-solid fa-minus cursor-pointer fa-lg md:mr-2 sm:mr-0" onClick={() => handleDecreaseCart(cartItem)}></i>
                                                <span className="md:text-lg sm:text-sm">{cartItem.cartQuantity}</span>
                                                <i className="fa-solid fa-plus cursor-pointer fa-lg md:ml-2 sm:mr-0" onClick={() => handleAddToCart(cartItem)}></i>
                                            </div>
                                        </td>
                                        <td>
                                            {formatPrice(cartItem.originalPrice * cartItem.cartQuantity)} VND
                                        </td>
                                        {
                                            isViewFunction === 'false' &&
                                            <td className="md:px-2 sm:px-1">
                                                <i className="fa-solid fa-trash-can fa-xl cursor-pointer text-red-500 hover:text-red-400 hover:scale-95" onClick={() => handleRemoveFromCart(cartItem)}></i>
                                            </td>
                                        }
                                    </tr>
                                ))
                            )
                            :
                            (
                                cart.OrderData && cart.OrderData.map((product) => (
                                    <tr key={product.id} className="border-b-2 md:text-base sm:text-xs">
                                        <td className="md:w-[200px] sm:w-[75px] md:px-10 sm:px-3 py-5">
                                            <img src={product.ProductData ? (product.ProductData.image) : "Dữ liệu đã bị xóa"} alt={product.ProductData ? product.ProductData.name : "Dữ liệu đã bị xóa"} />
                                            <p>{product.ProductData ? product.ProductData.name : "Dữ liệu đã bị xóa"}</p>
                                        </td>
                                        <td>{product.ProductData ? formatPrice(product.ProductData.originalPrice) : "Dữ liệu đã bị xóa"} VND</td>
                                        <td>
                                            <span className="md:text-lg sm:text-base">{product.quantity}</span>
                                        </td>
                                        <td>
                                            {product.ProductData ? formatPrice(product.ProductData.originalPrice * product.quantity) : "Dữ liệu đã bị xóa"} VND
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
                    <button className="text-white md:text-base sm:text-xs border-none bg-[#f68122] hover:scale-95" onClick={() => handleClearCart()}>Xóa tất cả</button>
                </div>
            }
        </>
    )
}