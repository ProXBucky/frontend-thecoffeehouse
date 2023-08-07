import './Header.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Header() {
    return (
        <div className="header-container">
            <Link className='logo' to="/">
                <img className="logo-image" src="/src/assets/LogoImg/The-Coffee-House-Logo-PNG-2.png" alt="Logo" />
            </Link>
            <div className='navbar '>
                <div className='nav'><Link to="/collections/all">Menu</Link></div>
                <div className='nav'><Link to="/collections/coffee">Cà Phê</Link></div>
                <div className='nav'><Link to="/collections/tea">Trà</Link></div>
                <div className='nav'><Link to="/collections/frosty">Đá xay</Link></div>
                <div className='nav'><Link to="/collections/cakesnack">Bánh ngọt</Link></div>
                <div className='nav'><Link to="/stores/HCM">Cửa hàng</Link></div>
                <div className='nav'><Link to="/login">Quản trị viên</Link></div>
            </div>
            <div className='cart'>
                <div className='nav'>
                    <Link to="/shopping-cart"><i className="fa-solid fa-cart-shopping pr-2"></i>Giỏ hàng </Link>
                </div>
            </div>
        </div>
    )
}