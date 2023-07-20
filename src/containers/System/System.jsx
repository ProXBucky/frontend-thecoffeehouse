import "./System.scss"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SystemRoute from "../../routes/SystemRoute";

export default function System() {

    return (
        <>
            <div className="system-container flex flex-row text-black h-screen mt-8">
                <div className="navbar-container w-1/6 p-6">
                    <ul>
                        <Link className="navbar-list px-7 py-4 block text-base rounded-md text-black" to="/system/manage-admin">
                            <i className="fa-solid fa-user-tie fa-xl mr-2"></i>
                            Admin
                        </Link>
                        <Link className="navbar-list px-7 py-4 block text-base rounded-md text-black" to="/system/manage-product">
                            <i className="fa-solid fa-database fa-xl mr-2"></i>
                            Products
                        </Link>
                        <Link className="navbar-list px-7 py-4 block text-base rounded-md text-black" to="/system/manage-store">
                            <i className="fa-solid fa-store fa-xl mr-2"></i>
                            Stores
                        </Link>
                        <Link className="navbar-list px-7 py-4 block text-base rounded-md text-black" to="/system/manage-blog">
                            <i className="fa-solid fa-book fa-xl mr-2"></i>
                            Blogs
                        </Link>
                    </ul>
                </div>
                <div className="body-container w-5/6">
                    <SystemRoute />
                </div>
            </div>
        </>
    )
}