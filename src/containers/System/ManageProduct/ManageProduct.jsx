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
        const res = await fetchAllProductByCategory('ALL')
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setAllProductArr(res.data)
        }
    }

    useEffect(() => {
        // dispatch(fetchAllcodeSize())
        fetchDataProduct()
        dispatch(fetchAllcodeCategory())
        window.scrollTo(0, 0)
    }, [])


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
            <div className="p-10 text-sm">
                <p className="text-2xl font-medium  inline-block">Quản lý sản phẩm</p>
                <button className="text-white bg-[#f68122] ml-6 hover:bg-[#f68122c4] hover:border-white" name="Create" onClick={handleCreate}>Tạo sản phẩm mới</button>
                <div className="w-ful mt-10 text-center">
                    <table className="w-full px-3 rounded-lg overflow-hidden">
                        <thead className="h-14 bg-[#f68122] text-white border-slate-300 text-center overflow-hidden">
                            <tr>
                                <th className="px-5">Hình ảnh</th>
                                <th>Tên SP</th>
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
                                            <td colspan="5" className="border py-4 text-lg">Không có dữ liệu</td>
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
                                                                        <img src={(item.image)} className="w-[150px] h-[150px]" />
                                                                    </div>
                                                                }
                                                            </td>
                                                            <td>{item.name}</td>
                                                            <td>{formatPrice(item.originalPrice)}</td>
                                                            <td>{item.categoryData && item.categoryData.valueVn}</td>
                                                            <td>
                                                                <button className="text-white bg-green-500 hover:bg-green-400 p-3 mr-2 border-none outline-none" name="View" onClick={() => handleView(item)}>
                                                                    <i className="fa-regular fa-eye fa-md"></i>
                                                                    {/* Chi tiết */}
                                                                </button>
                                                                <button className="text-white bg-yellow-400 hover:bg-yellow-300 p-3 mr-2 border-none outline-none" name="Edit" onClick={() => handleEdit(item)}>
                                                                    <i className="fa-regular fa-pen-to-square fa-md"></i>
                                                                    {/* Sửa */}
                                                                </button>
                                                                <button className="text-white bg-red-600 hover:bg-red-500 p-3 border-none outline-none" name="Delete" onClick={() => handleDelete(item)}>
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
                </div>
            </div >
        </>
    )
}

export default withRouter(ManageProduct)