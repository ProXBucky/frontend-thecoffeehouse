import Footer from "../HomePage/Footer/Footer";
import { useState } from "react";
import ModalVideo from "./ModalVideo";
import NavbarMobile from "../HomePage/NavbarMobile";

export default function CloudFee() {
    const [showModal, setShowModal] = useState(false)
    const [urlVideo, setUrlVideo] = useState('')

    const openModal = (e) => {
        setUrlVideo(e.target.name)
        setShowModal(true)
    }

    return (
        <>
            <NavbarMobile />
            <ModalVideo showModal={showModal} setShowModal={setShowModal} urlVideo={urlVideo} />
            <div className="text-center">
                <img src="https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265810/image_app/_KV-marvel-2_hpnc0p.webp" />
            </div>
            <div className="text-black" style={{ background: "url(https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265812/image_app/Background_tp8ccz.jpg) top center/100%" }}>
                <p className="text-center text-white md:text-lg sm:text-sm md:py-[60px] sm:py-[20px] xl:px-[250px] lg:mx-[200px] md:mx-[100px] sm:mx-[10px]">Được kết hợp từ <b>Cloud</b> (đám mây) và cof<b>Fee</b> (cà phê), <b>CloudFee</b> gợi mở
                    về một thế hệ cà phê mới, êm mượt như mây.
                </p>
                <div className="flex flex-col lg:mx-[150px] md:mx-[50px] sm:mx-[10px] xl:gap-10 lg:gap-24 md:gap-32 sm:gap-14">
                    <div className="flex md:flex-row sm:flex-col-reverse items-center">
                        <div className="md:w-1/2 sm:w-full sm:text-center">
                            <h2 className="text-[#FEBF3E] font-semibold text-2xl font-[BaronU]">CLOuDFEE</h2>
                            <h1 className="text-[#FEBF3E] font-[Hara] md:text-7xl sm:text-5xl">Creme Brulee</h1>
                            <p className="text-white py-3"><b>Thức uống "chiều chuộng bản thân" bậc nhất</b> cho những ai thích vị ngọt ngào hay muốn thưởng thức sự kết hợp độc đáo giữa món tráng miệng và thức uống.</p>
                            <a className="text-[#FEBF3E] hover:text-[#FEBF3E] cursor-pointer" href="https://order.thecoffeehouse.com/cloud-fee" target="_blank">Êm mượt như mây, Chill là ghiền ngay! <i className="fa-solid fa-caret-right ml-2"></i></a>
                        </div>
                        <div className="md:w-1/2 sm:w-full">
                            <img src="https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265812/image_app/_creme-brulee_egops1.webp" />
                        </div>
                    </div>

                    <div className="flex md:flex-row sm:flex-col items-center">
                        <div className="md:w-1/2 sm:w-full">
                            <img src="https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265812/image_app/_creamy_ctiog6.webp" />
                        </div>
                        <div className="md:w-1/2 sm:w-full sm:text-center">
                            <h2 className="text-[#FEBF3E] font-semibold text-2xl font-[BaronU]">CLOuDFEE</h2>
                            <h1 className="text-[#FEBF3E] font-[Hara] md:text-7xl sm:text-5xl">Creamy</h1>
                            <p className="text-white py-3"><b>Thức uống "đánh thức" năng lượng ngày mới</b> hợp cho những ai mới bước vào thế giới cà phê hoặc ghiền cà phê nhưng muốn khám phá thêm nhiều hương vị mới.</p>
                            <a className="text-[#FEBF3E] hover:text-[#FEBF3E] cursor-pointer" href="https://order.thecoffeehouse.com/cloud-fee" target="_blank">Êm mượt như mây, Chill là ghiền ngay! <i className="fa-solid fa-caret-right ml-2"></i></a>
                        </div>
                    </div>
                </div>

                <div className="lg:mx-[150px] md:mx-[20px] sm:mx-[10px] lg:mt-[50px] md:mt-[75px] sm:mt-[50px]">
                    <h1 className="xl:mx-[100px] sm:mx-[10px] lg:text-[64px] md:text-[40px] sm:text-[30px] my-[40px] text-center text-[#FEBF3E] font-[Montserrat] font-extrabold">CÀ PHÊ CÓ DÀNH CHO TẤT CẢ MỌI NGƯỜI?</h1>
                    <div className="xl:mx-[80px] md:mx-0 sm:mx-[10px]">
                        <iframe className="w-full xl:h-[560px] lg:h-[400px] md:h-[400px]" src="https://www.youtube.com/embed/t5I96ycncPA"
                            title="CloudFee: Cà phê có dành cho tất cả mọi người?" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                        <p className="xl:mx-[100px] md:mx-0 mt-[20px] text-center text-white">Bạn có biết, mỗi ngày có hơn 2 tỷ cốc cà phê được uống trên toàn thế giới?
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

                <div className="flex flex-col xl:mx-[240px] lg:mx-[120px] md:mx-[20px] sm:mx-[10px] mt-[50px] xl:gap-10 lg:gap-24 md:gap-32 sm:gap-10">
                    <div className="flex md:flex-row sm:flex-col items-center">
                        <div className="md:w-1/2 sm:w-full">
                            <img src="https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265811/image_app/thinh_93cf92a5395043a2b634af4de08c0163_rvykhe.webp" />
                        </div>
                        <div className="md:w-1/2 sm:w-full">
                            <h1 className="text-[#FEBF3E] font-bold lg:text-5xl md:text-3xl sm:text-2xl">CÀ PHÊ NGON CHỈ CÓ VỊ ĐẮNG?</h1>
                            <p className="my-[10px] text-white lg:text-xl md:text-base">Từ ý tưởng về CloudFee của Edward, anh Phạm Phúc Thịnh - barista của The Coffee House nhận ra: Cà phê không nhất thiết phải đắng, phải chua thì mới ngon. Đôi khi một chút biến tấu, một chút ngọt ngào để yêu chiều bản thân mới thật sự quan trọng. Và đó là cách CloudFee Creme Brulee ra đời.</p>
                            <button className="bg-[#FEBF3E]" name="https://www.youtube.com/watch?v=o9G8v4j-P3w&ab_channel=THECOFFEEHOUSE" onClick={openModal}>Xem video nghe Thịnh kể chuyện</button>
                        </div>
                    </div>
                    <div className="flex md:flex-row sm:flex-col-reverse items-center">
                        <div className="md:w-1/2 sm:w-full">
                            <h1 className="text-[#FEBF3E] font-bold lg:text-5xl md:text-3xl sm:text-2xl">CÀ PHÊ ĐÂU CHỈ LÀ THỨC UỐNG</h1>
                            <p className="my-[10px] text-white lg:text-xl md:text-base">Trong ly cà phê dành cho người mình thương có gì? Khi nghe Edward chia sẻ về thế hệ cà phê mới CloudFee, anh Nguyễn Hoàng Hiếu - barista của The Coffee House chợt nhớ tới vợ mình. Cô ngại vị đắng của cà phê, nhưng cần một thức uống tỉnh táo mỗi sáng. Và CloudFee Creamy là món quà anh tặng cho người phụ nữ anh yêu.</p>
                            <button className="bg-[#FEBF3E]" name="https://www.youtube.com/watch?v=LdmG0hSq_Ig&ab_channel=THECOFFEEHOUSE" onClick={openModal}>Hiếu bật mí trong video này</button>
                        </div>
                        <div className="md:w-1/2 sm:w-full">
                            <img src="https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265813/image_app/hieu_ed120096122f4c279ff41696f8b97eb3_vhcy04.webp" />
                        </div>
                    </div>

                </div>

                <div className="xl:mx-[150px] sm:mx-[10px] mt-[50px] pb-40">
                    <h1 className="md:mx-[100px] sm:mx-[20px] text-[64px] my-[40px] text-center text-[#FEBF3E] font-extrabold lg:text-5xl md:text-4xl sm:text-3xl">CHUYỆN CÀ PHÊ</h1>
                    <div className="lg:mx-[200px] md:mx-[20px] sm:mx-[10px] flex xl:h-[800px] lg:h-[500px] md:h-[480px] sm:h-[300px]">
                        <div className="rounded-lg overflow-hidden relative">
                            <div className="w-1/2 z-40">
                                <img src="https://res.cloudinary.com/dqi9ub7dw/image/upload/v1694265811/image_app/photo_2022-06-27_13-21-31_1f8c8a00f22e467c8d705e8a95331ae8_fcdrbu.webp" />
                            </div>
                            <div className="bg-[#FEBF3E] xl:p-16 lg:p-6 md:p-3 sm:p-2 h-fit rounded-lg absolute left-[calc(50%_-_30px)] xl:top-[200px] lg:top-[250px] md:top-[300px] sm:top-[50px] z-10 w-1/2">
                                <p className="z-10 md:text-lg sm:text-sm">Hơn cả một loại thức uống để ngày mới tươi ngay hay yêu chiều khẩu vị vào buổi chiều, mỗi ly CloudFee còn gắn liền với một câu chuyện thú vị.</p>
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