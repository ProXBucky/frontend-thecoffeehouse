import "./NavbarLeft.scss"
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

export default function NavbarLeft() {

    return (

        <div className="relative h-full ">
            <div className="pt-12">
                <ul className="text-black">
                    <NavLink className="navbar-list overflow-hidden px-3 py-4 flex items-center text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-admin">
                        <i className="fa-solid fa-user-tie fa-xl mr-4"></i>
                        <label className="font-medium cursor-pointer text-base">Admin</label>
                    </NavLink>
                    <NavLink className="navbar-list overflow-hidden px-3 py-4 flex items-center text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-product">
                        <i className="fa-solid fa-database fa-xl mr-4"></i>
                        <label className="font-medium cursor-pointer text-base">Products</label>
                    </NavLink>
                    <NavLink className="navbar-list overflow-hidden px-3 py-4 flex items-center text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-store">
                        <i className="fa-solid fa-building fa-xl mr-4"></i>
                        <label className="font-medium cursor-pointer text-base">Stores</label>
                    </NavLink>
                    <NavLink className="navbar-list overflow-hidden px-3 py-4 flex items-center text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-blog">
                        <i className="fa-solid fa-book fa-xl mr-4"></i>
                        <label className="font-medium cursor-pointer text-base">Blogs</label>
                    </NavLink>
                </ul>

            </div>

        </div >
    )
}