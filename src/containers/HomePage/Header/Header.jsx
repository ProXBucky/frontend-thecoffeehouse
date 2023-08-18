import './Header.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../redux/selector"



export default function Header() {
    const cart = useSelector(cartSelector);

    return (
        <div className="header-container">
            <Link className='logo' to="/">
                <img className="logo-image" src="/src/assets/LogoImg/The-Coffee-House-Logo-PNG-2.png" alt="Logo" />
            </Link>

            <div className="navbar text-sm">
                <div className="nav">
                    <div className="dropbtn"><Link to="/collections/all">Menu<i className="fa-solid fa-caret-down ml-1 fa-2xs"></i></Link></div>
                    <div className="dropdown-content">
                        <div className='nav'><Link to="/collections/coffee">Cà Phê</Link></div>
                        <div className='nav'><Link to="/collections/tea">Trà</Link></div>
                        <div className='nav'><Link to="/collections/frosty">Đá xay</Link></div>
                        <div className='nav'><Link to="/collections/cakesnack">Bánh ngọt</Link></div>
                    </div>
                </div>
                <div className='nav'><Link to="/stores/HCM">Cửa hàng</Link></div>
                <div className='nav'><Link to="/cloudfee">Cảm ứng CloudFee</Link></div>
                <div className='nav'><Link to="/recruit">Tuyển dụng</Link></div>
            </div>
            <div className='cart'>
                <div className='nav'>
                    <Link to="/login"><i className="fa-solid fa-user fa-xl text-black hover:text-[#f68122]"></i></Link>
                </div>
                <div className='nav relative'>
                    <Link to="/shopping-cart"><i className="fa-solid fa-cart-shopping fa-xl text-black hover:text-[#f68122]"></i></Link>
                    <span className='absolute left-5 top-[-10px] bg-[#f68122] rounded-full px-2 text-white'>{cart.cartTotalQuantity}</span>
                </div>
            </div>
        </div>
    )
}