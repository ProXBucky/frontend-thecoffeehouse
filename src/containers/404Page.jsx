import NavbarMobile from "./HomePage/NavbarMobile";

export default function ErrorPage() {
    return (
        <>
            <NavbarMobile />
            <section className="bg-white h-screen">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <i className="fa-solid fa-circle-exclamation fa-2xl text-red-500"></i>
                        <div className="mt-3 lg:text-3xl font-semibold text-red-500">Cảnh báo</div>
                        <div className="mt-4 text-xl text-gray-800">Bạn không có quyền truy cập đường dẫn trên</div>
                    </div>
                </div>
            </section>
        </>
    )
}