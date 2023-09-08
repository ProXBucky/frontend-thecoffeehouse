import ModalCreateProduct from "./ModalCreateProduct"
import ModalDeleteProduct from "./ModalDeleteProduct"
import ModalViewProduct from "./ModalViewProduct"
import ModalEditProduct from "./ModalEditProduct"
import { useEffect, useState, useCallback } from "react"
import { fetchAllcodeCategory, fetchAllcodeSize } from "../../../redux/Slice/AppSlice"
import { useDispatch } from "react-redux"
import { decodeBase64Func, encodeBase64Func } from "../../../utils/base64"
import { fetchAllProductByCategory } from "../../../api/appAPI"
import { formatPrice } from "../../../utils/formatPrice"
import RiseLoader from "react-spinners/RiseLoader"
import { withRouter } from "react-router-dom"
import Pagination from "../../../components/Pagination/Pagination"


function ManageProduct() {
    const [showModalCreate, setShowModalCreate] = useState(false)
    const [showModalView, setShowModalView] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [file, setFile] = useState('')
    const [allProductArr, setAllProductArr] = useState('')
    const [dataProduct, setDataProduct] = useState('')
    const dispatch = useDispatch()

    const fetchDataProduct = async () => {
        const res = await fetchAllProductByCategory('ALL', currentPage, 6, 0)
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setAllProductArr(res.data)
            setTotalPages(res.totalPages)
        }
    }

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected + 1);
    };

    useEffect(() => {
        // dispatch(fetchAllcodeSize())
        fetchDataProduct()
        dispatch(fetchAllcodeCategory())
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        fetchDataProduct();
    }, [currentPage]);


    const fetchRequest = useCallback(() => {
        fetchDataProduct()
    }, [allProductArr]);

    const handleCreate = () => {
        setShowModalCreate(true)
    }

    const handleView = (item) => {
        setDataProduct(item)
        setShowModalView(true)
    }
    const handleDelete = (item) => {
        setDataProduct(item)
        setShowModalDelete(true)
    }
    const handleEdit = (item) => {
        setDataProduct(item)
        setShowModalEdit(true)
        setFile('')
    }

    // const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    // const handleChangeChecked = (e) => {
    //     const { id, value } = e.target
    //     const updatedCheckboxes = [...selectedCheckboxes];
    //     // Find index
    //     const findIdx = updatedCheckboxes.indexOf(id);
    //     // Index > -1 means that the item exists and that the checkbox is checked
    //     // and in that case we want to remove it from the array and uncheck it
    //     if (findIdx > -1) {
    //         updatedCheckboxes.splice(findIdx, 1);
    //     } else {
    //         // updatedCheckboxes.push(id);
    //         updatedCheckboxes.push(value);
    //     }
    //     setSelectedCheckboxes(updatedCheckboxes);
    // };

    const handleOnChange = event => {
        setDataProduct({
            ...dataProduct,
            [event.target.name]: event.target.value
        });
    };


    const handlePreviewImage = async (event) => {
        const { files, name } = event.target
        let file = files[0]
        if (file) {
            setFile(URL.createObjectURL(file));
            const base64 = await encodeBase64Func(file)
            setDataProduct({
                ...dataProduct,
                [name]: base64
            });
        }
    }


    return (
        <>
            {/* selectedCheckboxes={selectedCheckboxes}
            handleChangeChecked={handleChangeChecked} */}
            <ModalEditProduct showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} dataProduct={dataProduct} file={file} setFile={setFile} handlePreviewImage={handlePreviewImage}
                handleOnChange={handleOnChange} fetchRequest={fetchRequest} />
            <ModalDeleteProduct showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} dataProduct={dataProduct} fetchRequest={fetchRequest} />
            <ModalViewProduct showModalView={showModalView} setShowModalView={setShowModalView} dataProduct={dataProduct} />
            <ModalCreateProduct showModalCreate={showModalCreate} setShowModalCreate={setShowModalCreate} fetchRequest={fetchRequest} />
            <div className="lg:p-10 md:p-3 sm:p-3 text-sm">
                <p className="md:text-2xl sm:text-xl font-medium md:inline-block sm:block">Quản lý sản phẩm</p>
                <button className="text-white bg-[#f68122] md:ml-6 sm:ml-0 sm:mt-2 hover:bg-[#f68122c4] hover:border-white" name="Create" onClick={handleCreate}>Tạo sản phẩm mới</button>
                <div className="w-ful md:mt-10 sm:mt-5 text-center md:text-sm sm:text-xs">
                    <table className="w-full px-3 rounded-lg overflow-hidden">
                        <thead className="h-14 bg-[#f68122] text-white border-slate-300 text-center overflow-hidden">
                            <tr>
                                <th className="md:px-5 sm:px-7">Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá tiền (VND)</th>
                                <th>Thể loại</th>
                                <th>Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {

                                    allProductArr === 'None' ?
                                        (
                                            <td colSpan="5" className="border py-4 text-lg">Không có dữ liệu</td>
                                        )
                                        :
                                        (
                                            allProductArr && allProductArr.length > 0 ?
                                                allProductArr.map((item, index) => {
                                                    return (
                                                        <tr className="h-12 font-medium bg-white border-slate-300 overflow-hidden border-b" key={index}>
                                                            <td className="py-4 flex justify-center">
                                                                {
                                                                    item && item.image &&
                                                                    <div className="rounded-xl overflow-hidden">
                                                                        <img src={(item.image)} className="lg:w-[150px] md:w-[100px] sm:w-[75px] lg:h-[150px] md:h-[100px] sm:h-[75px]" />
                                                                    </div>
                                                                }
                                                            </td>
                                                            <td>{item.name}</td>
                                                            <td className="px-2">{formatPrice(item.originalPrice)}</td>
                                                            <td className="px-2">{item.categoryData && item.categoryData.valueVn}</td>
                                                            <td className="md:px-5 sm:px-3 sm:py-2">
                                                                <button className="text-white bg-green-500 hover:bg-green-400 xl:p-3 lg:p-2 md:py-1 md:mr-2 sm:mb-2 border-none outline-none" name="View" onClick={() => handleView(item)}>
                                                                    <i className="fa-regular fa-eye fa-md"></i>
                                                                    {/* Chi tiết */}
                                                                </button>
                                                                <button className="text-white bg-yellow-400 hover:bg-yellow-300 xl:p-3 lg:p-2 md:py-1 md:mr-2 sm:mb-2 border-none outline-none" name="Edit" onClick={() => handleEdit(item)}>
                                                                    <i className="fa-regular fa-pen-to-square fa-md"></i>
                                                                    {/* Sửa */}
                                                                </button>
                                                                <button className="text-white bg-red-600 hover:bg-red-500 xl:p-3 lg:p-2 md:py-1 border-none outline-none" name="Delete" onClick={() => handleDelete(item)}>
                                                                    <i className="fa-regular fa-trash-can fa-md"></i>
                                                                    {/* Xóa */}
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                :
                                                <RiseLoader color="#36d7b7" className="absolute top-[45%] left-[45%] " />
                                        )
                                }
                            </>
                        </tbody>
                    </table>
                    <Pagination totalPages={totalPages} handlePageClick={handlePageClick} />
                </div>
            </div >
        </>
    )
}

export default withRouter(ManageProduct)