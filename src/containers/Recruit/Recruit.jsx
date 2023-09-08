import { useEffect } from "react"
import NavbarMobile from "../HomePage/NavbarMobile"


export default function Recruit() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <NavbarMobile />
            <div className="py-[150px] text-black text-center">
                <h1 className="md:text-5xl sm:text-4xl">Xin lỗi</h1>
                <div className="md:text-xl sm:text-lg mt-4">Trang đang trong quá trình phát triển...</div>
            </div>
        </>
    )
}