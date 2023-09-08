import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

export default function NavbarLeft() {

    return (

        <div className="relative h-full bg-white py-5 lg:px-0 md:px-5">
            <ul className="text-black lg:flex lg:flex-col md:flex md:justify-between">
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099] before:" activeStyle={{ color: "#f68122", fontWeight: '500', fontSize: "18px" }} to="/collections/all">
                    <label className="cursor-pointer">Tất cả <i className="fa-solid fa-layer-group"></i></label>
                </NavLink>
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099] before:" activeStyle={{ color: "#f68122", fontWeight: '500', fontSize: "18px" }} to="/collections/coffee">
                    <label className="cursor-pointer">Cà phê <i className="fa-solid fa-mug-hot"></i></label>
                </NavLink>
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099] before:" activeStyle={{ color: "#f68122", fontWeight: '500', fontSize: "18px" }} to="/collections/tea">
                    <label className="cursor-pointer">Trà xanh <i className="fa-brands fa-envira"></i></label>
                </NavLink>
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099] before:" activeStyle={{ color: "#f68122", fontWeight: '500', fontSize: "18px" }} to="/collections/frosty">
                    <label className="cursor-pointer">Đá xay <i className="fa-regular fa-snowflake"></i></label>
                </NavLink>
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099] before:" activeStyle={{ color: "#f68122", fontWeight: '500', fontSize: "18px" }} to="/collections/cakesnack">
                    <label className="cursor-pointer">Bánh ngọt và snack <i className="fa-solid fa-cookie-bite"></i></label>
                </NavLink>
            </ul>
        </div>
    )
}