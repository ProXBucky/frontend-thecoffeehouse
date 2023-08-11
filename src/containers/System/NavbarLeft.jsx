
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

export default function NavbarLeft() {

    return (

        <div className="relative h-full">
            <div className="pt-12">
                <ul className="text-black bg-[#f5f2f0] cursor-pointer hover:text-white">
                    <NavLink className="border-b-[#dcdcdc] border hover:bg-[#ec944a] overflow-hidden px-3 py-4 flex items-center text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-admin">
                        <i className="fa-solid fa-user-tie fa-xl mr-4"></i>
                        <label className="font-medium cursor-pointer text-base">Admins</label>
                    </NavLink>
                    <NavLink className="border-b-[#dcdcdc] border hover:bg-[#ec944a] overflow-hidden px-3 py-4 flex items-center text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-product">
                        <i className="fa-solid fa-blender fa-xl mr-4 ml-[-3px]"></i>
                        <label className="font-medium cursor-pointer text-base">Products</label>
                    </NavLink>
                    <NavLink className="border-b-[#dcdcdc] border hover:bg-[#ec944a] overflow-hidden px-3 py-4 flex items-center text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-store">
                        <i className="fa-solid fa-shop fa-xl mr-4 ml-[-5px]"></i>
                        <label className="font-medium cursor-pointer text-base">Stores</label>
                    </NavLink>
                    <NavLink className="border-b-[#dcdcdc] border hover:bg-[#ec944a] overflow-hidden px-3 py-4 flex items-center text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-order">
                        <i className="fa-solid fa-truck-fast fa-xl mr-4 ml-[-4px]"></i>
                        <label className="font-medium cursor-pointer text-base">Order</label>
                    </NavLink>
                    <NavLink className="border-b-[#dcdcdc] border hover:bg-[#ec944a] overflow-hidden px-3 py-4 flex items-center text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/history-order">
                        <i className="fa-solid fa-clock-rotate-left fa-xl mr-4 ml-[-2px]"></i>
                        <label className="font-medium cursor-pointer text-base">Histories</label>
                    </NavLink>
                </ul>

            </div>

        </div >
    )
}