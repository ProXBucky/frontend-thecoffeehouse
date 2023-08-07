import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

export default function NavbarLeft() {

    return (

        <div className="relative h-full bg-white p-5">
            <ul className="text-black">
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099] before:" activeStyle={{ color: "#f68122", fontWeight: '500', fontSize: "18px" }} to="/collections/all">
                    <label className="cursor-pointer">Tất cả</label>
                </NavLink>
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099] before:" activeStyle={{ color: "#f68122", fontWeight: '500', fontSize: "18px" }} to="/collections/coffee">
                    <label className="cursor-pointer">Cà phê</label>
                </NavLink>
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099] before:" activeStyle={{ color: "#f68122", fontWeight: '500', fontSize: "18px" }} to="/collections/tea">
                    <label className="cursor-pointer">Trà xanh</label>
                </NavLink>
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099] before:" activeStyle={{ color: "#f68122", fontWeight: '500', fontSize: "18px" }} to="/collections/frosty">
                    <label className="cursor-pointer">Đá xay</label>
                </NavLink>
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099] before:" activeStyle={{ color: "#f68122", fontWeight: '500', fontSize: "18px" }} to="/collections/cakesnack">
                    <label className="cursor-pointer">Bánh ngọt và snack</label>
                </NavLink>
            </ul>
        </div>
    )
}