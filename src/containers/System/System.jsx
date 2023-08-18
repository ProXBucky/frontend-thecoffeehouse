import SystemRoute from "../../routes/SystemRoute";
import NavbarLeft from "./NavbarLeft";


export default function System() {

    return (
        <>
            <div className="system-container flex text-black h-screen mt-9">
                <div className="px-2 py-3 h-full fixed duration-200 ease-linear scroll-smooth bg-white w-[60px] hover:w-[200px] border-r">
                    <NavbarLeft />
                </div>
                <div className="h-full duration-200 ease-linear scroll-smooth pb-10 w-full ml-[60px] bg-[#f5f2f0]" >
                    <SystemRoute />
                </div>
            </div >
        </>
    )
}