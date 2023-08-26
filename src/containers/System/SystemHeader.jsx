import {
    BrowserRouter as Router,
    useHistory
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserSlice } from "../../redux/Slice/UserSlice";
import Cookies from 'js-cookie';
import { clearToken } from "../../redux/Slice/CookieSlice";

export default function SystemHeader({ userInfo }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        Cookies.set('accessToken', '');
        dispatch(clearToken());
        dispatch(UserSlice.actions.logOutUser())
        history.push('/')
    }


    return (
        <div className="w-full h-[60px] flex border fixed top-0 justify-between px-5 z-[47] bg-white">
            <div className="w-1/3 text-black flex items-center">
            </div>
            <div className='w-1/3 flex justify-center '>
                <img className="block w-[255px] h-[60px] object-cover" src="/src/assets/LogoImg/The-Coffee-House-Logo-PNG-2.png" alt="Logo" />
                {/* </Link> */}
            </div>
            <div className='flex h-full items-center justify-end text-black w-1/3'>
                <span className="text-md font-normal mr-2">Xin chào {userInfo}</span>
                <i className="fa-solid fa-right-from-bracket fa-lg text-black cursor-pointer hover:text-[#f68122]" onClick={handleLogout}></i>
            </div>
        </div>
    )
}

