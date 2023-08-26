import { useState } from "react";
import SystemRoute from "../../routes/SystemRoute";
import NavbarLeft from "./NavbarLeft";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { cookieSelector } from "../../redux/selector"
import axios from "axios";


export default function System() {
    const [roleUser, setRoleUser] = useState('')
    let cookieValue = useSelector(cookieSelector)
    let headers = { Authorization: `Bearer ${cookieValue}` }

    const authorSystem = () => {
        return axios.get(`${import.meta.env.VITE_BACKEND_PORT}/api/author`, { headers })
    }

    const authorNavbar = async () => {
        let res = await authorSystem()
        if (res && res.data && res.data.errCode === 0) {
            if (res.data.roleId === 'R1') {
                setRoleUser('R1')
                toast.success("Xin chào quản lý")
            }
            else if (res.data.roleId === 'R2') {
                setRoleUser('R2')
                toast.success("Xin chào quản trị viên")
            }
        } else {
            toast.error('Lỗi server')
        }
    }

    return (
        <>
            <div className="system-container flex text-black h-screen mt-9">
                <div className="px-2 py-3 h-full fixed duration-200 ease-linear scroll-smooth bg-white w-[60px] hover:w-[200px] border-r">
                    <NavbarLeft roleUser={roleUser} />
                </div>
                <div className="h-full duration-200 ease-linear scroll-smooth pb-10 w-full ml-[60px] bg-[#f5f2f0]" >
                    <SystemRoute authorNavbar={authorNavbar} />
                </div>
            </div >
        </>
    )
}