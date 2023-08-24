import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserSlice } from "../../redux/Slice/UserSlice";
import { logoutUser } from "../../api/Auth"
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

export default function SystemHeader({ userInfo }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        let tmp = await logoutUser()
        if (tmp && tmp.errCode === 0) {
            Cookies.remove('accessToken')
            dispatch(UserSlice.actions.logOutUser())
            history.push('/')
            toast.success('Đã đăng xuất')
        }
    }

    return (
        <div className="w-full h-[60px] flex border fixed top-0 justify-between px-5 z-[47] bg-white">
            <div className="w-1/3 text-black flex items-center">
                {/* <i className="fa-solid fa-house-lock fa-xl cursor-pointer" onClick={backSystemRoute}></i> */}
                {/* <label className="ml-1">Trang chủ</label> */}
            </div>
            <div className='w-1/3 flex justify-center '>
                {/* <Link className='logo' to="/"> */}
                <img className="block w-[255px] h-[60px] object-cover" src="/src/assets/LogoImg/The-Coffee-House-Logo-PNG-2.png" alt="Logo" />
                {/* </Link> */}
            </div>
            <div className='flex h-full items-center justify-end text-black w-1/3'>
                <span className="text-md font-normal mr-2">Xin chào {userInfo}</span>
                {/* <label className="mx-2">Đăng xuất</label> */}
                <i className="fa-solid fa-right-from-bracket fa-lg text-black cursor-pointer" onClick={handleLogout}></i>
            </div>
        </div>
    )
}
