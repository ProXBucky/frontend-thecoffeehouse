import Footer from "../HomePage/Footer/Footer";
import { useState } from "react";
import ModalVideo from "./ModalVideo";

export default function CloudFee() {
    const [showModal, setShowModal] = useState(false)
    const [urlVideo, setUrlVideo] = useState('')

    const openModal = (e) => {
        setUrlVideo(e.target.name)
        setShowModal(true)
    }

    return (
        <>
            <ModalVideo showModal={showModal} setShowModal={setShowModal} urlVideo={urlVideo} />
            <div className="text-center">
                <img src="/src/assets/CloudFee/_KV-marvel-2.webp" />
            </div>
            <div className="text-black h-fit" style={{ background: "url(/src/assets/CloudFee/Background.jpg) top center/100% no-repeat" }}>
                <p className="text-center text-white text-lg py-[60px] px-[250px] mx-[200px]">Được kết hợp từ <b>Cloud</b> (đám mây) và cof<b>Fee</b> (cà phê), <b>CloudFee</b> gợi mở
                    về một thế hệ cà phê mới, êm mượt như mây.
                </p>
                <div className="flex flex-col mx-[150px]">
                    <div className="flex flex-row items-center">
                        <div className="w-1/2">
                            <h2 className="text-[#FEBF3E] font-[Baron] font- font-semibold text-2xl">CLOuDFEE</h2>
                            <h1 className="text-[#FEBF3E] font-[Glad]">Creme Brulee</h1>
                            <p className="text-white py-3"><b>Thức uống "chiều chuộng bản thân" bậc nhất</b> cho những ai thích vị ngọt ngào hay muốn thưởng thức sự kết hợp độc đáo giữa món tráng miệng và thức uống.</p>
                            <a className="text-[#FEBF3E] hover:text-[#FEBF3E] cursor-pointer" href="https://order.thecoffeehouse.com/cloud-fee" target="_blank">Êm mượt như mây, Chill là ghiền ngay! <i className="fa-solid fa-caret-right ml-2"></i></a>
                        </div>
                        <div className="w-1/2">
                            <img src="/src/assets/CloudFee/_creme-brulee.webp" />
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                        <div className="w-1/2">
                            <img src="/src/assets/CloudFee/_creamy.webp" />
                        </div>
                        <div className="w-1/2">
                            <h2 className="text-[#FEBF3E]">CLOuDFEE</h2>
                            <h1 className="text-[#FEBF3E]">Creamy</h1>
                            <p className="text-white py-3"><b>Thức uống "đánh thức" năng lượng ngày mới</b> hợp cho những ai mới bước vào thế giới cà phê hoặc ghiền cà phê nhưng muốn khám phá thêm nhiều hương vị mới.</p>
                            <a className="text-[#FEBF3E] hover:text-[#FEBF3E] cursor-pointer" href="https://order.thecoffeehouse.com/cloud-fee" target="_blank">Êm mượt như mây, Chill là ghiền ngay! <i className="fa-solid fa-caret-right ml-2"></i></a>
                        </div>
                    </div>
                </div>

                <div className="mx-[150px] mt-[50px]">
                    <h1 className="mx-[100px] text-[64px] my-[40px] text-center text-[#FEBF3E]">CÀ PHÊ CÓ DÀNH CHO TẤT CẢ MỌI NGƯỜI?</h1>
                    <div className="mx-[80px]">
                        <iframe className="w-full h-[560px]" src="https://www.youtube.com/embed/t5I96ycncPA"
                            title="CloudFee: Cà phê có dành cho tất cả mọi người?" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                        <p className="mx-[100px] mt-[20px] text-center text-white">Bạn có biết, mỗi ngày có hơn 2 tỷ cốc cà phê được uống trên toàn thế giới?
                            Có người pha cùng sữa, có người rót thêm kem béo, hay kết hợp cùng… rượu whiskey, nhưng không phải ai cũng có thể thưởng thức cà phê một cách ngon lành.
                            Bằng niềm khao khát mang ẩm thực thế giới vào từng ly cà phê bản địa, Edward Teonadi - Giám đốc phát triển sản phẩm tại
                            The Coffee House đã tạo nên thế hệ cà phê mới mang tên CloudFee.
                            Và giờ đây, bất kỳ ai ghé Nhà cũng có thể tìm thấy hương vị cà phê cho riêng mình.
                            <br />
                            <br />
                            <a className="text-[#FEBF3E] hover:text-[#FEBF3E] cursor-pointer text-lg"> Đọc trọn câu chuyện <i className="fa-solid fa-caret-right ml-2"></i></a>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col mx-[240px] mt-[50px]">
                    <div className="flex flex-row items-center">
                        <div className="w-1/2">
                            <img src="/src/assets/CloudFee/thinh_93cf92a5395043a2b634af4de08c0163.webp" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="text-[#FEBF3E]">CÀ PHÊ NGON CHỈ CÓ VỊ ĐẮNG?</h1>
                            <p className="my-[10px] text-white">Từ ý tưởng về CloudFee của Edward, anh Phạm Phúc Thịnh - barista của The Coffee House nhận ra: Cà phê không nhất thiết phải đắng, phải chua thì mới ngon. Đôi khi một chút biến tấu, một chút ngọt ngào để yêu chiều bản thân mới thật sự quan trọng. Và đó là cách CloudFee Creme Brulee ra đời.</p>
                            <button className="bg-[#FEBF3E]" name="https://www.youtube.com/watch?v=o9G8v4j-P3w&ab_channel=THECOFFEEHOUSE" onClick={openModal}>Xem video nghe Thịnh kể chuyện</button>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="w-1/2">
                            <h1 className="text-[#FEBF3E]">CÀ PHÊ ĐÂU CHỈ LÀ THỨC UỐNG</h1>
                            <p className="my-[10px] text-white">Trong ly cà phê dành cho người mình thương có gì? Khi nghe Edward chia sẻ về thế hệ cà phê mới CloudFee, anh Nguyễn Hoàng Hiếu - barista của The Coffee House chợt nhớ tới vợ mình. Cô ngại vị đắng của cà phê, nhưng cần một thức uống tỉnh táo mỗi sáng. Và CloudFee Creamy là món quà anh tặng cho người phụ nữ anh yêu.</p>
                            <button className="bg-[#FEBF3E]" name="https://www.youtube.com/watch?v=LdmG0hSq_Ig&ab_channel=THECOFFEEHOUSE" onClick={openModal}>Hiếu bật mí trong video này</button>
                        </div>
                        <div className="w-1/2">
                            <img src="/src/assets/CloudFee/hieu_ed120096122f4c279ff41696f8b97eb3.webp" />
                        </div>
                    </div>

                </div>

                <div className="mx-[150px] mt-[50px] pb-40">
                    <h1 className="mx-[100px] text-[64px] my-[40px] text-center text-[#FEBF3E]">CHUYỆN CÀ PHÊ</h1>
                    <div className="mx-[200px] flex h-[500px]">
                        <div className="rounded-lg overflow-hidden relative">
                            <div className="w-1/2 z-40">
                                <img src="/src/assets/CloudFee/photo_2022-06-27_13-21-31_1f8c8a00f22e467c8d705e8a95331ae8.webp" />
                            </div>
                            <div className="bg-[#FEBF3E] p-16 h-fit rounded-lg absolute left-[calc(50%_-_30px)] top-[200px] z-10 w-1/2">
                                <p className="z-10">Hơn cả một loại thức uống để ngày mới tươi ngay hay yêu chiều khẩu vị vào buổi chiều, mỗi ly CloudFee còn gắn liền với một câu chuyện thú vị.</p>
                                <button className="text-[#FEBF3E] mt-2">Cùng đón chờ</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}