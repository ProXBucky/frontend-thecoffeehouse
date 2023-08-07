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


export default function ManageProduct() {
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
        if (res && res.errCode === 0) {
            setAllProductArr(res.data)
        }
    }

    useEffect(() => {
        fetchDataProduct()
        dispatch(fetchAllcodeSize())
        dispatch(fetchAllcodeCategory())
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
        setFile(decodeBase64Func(item.image))
    }

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const handleChangeChecked = (e) => {
        const { id, value } = e.target
        const updatedCheckboxes = [...selectedCheckboxes];
        // Find index
        const findIdx = updatedCheckboxes.indexOf(id);
        // Index > -1 means that the item exists and that the checkbox is checked
        // and in that case we want to remove it from the array and uncheck it
        if (findIdx > -1) {
            updatedCheckboxes.splice(findIdx, 1);
        } else {
            // updatedCheckboxes.push(id);
            updatedCheckboxes.push(value);
        }
        setSelectedCheckboxes(updatedCheckboxes);
    };

    const handleOnChange = event => {
        setDataProduct({
            ...dataProduct,
            [event.target.name]: event.target.value
        });
    };


    const handlePreviewImage = async (event) => {
        const { files } = event.target
        let file = files[0]
        if (file) {
            setFile(URL.createObjectURL(file));
            const base64 = await encodeBase64Func(file)
            setDataProduct({
                ...dataProduct,
                [event.target.name]: base64
            });
        }
    }


    return (
        <>
            <ModalEditProduct showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} dataProduct={dataProduct} selectedCheckboxes={selectedCheckboxes}
                handleOnChange={handleOnChange} fetchRequest={fetchRequest} handleChangeChecked={handleChangeChecked} file={file} handlePreviewImage={handlePreviewImage} />
            <ModalDeleteProduct showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} dataProduct={dataProduct} fetchRequest={fetchRequest} />
            <ModalViewProduct showModalView={showModalView} setShowModalView={setShowModalView} dataProduct={dataProduct} />
            <ModalCreateProduct showModalCreate={showModalCreate} setShowModalCreate={setShowModalCreate} fetchRequest={fetchRequest} />
            <div className="p-10">
                <p className="text-3xl font-medium  inline-block">Manage Product</p>
                <button className="text-white bg-[#f68122] ml-6 hover:bg-[#f68122c4] hover:border-white" name="Create" onClick={handleCreate}>Add new product</button>
                <div className="w-ful mt-10 text-center text-sm">
                    <table className="w-full px-3 rounded-lg overflow-hidden">
                        <thead className="h-14 bg-[#f68122] text-white border border-slate-300 text-center overflow-hidden">
                            <tr>
                                <th className="px-5">Image</th>
                                <th>Name</th>
                                <th>Original Price (VND)</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>

                                {
                                    allProductArr && allProductArr.length > 0 ?
                                        allProductArr.map((item, index) => {
                                            return (
                                                <tr className="h-12 font-medium text-base odd:bg-neutral-100 even:bg-slate-200 border border-slate-300 overflow-hidden" key={index}>
                                                    <td className="py-4 flex justify-center">
                                                        {
                                                            item && item.image &&
                                                            <div className="rounded-xl overflow-hidden">
                                                                <img src={decodeBase64Func(item.image)} className="w-[150px] h-[150px]" />
                                                            </div>
                                                        }
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>{formatPrice(item.originalPrice)}</td>
                                                    <td>{item.categoryData && item.categoryData.valueEn}</td>
                                                    <td>
                                                        <button className="text-white bg-green-500 hover:bg-green-400 p-2 mr-3 border-none outline-none" name="View" onClick={() => handleView(item)}>
                                                            <i className="fa-regular fa-eye fa-md mr-1"></i>
                                                            View
                                                        </button>
                                                        <button className="text-white bg-yellow-400 hover:bg-yellow-300 p-2 mr-3 border-none outline-none" name="Edit" onClick={() => handleEdit(item)}>
                                                            <i className="fa-regular fa-pen-to-square fa-md mr-1"></i>
                                                            Edit
                                                        </button>
                                                        <button className="text-white bg-red-600 hover:bg-red-500 p-2 border-none outline-none" name="Delete" onClick={() => handleDelete(item)}>
                                                            <i className="fa-regular fa-trash-can fa-md mr-1"></i>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <RiseLoader color="#36d7b7" className="absolute top-[45%] left-[45%] " />
                                }
                            </>
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}