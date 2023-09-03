import ReactPaginate from "react-paginate";
import "./Pagination.css"

export default function Pagination({ totalPages, handlePageClick }) {
    return (
        <ReactPaginate
            pageCount={totalPages}
            onPageChange={handlePageClick}
            marginPagesDisplayed={1} // Số lượng trang đầu và cuối hiển thị
            previousLabel={<i className="fa-solid fa-angles-left"></i>} // Nhãn nút Previous
            nextLabel={<i className="fa-solid fa-angles-right"></i>} // Nhãn nút Next
            breakLabel={'...'} // Nhãn khi có nhiều trang
            containerClassName={'pagination'} // Lớp CSS cho container
            activeClassName={'active'} // Lớp CSS cho trang đang được chọn
            previousClassName={'page-item'} // Lớp CSS cho nút Previous
            nextClassName={'page-item'} // Lớp CSS cho nút Next
            breakClassName={'page-item'} // Lớp CSS cho dấu ...
            pageClassName={'page-item'} // Lớp CSS cho các trang
            pageLinkClassName={'page-link'} // Lớp CSS cho các liên kết trang
            previousLinkClassName={'page-link'} // Lớp CSS cho liên kết Previous
            nextLinkClassName={'page-link'} // Lớp CSS cho liên kết Next
            pageRangeDisplayed={5} // Số lượng trang hiển thị tối đa
        />
    )
}