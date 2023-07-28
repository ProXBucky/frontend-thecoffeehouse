import "./NavbarLeft.scss"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

export default function NavbarLeft({ widthNav, toggleNav, navIsOpen }) {

    const handleToggleNavbar = () => {
        toggleNav()
    }

    return (

        <div className="relative duration-200 ease-linear scroll-smooth overflow-hidden h-full py-10" style={{ width: `${widthNav}px` }}>
            <div className="button-close absolute right-3" onClick={handleToggleNavbar}>
                {
                    navIsOpen === true ? <i className="fa-solid fa-xmark fa-xl cursor-pointer "></i>
                        : <i className="fa-solid fa-angles-right fa-xl cursor-pointer "></i>
                }
            </div>
            <div className="pt-12">
                <ul className="text-black">
                    <NavLink className="navbar-list overflow-hidden px-4 py-4 block text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-admin">
                        <i className="fa-solid fa-user-tie fa-xl mr-4"></i>
                        {navIsOpen && <label>Admin</label>}
                    </NavLink>
                    <NavLink className="navbar-list overflow-hidden px-4 py-4 block text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-product">
                        <i className="fa-solid fa-database fa-xl mr-4"></i>
                        {navIsOpen && <label>Products</label>}
                    </NavLink>
                    <NavLink className="navbar-list overflow-hidden px-4 py-4 block text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-store">
                        <i className="fa-solid fa-building fa-xl mr-4"></i>
                        {navIsOpen && <label>Stores</label>}
                    </NavLink>
                    <NavLink className="navbar-list overflow-hidden px-4 py-4 block text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-blog">
                        <i className="fa-solid fa-book fa-xl mr-4"></i>
                        {navIsOpen && <label>Blogs</label>}
                    </NavLink>
                </ul>

            </div>

        </div >
    )
}