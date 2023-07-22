
export default function Poster1() {

    const backGround =
        '/src/assets/SliderImg/BackgroundForsty.webp'

    return (
        <div className="my-10 w-full h-[690px] relative flex items-center justify-stretch" style={{ background: `url(${backGround}) top center/contain no-repeat` }} >
            <div className="w-1/2 px-20">
                <img src="/src/assets/SliderImg/FrostyProduct.webp" ></img>
            </div>
            <div className="w-1/2 ml-6 px-20">
                <img src="/src/assets/SliderImg/ForstyPoster.webp" ></img>
                <p className="text-black text-left mt-4">
                    FROSTY là thức uống đá xay mát lạnh, sánh mịn, cuốn phần vị, hút phần nhìn,<br></br>
                    thỏa cảm xúc, mang lại cảm giác ĐÃAA TỨC THÌ cùng năng lượng tích cực cho bất cứ ai.
                </p>
                <button className="text-white bg-[#1a4769] rounded-1xl w-full mt-4"  >Thử ngay</button>
            </div>
        </div >
    )
}