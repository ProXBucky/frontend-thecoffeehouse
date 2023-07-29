import { useSelector } from "react-redux";
import SystemRoute from "../../routes/SystemRoute";
import NavbarLeft from "./NavbarLeft";
import SystemHeader from '../../containers/System/SystemHeader';
import { userInfoSelector } from "../../redux/selector"
import { getAdminByEmail } from "../../api/adminAPI";
import { useEffect, useState } from "react";

export default function System() {
    const [widthNav, setWidthNav] = useState(50)
    const [marginLeft, setMarginLeft] = useState(50)
    const [navIsOpen, setNavIsOpen] = useState(false)

    const [adminFullName, setAdminName] = useState('')
    const userInfo = useSelector(userInfoSelector)


    useEffect(() => {
        fetchDataAdmin()
    }, [])


    const fetchDataAdmin = async () => {
        let respone = await getAdminByEmail(userInfo)
        if (respone && respone.errCode === 0) {
            let fullName = `${respone.data.firstName} ${respone.data.lastName}`
            setAdminName(fullName)
        }
    }


    const toggleNav = () => {
        if (widthNav === 50) {
            setWidthNav(250)
            setMarginLeft(250)
            setNavIsOpen(true)
        } else {
            setWidthNav(50)
            setMarginLeft(50)
            setNavIsOpen(false)
        }
    }


    return (
        <>
            <SystemHeader adminFullName={adminFullName} />
            <div className="system-container flex flex-row text-black h-screen mt-8">
                <div className=" px-2 h-full fixed bg-[#f5f2f0]">
                    <NavbarLeft widthNav={widthNav} toggleNav={toggleNav} navIsOpen={navIsOpen} />
                </div>
                <div className=" w-full duration-200 ease-linear scroll-smooth px-5 pb-10" style={{ marginLeft: `${marginLeft}px` }}>
                    <SystemRoute />
                </div>
            </div >
        </>
    )
}