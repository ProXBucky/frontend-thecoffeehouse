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
            <div className='navbar'>
                <div className='nav'><Link to="/coffee">Cà Phê</Link></div>
                <div className='nav'><Link to="/tea">Trà</Link></div>
                <div className='nav'><Link to="/froster">Đá xay</Link></div>
                <div className='nav'><Link to="/store">Cửa hàng</Link></div>
                <div className='nav'><Link to="/login">Dành cho quản trị viên</Link></div>
            </div>
            <div className='cart'>
                <div className='nav'>
                    <Link to="/shopping-cart">Giỏ hàng <i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </div>
        </div>
    )
}