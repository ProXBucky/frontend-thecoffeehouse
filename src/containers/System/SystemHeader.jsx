import {
    BrowserRouter as Router,
    useHistory
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserSlice } from "../../redux/Slice/UserSlice";
import Cookies from 'js-cookie';
import { clearToken, clearUserInfo } from "../../redux/Slice/CookieSlice";
import { AppSlice } from '../../redux/Slice/AppSlice';

export default function SystemHeader({ userInfo }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const isHidden = useSelector((state) => state.app.isHiddenNavbar)

    const toggleNavbarMobile = () => {
        dispatch(AppSlice.actions.toggleNavbar())
    }

    const handleLogout = async () => {
        Cookies.remove('accessToken')
        Cookies.remove('userEmail')
        dispatch(clearToken());
        dispatch(clearUserInfo());
        history.push('/')
    }

    // dispatch(UserSlice.actions.logOutUser())
    sessionStorage.removeItem('userEmail')

    return (
        <div className="w-full h-[60px] flex border fixed top-0 justify-between px-5 z-[47] bg-white">
            <div className="md:w-1/3 sm:w-1/6 md:invisible sm:visible text-black flex items-center">
                {
                    isHidden ?
                        <i className="fa-solid fa-xmark fa-xl cursor-pointer" onClick={toggleNavbarMobile}></i>
                        :
                        <i className="fa-solid fa-bars fa-xl cursor-pointer" onClick={toggleNavbarMobile} ></i>
                }
            </div>
            <div className='md:w-1/3 sm:w-2/3 flex justify-center'>
                <img className="block md:w-[255px] sm:w-full h-[60px] object-cover" src="https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265911/image_app/The-Coffee-House-Logo-PNG-2_kdod3z.png" alt="Logo" />
            </div>
            <div className='flex h-full items-center justify-end text-black md:w-1/3 sm:w-1/6'>
                <span className="font-normal mr-2 lg:text-base md:text-sm lg:block md:block sm:hidden">Xin chào {userInfo}</span>
                <i className="fa-solid fa-right-from-bracket fa-lg text-black cursor-pointer hover:text-[#f68122]" onClick={handleLogout}></i>
            </div>
        </div>
    )
}

