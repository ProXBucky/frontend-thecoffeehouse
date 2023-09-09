import { useHistory } from "react-router-dom"

export default function Poster2() {

    const backGround = 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265840/image_app/BackMatch_g71esv.webp'
    const history = useHistory()

    const handleClick = () => {
        history.push('/collections/tea')
    }

    return (
        <div className="lg:mx-[100px] md:mx-[20px] sm:mx-[10px]">
            <div className="my-10 w-full xl:h-[690px] lg:h-[500px] relative flex items-center justify-stretch rounded-lg overflow-hidden" style={{ background: `url(${backGround}) top center/contain no-repeat` }} >
                <div className="w-1/2 scale-105">
                    {/* <img src="/src/assets/SliderImg/FrostyProduct.webp" ></img> */}
                </div>
                <div className="w-1/2 ml-6 xl:px-20 lg:px-10">
                    <img src="https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265832/image_app/MatchLogo_enbyag.webp" className="p-6" ></img>
                    <p className="text-gray-500 text-left mt-4 xl:block lg:hidden md:hidden sm:hidden">
                        Được trồng trọt và chăm chút kỹ lưỡng, nuôi dưỡng từ thổ nhưỡng phì nhiêu, nguồn nước mát lành, bao bọc bởi mây và sương cùng nền nhiệt độ mát mẻ quanh năm, những búp trà ở Tây Bắc mập mạp và xanh mướt, hội tụ đầy đủ dưỡng chất, sinh khí, và tinh hoa đất trời.Chính khí hậu đặc trưng cùng phương pháp canh tác của đồng bào dân tộc nơi đây đã tạo ra Trà Xanh vị mộc dễ uống, dễ yêu, không thể trộn lẫn với bất kỳ vùng miền nào khác.
                    </p>
                    <p className="text-gray-500 text-left mt-4 xl:hidden lg:block sm:hidden">
                        Được trồng trọt và chăm chút kỹ lưỡng, nuôi dưỡng từ thổ nhưỡng phì nhiêu, nguồn nước mát lành, bao bọc bởi mây và sương cùng nền nhiệt độ mát mẻ quanh năm, những búp trà ở Tây Bắc mập mạp và xanh mướt, hội tụ đầy đủ dưỡng chất, sinh khí, và tinh hoa đất trời.
                    </p>

                    <button className="text-white  rounded-1xl w-full mt-4 bg-[#778B37] lg:hover:scale-95 md:hover:scale-100 border-none outline-none" onClick={handleClick} >Thử ngay</button>
                </div>
            </div>
        </div >
    )


}