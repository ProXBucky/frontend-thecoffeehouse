import ModalCreateStore from "./ModalCreateStore"
// import ModalDeleteStore from "./ModalDeleteStore"
// import ModalViewStore from "./ModalViewStore"
// import ModalEditStore from "./ModalEditStore"
import { useEffect, useState, useCallback } from "react"
import { fetchAllcodeCity } from "../../../redux/Slice/AppSlice"
import { useDispatch } from "react-redux"
import { fetchAllProductByCategory } from "../../../api/appAPI"


export default function ManageStore() {
    const [showModalCreate, setShowModalCreate] = useState(false)
    const [showModalView, setShowModalView] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const dispatch = useDispatch()
    const [dataProduct, setDataProduct] = useState('')
    const [allStoreArr, setAllStoreArr] = useState('')


    const fetchDataProduct = async () => {
        const res = await fetchAllProductByCategory('ALL')
        if (res && res.errCode === 0) {
            setAllStoreArr(res.data)
        }
    }

    const fetchRequest = useCallback(() => {
        fetchDataProduct()
    }, [allStoreArr]);


    useEffect(() => {
        dispatch(fetchAllcodeCity())
    }, [])


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

    const handleOnChange = event => {
        setDataProduct({
            ...dataProduct,
            [event.target.name]: event.target.value
        });
    };

    return (
        <>
            {/* <ModalEditStore showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} dataProduct={dataProduct} fetchRequest={fetchRequest} /> */}
            {/* <ModalDeleteStore showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} dataProduct={dataProduct} fetchRequest={fetchRequest} /> */}
            {/* <ModalViewStore showModalView={showModalView} setShowModalView={setShowModalView} dataProduct={dataProduct} /> */}
            <ModalCreateStore showModalCreate={showModalCreate} setShowModalCreate={setShowModalCreate} fetchRequest={fetchRequest} />
            <div className="p-10">
                <p className="text-3xl inline-block">Manage Stores</p>
                <button className="text-white bg-[#f68122] ml-6 hover:bg-[#f68122c4] hover:border-white" name="Create" onClick={handleCreate}>Add new store</button>
                <div className="w-ful mt-10 text-center text-sm">
                    <table className="w-full px-3 rounded-lg overflow-hidden">
                        <thead className="h-14 bg-[#f68122] text-white border border-slate-300 text-center overflow-hidden">
                            <tr>
                                <th className="px-5">Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                allStoreArr && allStoreArr.length > 0 &&
                                allStoreArr.map((item, index) => {
                                    return (
                                        <tr className="h-12 font-medium text-base even:bg-neutral-100 odd:bg-slate-300 border border-slate-300 overflow-hidden" key={index}>
                                            <td className="py-4 flex justify-center">
                                                {
                                                    item && item.image &&
                                                    <div className="rounded-xl overflow-hidden">
                                                        <img src={decodeBase64Func(item.image)} className="w-[150px] h-[150px]" />
                                                    </div>
                                                }
                                            </td>
                                            <td>{item.name}</td>
                                            <td>{item.originalPrice}</td>
                                            <td>{item.categoryData.valueEn}</td>
                                            <td>
                                                <button className="text-white bg-green-500 hover:bg-green-400 p-2 mr-3 border-none outline-none" name="View" onClick={() => handleView(item)}>
                                                    <i className="fa-regular fa-eye fa-md mr-1"></i>
                                                    View
                                                </button>
                                                <button className="text-black bg-yellow-400 hover:bg-yellow-300 p-2 mr-3 border-none outline-none" name="Edit" onClick={() => handleEdit(item)}>
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
                            } */}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}