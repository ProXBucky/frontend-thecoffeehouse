import NavbarMobile from "./HomePage/NavbarMobile";
import { useHistory } from "react-router-dom";

export default function ErrorPage() {
    let history = useHistory()
    const backHome = () => {
        history.push("/")
    }
    return (
        <>
            <NavbarMobile />
            <section className="bg-white h-screen">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <i className="fa-solid fa-circle-exclamation fa-2xl text-red-500"></i>
                        <div className="mt-3 text-3xl font-semibold text-red-500">Cảnh báo</div>
                        <div className="mt-4 text-xl text-gray-800">Bạn không có quyền truy cập đường dẫn trên</div>
                        <p className="text-blue-400 md:text-2xl sm:text-xl mt-5 cursor-pointer" onClick={backHome}>Trở lại <i className="fa-solid fa-rotate-left fa-lg"></i></p>
                    </div>
                </div>
            </section>
        </>
    )
}