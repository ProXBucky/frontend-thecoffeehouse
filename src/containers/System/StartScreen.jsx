import { withRouter } from "react-router-dom"

function StartScreen({ authorNavbar }) {
    const handleAuthor = () => {
        authorNavbar()
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
                <p className="text-3xl font-medium mb-5">Xin chào đến với giao diện phía quản trị viên</p>
                <button className="text-white text-lg w-60 hover:bg-[#f68122] outline-none border-none" onClick={handleAuthor}>Bắt đầu</button>
            </div>
        </div>
    )
}

export default withRouter(StartScreen)