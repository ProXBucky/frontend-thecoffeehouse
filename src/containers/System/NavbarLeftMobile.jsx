// import './Header.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppSlice } from '../../redux/Slice/AppSlice';


export default function NavbarLeftMobile({ roleUser }) {
    const isHidden = useSelector((state) => state.app.isHiddenNavbar)
    const marginValue = isHidden ? "-10px" : "-100%"
    // const zIndexAtt = isHidden ? "2" : "-1"
    let dispatch = useDispatch()

    const toggleNavbar = () => {
        dispatch(AppSlice.actions.toggleNavbar())
    }

    // style={{ zIndex: zIndexAtt }}
    // , zIndex: zIndexAtt

    return (
        <>
            <div className="fixed h-[100vh] w-full duration-200 ease-linear text-black" >
                <div className="h-[100vh] w-full bg-white duration-200 ease-linear py-5 px-3" style={{ marginLeft: marginValue }}>
                    <ul className="text-black cursor-pointer hover:text-white">
                        {
                            roleUser === 'R1' &&
                            <>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/dashboard">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-chart-line fa-xl mr-4"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Trang_chủ</label>
                                    </div>
                                </NavLink>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-admin">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-user-tie fa-xl mr-4"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Nhân_viên</label>
                                    </div>
                                </NavLink>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-product">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-mug-saucer fa-xl mr-4 ml-[-4px]"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Sản_phẩm</label>
                                    </div>
                                </NavLink>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-store">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-shop fa-xl mr-4 ml-[-5px]"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Cửa_hàng</label>
                                    </div>
                                </NavLink>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-order">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-truck fa-xl mr-4 ml-[-4px]"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Đơn_hàng</label>
                                    </div>
                                </NavLink>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/history-order">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-clock-rotate-left fa-xl mr-4 ml-[-2px]"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Lịch_sử</label>
                                    </div>
                                </NavLink>
                            </>
                        }
                        {
                            roleUser === 'R2' &&
                            <>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/dashboard">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-chart-line fa-xl mr-4"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Trang_chủ</label>
                                    </div>
                                </NavLink>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-product">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-mug-saucer fa-xl mr-4 ml-[-4px]"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Sản_phẩm</label>
                                    </div>
                                </NavLink>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-store">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-shop fa-xl mr-4 ml-[-5px]"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Cửa_hàng</label>
                                    </div>
                                </NavLink>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-order">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-truck fa-xl mr-4 ml-[-4px]"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Đơn_hàng</label>
                                    </div>
                                </NavLink>
                                <NavLink className="border-b-2 mt-1 hover:bg-[#f68122] overflow-hidden md:px-3 md:py-4 sm:px-3 sm:py-2 flex items-center xl:text-base lg:text-sm rounded-2xl text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/history-order">
                                    <div onClick={toggleNavbar} className="w-full">
                                        <i className="fa-solid fa-clock-rotate-left fa-xl mr-4 ml-[-2px]"></i>
                                        <label className="font-medium cursor-pointer xl:text-base lg:text-sm">Lịch_sử</label>
                                    </div>
                                </NavLink>
                            </>
                        }
                    </ul>

                </div>

            </div >
        </>
    )
}