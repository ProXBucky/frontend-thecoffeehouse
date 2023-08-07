import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

export default function NavbarLeft() {

    return (
        <div className="relative h-full bg-white px-5">
            <p className="text-lg mb-3 font-medium">Theo khu vực</p>
            <ul className="text-black">
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099]" activeStyle={{ color: "#f68122", fontWeight: '500' }} to="/stores/HCM">
                    <label className="cursor-pointer">TP Hồ Chí Minh</label>
                </NavLink>
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099]" activeStyle={{ color: "#f68122", fontWeight: '500' }} to="/stores/HN">
                    <label className="cursor-pointer">Hà Nội</label>
                </NavLink>
                <NavLink className="flex mb-2 font-normal text-[#00000099] hover:text-[#00000099]" activeStyle={{ color: "#f68122", fontWeight: '500' }} to="/stores/DN">
                    <label className="cursor-pointer">Đà Nẵng</label>
                </NavLink>
            </ul>
        </div >
    )
}