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
        <div className="relative duration-200 ease-linear scroll-smooth h-full " style={{ width: `${widthNav}px` }}>
            <div className="button-close absolute right-3" onClick={handleToggleNavbar}>
                {
                    navIsOpen === true ? <i className="fa-solid fa-xmark fa-xl cursor-pointer "></i>
                        : <i className="fa-solid fa-angles-right fa-xl cursor-pointer "></i>
                }
            </div>
            <div className="pt-12">
                <ul className="text-black">
                    <NavLink className="navbar-list px-4 py-4 block text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-admin">
                        <i className="fa-solid fa-user-tie fa-xl mr-4"></i>
                        {navIsOpen && <p className="inline-block">Admin</p>}
                    </NavLink>
                    <NavLink className="navbar-list px-4 py-4 block text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-product">
                        <i className="fa-solid fa-database fa-xl mr-4"></i>
                        {navIsOpen && <p className="inline-block">Products</p>}
                    </NavLink>
                    <NavLink className="navbar-list px-4 py-4 block text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-store">
                        <i className="fa-solid fa-building fa-xl mr-4"></i>
                        {navIsOpen && <p className="inline-block">Stores</p>}
                    </NavLink>
                    <NavLink className="navbar-list px-4 py-4 block text-base rounded-md text-black hover:text-white" activeStyle={{ background: "#f68122", color: "white" }} to="/system/manage-blog">
                        <i className="fa-solid fa-book fa-xl mr-4"></i>
                        {navIsOpen && <p className="inline-block">Blogs</p>}
                    </NavLink>
                </ul>

            </div>

        </div >
    )
}