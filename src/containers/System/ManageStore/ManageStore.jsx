import ModalCreateStore from "./ModalCreateStore"
import ModalDeleteStore from "./ModalDeleteStore"
import ModalViewStore from "./ModalViewStore"
import ModalEditStore from "./ModalEditStore"
import { useEffect, useState, useCallback } from "react"
import { fetchAllcodeCity } from "../../../redux/Slice/AppSlice"
import { useDispatch } from "react-redux"
import { fetchAllStoreByCity } from "../../../api/appAPI"
import { decodeBase64Func, encodeBase64Func } from "../../../utils/base64"
import RiseLoader from "react-spinners/RiseLoader"
import { withRouter } from "react-router-dom"



function ManageStore() {
    const [showModalCreate, setShowModalCreate] = useState(false)
    const [showModalView, setShowModalView] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const dispatch = useDispatch()
    const [dataStore, setDataStore] = useState('')
    const [allStoreArr, setAllStoreArr] = useState('')


    const fetchDataStore = async () => {
        const res = await fetchAllStoreByCity('ALL')
        if (res && (res.errCode === 0 || res.errCode === 1)) {
            setAllStoreArr(res.data)
        }
    }

    useEffect(() => {
        dispatch(fetchAllcodeCity())
        fetchDataStore()
        window.scrollTo(0, 0)
    }, [])

    const fetchRequest = useCallback(() => {
        fetchDataStore()
    }, [allStoreArr]);


    const handleCreate = () => {
        setShowModalCreate(true)
    }

    const handleView = (item) => {
        setDataStore(item)
        setShowModalView(true)
    }
    const handleDelete = (item) => {
        setDataStore(item)
        setShowModalDelete(true)
    }
    const handleEdit = (item) => {
        setDataStore(item)
        setShowModalEdit(true)
    }


    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);

    useEffect(() => {
        handleImageStore()
    }, [images]);

    const handleImageStore = () => {
        let newImageUrls = [];
        let base64Arr = []
        if (images.length < 1) return;
        images.forEach(async (image) => {
            newImageUrls.push(URL.createObjectURL(image))
            let base64Img = await encodeBase64Func(image)
            base64Arr.push({
                storeId: dataStore.id,
                image: base64Img
            })
        });
        setImageURLs(newImageUrls);
        setDataStore({ ...dataStore, ['image']: base64Arr });
    }

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }

    const handleOnChange = event => {
        const { name, value } = event.target;
        setDataStore({ ...dataStore, [name]: value });
    };



    return (
        <>
            <ModalEditStore showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} dataStore={dataStore} fetchRequest={fetchRequest} handleOnChange={handleOnChange}
                onImageChange={onImageChange} imageURLS={imageURLS} />
            <ModalDeleteStore showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} dataStore={dataStore} fetchRequest={fetchRequest} />
            <ModalViewStore showModalView={showModalView} setShowModalView={setShowModalView} dataStore={dataStore} />
            <ModalCreateStore showModalCreate={showModalCreate} setShowModalCreate={setShowModalCreate} fetchRequest={fetchRequest} />
            <div className="p-10 text-sm">
                <p className="text-2xl font-medium  inline-block">Quản lý cửa hàng</p>
                <button className="text-white bg-[#f68122] ml-6 hover:bg-[#f68122c4] hover:border-white" name="Create" onClick={handleCreate}>Thêm cửa hàng mới</button>
                <div className="w-ful mt-10 text-center">
                    <table className="w-full px-3 rounded-lg overflow-hidden">
                        <thead className="h-14 bg-[#f68122] text-sm text-white border-slate-300 text-center overflow-hidden">
                            <tr>
                                <th className="px-5">Hình ảnh</th>
                                <th>Tên cửa hàng</th>
                                <th>Địa chỉ</th>
                                <th>Thành phố</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {
                                    allStoreArr === 'None' ?
                                        (
                                            <td colspan="5" className="border py-4 text-lg">Không có dữ liệu</td>
                                        )
                                        :
                                        (
                                            allStoreArr && allStoreArr.length > 0 ?
                                                allStoreArr.map((item, index) => {
                                                    return (
                                                        <tr className="h-12 font-medium text-sm bg-white border-b border-slate-300 overflow-hidden" key={index}>
                                                            <td className="p-6 flex justify-center">
                                                                {
                                                                    item && item.imageData && item.imageData.length > 0 &&
                                                                    <div className="rounded-xl overflow-hidden">
                                                                        <img src={(item.imageData[0].image)} className="w-[400px] h-[250px]" />
                                                                    </div>
                                                                }
                                                            </td>
                                                            <td className="border-x-2">{item.nameStore}</td>
                                                            <td>{item.address}</td>
                                                            <td className="border-x-2">{item.cityData.valueVn}</td>
                                                            <td>
                                                                <button className="mb-2 text-white bg-green-500 hover:bg-green-400 p-2 w-2/3 border-none outline-none" name="View" onClick={() => handleView(item)}>
                                                                    <i className="fa-regular fa-eye fa-md"></i>
                                                                    {/* Chi tiết */}
                                                                </button>
                                                                <br />
                                                                <button className="mb-2 text-white bg-yellow-400 hover:bg-yellow-300 p-2 w-2/3 border-none outline-none" name="Edit" onClick={() => handleEdit(item)}>
                                                                    <i className="fa-regular fa-pen-to-square fa-md"></i>
                                                                    {/* Sửa */}
                                                                </button>
                                                                <br />
                                                                <button className="text-white bg-red-600 hover:bg-red-500 p-2 w-2/3 border-none outline-none" name="Delete" onClick={() => handleDelete(item)}>
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

export default withRouter(ManageStore)