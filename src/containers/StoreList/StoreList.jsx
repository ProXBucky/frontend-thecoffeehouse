import NavbarLeft from "./NavbarLeft";
import StoreRoute from "../../routes/StoreRoute";
import NavbarMobile from "../HomePage/NavbarMobile";

export default function StoreList() {

    return (
        <>
            <NavbarMobile />
            <div className="h-[150px] mt-9 mb-5 w-full bg-[url('https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265860/image_app/banner_krnxd9.webp')] bg-contain bg-center flex justify-center items-center">
                <p className="font-medium md:text-3xl sm:text-xl sm:text-center">Hệ thống 150 cửa hàng The Coffee House toàn quốc</p>
            </div>
            <div className="text-black lg:h-screen md:h-1/5 mt-10 w-full lg:px-[140px] md:px-[20px] sm:px-[10px] flex lg:flex-row sm:flex-col">
                <div className="lg:w-1/6 md:w-full lg:border-r-[3.5px] lg:border-b-0 sm:border-b-[3.5px] lg:fixed md:p-4 sm:p-0">
                    <NavbarLeft />
                </div>
                <div className="h-full lg:w-5/6 md:w-full lg:ml-[250px] md:px-[20px] sm:px-[15px]" >
                    <StoreRoute />
                </div>
            </div >
        </>
    )
}