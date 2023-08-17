import { useHistory } from "react-router-dom"

export default function Poster2() {

    const backGround = '/src/assets/SliderImg/BackMatch.webp'
    const history = useHistory()

    const handleClick = () => {
        history.push('/collections/tea')
    }

    return (
        <div className="mx-[140px]">
            <div className="my-10 w-full h-[690px] relative flex items-center justify-stretch border rounded-lg overflow-hidden" style={{ background: `url(${backGround}) top center/contain no-repeat` }} >
                <div className="w-1/2 px-20 scale-105">
                    {/* <img src="/src/assets/SliderImg/FrostyProduct.webp" ></img> */}
                </div>
                <div className="w-1/2 ml-6 px-20">
                    <img src="/src/assets/SliderImg/MatchLogo.webp" ></img>
                    <p className="text-gray-500 text-left mt-4">
                        Được trồng trọt và chăm chút kỹ lưỡng, nuôi dưỡng từ thổ nhưỡng phì nhiêu, nguồn nước mát lành, bao bọc bởi mây và sương cùng nền nhiệt độ mát mẻ quanh năm, những búp trà ở Tây Bắc mập mạp và xanh mướt, hội tụ đầy đủ dưỡng chất, sinh khí, và tinh hoa đất trời.  Chính khí hậu đặc trưng cùng phương pháp canh tác của đồng bào dân tộc nơi đây đã tạo ra Trà Xanh vị mộc dễ uống, dễ yêu, không thể trộn lẫn với bất kỳ vùng miền nào khác.
                    </p>
                    <button className="text-white rounded-1xl w-full mt-4 bg-[#778B37] hover:scale-95 border-none outline-none" onClick={handleClick} >Thử ngay</button>
                </div>
            </div >

        </div>
    )
}