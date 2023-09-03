import RiseLoader from "react-spinners/RiseLoader"

export default function Loading() {
    return (
        <>
            <div className="opacity-60 fixed inset-0 bg-black z-[100] h-screen w-full flex justify-center items-center flex-col">
                <RiseLoader color="#36d7b7" />
                <p className="text-white font-medium text-2xl mt-7">Đang tải...</p>
            </div>
        </>
    )
}