// import './Header.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppSlice } from '../../redux/Slice/AppSlice';


export default function NavbarMobile() {
    const isHidden = useSelector((state) => state.app.isHiddenNavbar)
    const marginValue = isHidden ? "0px" : "-100%"
    const bgColor = isHidden ? "#00000080" : "none"
    const zIndexAtt = isHidden ? "2" : "-1"
    let dispatch = useDispatch()

    const toggleNavbar = () => {
        dispatch(AppSlice.actions.toggleNavbar())
    }

    return (
        <>
            <div className="fixed h-[100vh] w-full duration-200 ease-linear" style={{ background: bgColor, zIndex: zIndexAtt }}>
                <div className="md:w-1/3 sm:w-2/3 h-[100vh] bg-white duration-200 ease-linear" style={{ marginLeft: marginValue, zIndex: zIndexAtt }}>
                    <div className="md:text-lg px-10">
                        <div className='border-b py-2'><Link className="text-black hover:text-[#f68122]" onClick={toggleNavbar} to="/collections/all">Menu<i className="fa-solid fa-caret-down ml-1 xl:fa-2xs lg:fa-xl"></i></Link></div>
                        <div className='border-b py-2 pl-4 text-base'><Link className="text-black hover:text-[#f68122]" onClick={toggleNavbar} to="/collections/coffee">Cà Phê</Link></div>
                        <div className='border-b py-2 pl-4 text-base'><Link className="text-black hover:text-[#f68122]" onClick={toggleNavbar} to="/collections/tea">Trà</Link></div>
                        <div className='border-b py-2 pl-4 text-base'><Link className="text-black hover:text-[#f68122]" onClick={toggleNavbar} to="/collections/frosty">Đá xay</Link></div>
                        <div className='border-b py-2 pl-4 text-base'><Link className="text-black hover:text-[#f68122]" onClick={toggleNavbar} to="/collections/cakesnack">Bánh ngọt</Link></div>
                        <div className='border-b py-2'><Link className="text-black hover:text-[#f68122]" onClick={toggleNavbar} to="/stores/HCM">Cửa hàng</Link></div>
                        <div className='border-b py-2'><Link className="text-black hover:text-[#f68122]" onClick={toggleNavbar} to="/cloudfee">Cảm ứng CloudFee</Link></div>
                        <div className='border-b py-2'><Link className="text-black hover:text-[#f68122]" onClick={toggleNavbar} to="/recruit">Tuyển dụng</Link></div>
                        <div className='border-b py-2 md:hidden sm:block'><Link className="text-black hover:text-[#f68122]" onClick={toggleNavbar} to="/login">Đăng nhập</Link></div>
                    </div>
                </div >
            </div>
        </>
    )
}