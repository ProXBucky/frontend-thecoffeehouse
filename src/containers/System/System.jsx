import { useState, useEffect } from "react";
import SystemRoute from "../../routes/SystemRoute";
import NavbarLeft from "./NavbarLeft";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { cookieSelector } from "../../redux/selector"
import axios from "axios";
import NavbarLeftMobile from "./NavbarLeftMobile";

export default function System() {
    const [roleUser, setRoleUser] = useState('')
    let cookieValue = useSelector(cookieSelector)
    let headers = { Authorization: `Bearer ${cookieValue}` }

    const isHidden = useSelector((state) => state.app.isHiddenNavbar)
    const zIndexValue = isHidden ? "2" : "-2"
    // const zIndexAtt = !isHidden ? "1" : "-1"

    const authorSystem = () => {
        return axios.get(`${import.meta.env.VITE_BACKEND_PORT}/api/author`, { headers })
    }

    const authorNavbar = async () => {
        let res = await authorSystem()
        if (res && res.data && res.data.errCode === 0) {
            if (res.data.roleId === 'R1') {
                setRoleUser('R1')
            }
            else if (res.data.roleId === 'R2') {
                setRoleUser('R2')
            }
        } else {
            toast.error('Lỗi server')
        }
    }

    useEffect(() => {
        authorNavbar()
    }, [])

    return (
        <>
            <div className="flex md:flex-row sm:flex-col text-black h-full mt-9 overflow-x-hidden">
                <>
                    <div className="md:block sm:hidden px-2 md:py-3 md:h-full fixed duration-200 ease-linear scroll-smooth bg-white md:w-[60px] sm:w-full  border-r">
                        <NavbarLeft roleUser={roleUser} />
                    </div>
                    <div className="md:hidden sm:block px-2 fixed duration-200 ease-linear scroll-smooth bg-white" style={{ zIndex: zIndexValue }}>
                        <NavbarLeftMobile roleUser={roleUser} />
                    </div>
                </>
                <div className="h-screen duration-200 ease-linear scroll-smooth pb-10 w-full md:ml-[60px] sm:ml-0 bg-[#f5f2f0]" style={{ zIndex: 1 }}  >
                    <SystemRoute />
                    {/* authorNavbar={authorNavbar} */}
                </div>
            </div >
        </>
    )
}

// lg:hover:w-[200px]