import { useEffect } from "react"


export default function Recruit() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="mt-[200px] text-black text-center">
                <h1>Xin lỗi</h1>
                <div className="text-xl mt-4">Trang đang trong quá trình phát triển...</div>
            </div>
        </>
    )
}