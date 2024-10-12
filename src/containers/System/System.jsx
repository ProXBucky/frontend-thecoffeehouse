import { useState, useEffect } from "react";
import SystemRoute from "../../routes/SystemRoute";
import NavbarLeft from "./NavbarLeft";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { cookieSelector } from "../../redux/selector"
import NavbarLeftMobile from "./NavbarLeftMobile";
import { authorSystem } from "../../api/adminAPI";

export default function System() {
    const [roleUser, setRoleUser] = useState('')
    let cookieValue = useSelector(cookieSelector)
    const isHidden = useSelector((state) => state.app.isHiddenNavbar)
    const zIndexValue = isHidden ? "2" : "-2"


    const authorNavbar = async () => {
        try {
            let res = await authorSystem(cookieValue)
            if (res.status === 200) {
                if (res.data === "ROLE_ADMIN") {
                    setRoleUser('R1')
                }
                else if (res.data === "ROLE_STAFF") {
                    setRoleUser('R2')
                }
            }
        } catch (error) {
            if (error.response) {
                toast.error('Lỗi hệ thống');
            } else {
                toast.error('Lỗi kết nối hoặc không có phản hồi từ server');
            }
        } finally {
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