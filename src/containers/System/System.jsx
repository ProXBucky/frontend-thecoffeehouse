import { useSelector } from "react-redux";
import SystemRoute from "../../routes/SystemRoute";
import NavbarLeft from "./NavbarLeft";
import SystemHeader from '../../containers/System/SystemHeader';
import { userInfoSelector } from "../../redux/selector"
import { getAdminByEmail } from "../../api/adminAPI";
import { useEffect, useState } from "react";

export default function System() {
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

    return (
        <>
            <SystemHeader adminFullName={adminFullName} />
            <div className="system-container flex text-black h-screen mt-8">
                <div className="px-2 py-3 h-full fixed duration-200 ease-linear scroll-smooth bg-[#f5f2f0] w-[60px] hover:w-[200px] ">
                    <NavbarLeft />
                </div>
                <div className="h-full duration-200 ease-linear scroll-smooth px-5 pb-10 w-full ml-[60px]" >
                    <SystemRoute />
                </div>
            </div >
        </>
    )
}