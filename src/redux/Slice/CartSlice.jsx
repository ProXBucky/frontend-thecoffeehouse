import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("shopping-cart")
        ? JSON.parse(localStorage.getItem("shopping-cart"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
                };
                toast.success(`1 ${action.payload.name} đã thêm vào giỏ hàng`);
            } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
                toast.success(`${action.payload.name} đã được thêm vào giỏ hàng`);
            }
            localStorage.setItem("shopping-cart", JSON.stringify(state.cartItems));
        },


        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.error(`1 ${action.payload.name} đã xóa`);
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
                state.cartItems = nextCartItems;
                if (state.cartTotalQuantity === 1) {
                    state.cartTotalQuantity = 0
                }
                toast.error(`${action.payload.name} đã xóa khỏi giỏ hàng`);
            }
            localStorage.setItem("shopping-cart", JSON.stringify(state.cartItems));
        },


        removeFromCart(state, action) {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id
                    );
                    state.cartItems = nextCartItems;
                    if (nextCartItems.length === 0) {
                        state.cartTotalQuantity = 0
                    }
                    toast.error(`${action.payload.name} đã xóa khỏi giỏ hàng`);
                }
                localStorage.setItem("shopping-cart", JSON.stringify(state.cartItems));
                return state;
            });
        },


        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { originalPrice, cartQuantity } = cartItem;
                    const itemTotal = originalPrice * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },

        clearCart(state, action) {
            state.cartItems = [];
            state.cartTotalQuantity = 0
            localStorage.setItem("shopping-cart", JSON.stringify(state.cartItems));
            toast.error(`Giỏ hàng đã xóa`);
        },

        orderSuccess(state, action) {
            state.cartItems = [];
            state.cartTotalQuantity = 0
            localStorage.setItem("shopping-cart", JSON.stringify(state.cartItems));
            toast.success('Đặt hàng thành công, hãy nhớ để ý số điện thoại của bạn nhé')
        },
    },
});
