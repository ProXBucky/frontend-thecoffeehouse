import { Link } from "react-router-dom"
import { cartSelector } from "../../../redux/selector"
import OrderList from "./OrderList";
import CustomerInfo from "./CustomerInfo";
import { useEffect } from "react";
import { useSelector } from "react-redux"

export default function ShoppingCart() {
    const cart = useSelector(cartSelector);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="text-black mt-16 px-[160px]">
                {
                    cart.cartItems.length === 0 ?
                        <div className="text-center">
                            <p className="text-3xl font-medium mt-20 mb-10 text-[#f68122]">Giỏ hàng trống</p>
                            <Link to="/collections/all">
                                <span className="text-xl font-normal"><i className="fa-solid fa-arrow-left fa-lg"></i> Tìm sản phẩm</span>
                            </Link>
                        </div>
                        :
                        <div className="flex flex-col gap-10">
                            <h2 className="font-medium text-3xl text-[#f68122] mb-10">Giỏ hàng</h2>
                            <div className="w-full">
                                <OrderList cart={cart} isViewFunction={'false'} />
                            </div>

                            <div className="w-full flex flex-row pt-10 pb-28" >
                                <CustomerInfo cart={cart} isViewFunction={'false'} />
                            </div >
                        </div >
                }
            </div >
        </>

    )
}

