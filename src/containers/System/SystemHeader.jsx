import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserSlice } from "../../redux/Slice/UserSlice";
import { userInfoSelector } from "../../redux/selector"

export default function SystemHeader() {
    const history = useHistory()
    const dispatch = useDispatch()
    const adminName = useSelector(userInfoSelector)
    const adminFullName = `${adminName.firstName} ${adminName.lastName}`
    const handleLogout = () => {
        dispatch(UserSlice.actions.logOutUser())
        history.push('/')
    }
    const backSystemRoute = () => {
        history.push('/system')
    }

    return (
        <div className="w-full h-[60px] flex border fixed top-0 justify-between px-5 z-50 bg-white">
            <div className="w-1/6 text-black flex items-center ">
                <i class="fa-solid fa-arrow-rotate-left fa-xl cursor-pointer" onClick={backSystemRoute}></i>
            </div>
            <div className='w-2/3 flex justify-center '>
                <Link className='logo' to="/">
                    <img className="block w-[255px] h-[60px] object-cover" src="/src/assets/LogoImg/The-Coffee-House-Logo-PNG-2.png" alt="Logo" />
                </Link>
            </div>
            <div className='flex h-full items-center justify-end text-black w-1/6'>
                <label className="mr-3">Hello {adminFullName} </label>
                <i className="fa-solid fa-right-from-bracket fa-lg text-black cursor-pointer" onClick={handleLogout}></i>
            </div>
        </div>
    )
}