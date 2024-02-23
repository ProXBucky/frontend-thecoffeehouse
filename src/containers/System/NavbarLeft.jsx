// import './Header.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";



export default function NavbarLeft({ roleUser }) {
    return (

        <div className="relative h-full">
            <div className="md:pt-12 sm:pt-0">
                <ul className="text-black cursor-pointer hover:text-white">
                    {
                        roleUser === 'R1' &&
                        <>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/dashboard">
                                <i className="fa-solid fa-chart-line fa-xl mr-4"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Trang_chủ</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-admin">
                                <i className="fa-solid fa-user-tie fa-xl mr-4"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Nhân_viên</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-product">
                                <i className="fa-solid fa-mug-saucer fa-xl mr-4 ml-[-4px]"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Sản_phẩm</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-store">
                                <i className="fa-solid fa-shop fa-xl mr-4 ml-[-5px]"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Cửa_hàng</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-order">
                                <i className="fa-solid fa-truck fa-xl mr-4 ml-[-4px]"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Đơn_hàng</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/history-order">
                                <i className="fa-solid fa-clock-rotate-left fa-xl mr-4 ml-[-2px]"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Lịch_sử</label>
                            </NavLink>
                        </>
                    }

                    {
                        roleUser === 'R2' &&
                        <>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/dashboard">
                                <i className="fa-solid fa-chart-line fa-xl mr-4"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Trang_chủ</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-product">
                                <i className="fa-solid fa-mug-saucer fa-xl mr-4 ml-[-4px]"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Sản_phẩm</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-store">
                                <i className="fa-solid fa-shop fa-xl mr-4 ml-[-5px]"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Cửa_hàng</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-order">
                                <i className="fa-solid fa-truck fa-xl mr-4 ml-[-4px]"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Đơn_hàng</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-2 sm:py-1 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/history-order">
                                <i className="fa-solid fa-clock-rotate-left fa-xl mr-4 ml-[-2px]"></i>
                                <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Lịch_sử</label>
                            </NavLink>
                        </>
                    }
                </ul>

            </div>

        </div >
    )
}