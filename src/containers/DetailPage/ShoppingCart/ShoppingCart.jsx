import { Link } from "react-router-dom"
import { cartSelector } from "../../../redux/selector"
import OrderList from "./OrderList";
import CustomerInfo from "./CustomerInfo";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import NavbarMobile from "../../HomePage/NavbarMobile";

export default function ShoppingCart() {
    const cart = useSelector(cartSelector);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavbarMobile />
            <div className="text-black md:pt-16 sm:pt-5 lg:px-[160px] md:px-[20px] sm:px-[10px]">
                {
                    cart.cartItems.length === 0 ?
                        <div className="text-center">
                            <p className="md:text-3xl sm:text-2xl font-medium mt-20 mb-10 text-[#f68122]">Giỏ hàng trống</p>
                            <Link to="/collections/all">
                                <span className="md:text-xl sm:text-lg font-normal"><i className="fa-solid fa-arrow-left fa-lg"></i> Tìm sản phẩm</span>
                            </Link>
                        </div>
                        :
                        <div className="flex flex-col gap-10">
                            <h2 className="font-medium md:text-3xl sm:text-2xl text-[#f68122] md:mb-10 sm:mb-2">Giỏ hàng</h2>
                            <div className="w-full">
                                <OrderList cart={cart} isViewFunction={'false'} />
                            </div>

                            <div className="w-full md:pt-10 sm:pt-4 pb-28" >
                                <CustomerInfo cart={cart} isViewFunction={'false'} />
                            </div >
                        </div >
                }
            </div >
        </>

    )
}

