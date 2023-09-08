import "./Footer.scss"

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="content-up">
                <div className="content">
                    <label>Giới thiệu</label>
                    <ul className="mt-3">
                        <li>Về chúng tôi</li>
                        <li>Sản phẩm</li>
                        <li>Khuyến mãi</li>
                        <li>Chuyện cà phê</li>
                        <li>Cửa hàng</li>
                        <li>Tuyển dụng</li>
                    </ul>
                </div>
                <div className="content">
                    <label>Điều khoản</label>
                    <ul className="mt-3">
                        <li>Điều khoản sử dụng</li>
                        <li>Chính sách bảo mật thông tin</li>
                    </ul>

                </div>
                <div className="content">
                    <label><i className="fa-solid fa-phone"></i> Đặt hàng: 1800 6936</label><br /><br />
                    <label><i className="fa-solid fa-location-dot"></i> Liên hệ</label>
                    <p className="p-address mt-3">
                        Tầng 3-4 Hub Building<br />
                        195/10E Điện Biên Phủ, P.15,<br />
                        Q.Bình Thạnh, TP.Hồ Chí Minh
                    </p>
                </div>
                <div className="content flex justify-center">
                    <iframe className="md:hidden sm:block" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThe.Coffee.House.2014&tabs&width=280&height=100&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="280" height="72" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    <iframe className="md:block sm:hidden" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThe.Coffee.House.2014&tabs&width=300&height=100&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="72" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>

            </div>
            <div className="content-down">
                <p>Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN</p>
                <p>Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM cấp ngày 23/07/2014. Người đại diện: NGÔ NGUYÊN KHA</p>
                <p>Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh   Điện thoại: (028) 7107 8079   Email: hi@thecoffeehouse.vn</p>
                <p>© 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi quyền bảo lưu</p>

            </div>

        </div>

    )
}