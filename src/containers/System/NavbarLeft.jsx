
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

export default function NavbarLeft({ roleUser }) {
    return (

        <div className="relative h-full">
            <div className="pt-12">
                <ul className="text-black cursor-pointer hover:text-white">
                    {
                        roleUser === 'R1' &&
                        <>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden px-3 py-4 flex items-center text-base rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/dashboard">
                                <i className="fa-solid fa-chart-line fa-xl mr-4"></i>
                                <label className="font-medium cursor-pointer text-base">Trang_chủ</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden px-3 py-4 flex items-center text-base rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-admin">
                                <i className="fa-solid fa-user-tie fa-xl mr-4"></i>
                                <label className="font-medium cursor-pointer text-base">Nhân_viên</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden px-3 py-4 flex items-center text-base rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-product">
                                <i className="fa-solid fa-mug-saucer fa-xl mr-4 ml-[-4px]"></i>
                                <label className="font-medium cursor-pointer text-base">Sản_phẩm</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden px-3 py-4 flex items-center text-base rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-store">
                                <i className="fa-solid fa-shop fa-xl mr-4 ml-[-5px]"></i>
                                <label className="font-medium cursor-pointer text-base">Cửa_hàng</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden px-3 py-4 flex items-center text-base rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-order">
                                <i className="fa-solid fa-truck fa-xl mr-4 ml-[-4px]"></i>
                                <label className="font-medium cursor-pointer text-base">Đơn_hàng</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden px-3 py-4 flex items-center text-base rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/history-order">
                                <i className="fa-solid fa-clock-rotate-left fa-xl mr-4 ml-[-2px]"></i>
                                <label className="font-medium cursor-pointer text-base">Lịch_sử</label>
                            </NavLink>
                        </>
                    }

                    {
                        roleUser === 'R2' &&
                        <>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden px-3 py-4 flex items-center text-base rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-product">
                                <i className="fa-solid fa-mug-saucer fa-xl mr-4 ml-[-4px]"></i>
                                <label className="font-medium cursor-pointer text-base">Sản_phẩm</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden px-3 py-4 flex items-center text-base rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-store">
                                <i className="fa-solid fa-shop fa-xl mr-4 ml-[-5px]"></i>
                                <label className="font-medium cursor-pointer text-base">Cửa_hàng</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden px-3 py-4 flex items-center text-base rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-order">
                                <i className="fa-solid fa-truck fa-xl mr-4 ml-[-4px]"></i>
                                <label className="font-medium cursor-pointer text-base">Đơn_hàng</label>
                            </NavLink>
                            <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden px-3 py-4 flex items-center text-base rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/history-order">
                                <i className="fa-solid fa-clock-rotate-left fa-xl mr-4 ml-[-2px]"></i>
                                <label className="font-medium cursor-pointer text-base">Lịch_sử</label>
                            </NavLink>
                        </>
                    }
                </ul>

            </div>

        </div >
    )
}