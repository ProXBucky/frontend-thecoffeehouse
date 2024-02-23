import { withRouter } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { userInfoSelector } from '../../redux/selector';
import { useSelector } from 'react-redux';
import { useEffect } from "react";

function StartScreen({ authorNavbar }) {
    const userInfo = useSelector(userInfoSelector)
    const history = useHistory();
    const handleAuthor = () => {
        authorNavbar()
    }

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
    }, [userInfo])

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="text-center">
                <p className="md:text-5xl sm:text-2xl font-medium mb-10">The Coffee House Xin Chào</p>
                <button className="text-white md:text-lg sm:text-base w-60 hover:bg-[#f68122] outline-none border-none" onClick={handleAuthor}>Bắt đầu</button>
            </div>
        </div>
    )
}

export default withRouter(StartScreen)