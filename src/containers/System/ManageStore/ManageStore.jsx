import ModalCreateStore from "./ModalCreateStore"
import ModalDeleteStore from "./ModalDeleteStore"
import ModalViewStore from "./ModalViewStore"
import ModalEditStore from "./ModalEditStore"
import { useEffect, useState, useCallback } from "react"
import { fetchAllcodeCity } from "../../../redux/Slice/AppSlice"
import { useDispatch } from "react-redux"
import { fetchAllStoreByCity } from "../../../api/appAPI"
import { decodeBase64Func, encodeBase64Func } from "../../../utils/base64"


export default function ManageStore() {
    const [showModalCreate, setShowModalCreate] = useState(false)
    const [showModalView, setShowModalView] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const dispatch = useDispatch()
    const [dataStore, setDataStore] = useState('')
    const [allStoreArr, setAllStoreArr] = useState('')


    const fetchDataStore = async () => {
        const res = await fetchAllStoreByCity('ALL')
        if (res && res.errCode === 0) {
            setAllStoreArr(res.data)
        }
    }

    useEffect(() => {
        dispatch(fetchAllcodeCity())
        fetchDataStore()
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
    // const [mapURL, setMapURL] = useState();

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

    const fixErrors = (s) => {
        s = s.replace("allowfullscreen", "allowFullScreen");
        s = s.replace("referrerpolicy", "referrerPolicy");
        s = s.replace(`style="border:0;"`, "");
        s = s.replace(`width="600"`, `width="300"`);
        s = s.replace(`height="450`, `height="200"`);
        return s;
    }

    const handleOnChange = event => {
        const { name, value } = event.target;
        // if (name === 'mapLink') {
        //     setMapURL(fixErrors(value))
        //     setDataStore({ ...dataStore, [name]: value });
        // }
        setDataStore({ ...dataStore, [name]: value });
    };



    return (
        <>
            <ModalEditStore showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} dataStore={dataStore} fetchRequest={fetchRequest} handleOnChange={handleOnChange}
                onImageChange={onImageChange} imageURLS={imageURLS} />
            <ModalDeleteStore showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} dataStore={dataStore} fetchRequest={fetchRequest} />
            <ModalViewStore showModalView={showModalView} setShowModalView={setShowModalView} dataStore={dataStore} />
            <ModalCreateStore showModalCreate={showModalCreate} setShowModalCreate={setShowModalCreate} fetchRequest={fetchRequest} />
            <div className="p-10">
                <p className="text-3xl font-medium  inline-block">Manage Stores</p>
                <button className="text-white bg-[#f68122] ml-6 hover:bg-[#f68122c4] hover:border-white" name="Create" onClick={handleCreate}>Add new store</button>
                <div className="w-ful mt-10 text-center text-sm">
                    <table className="w-full px-3 rounded-lg overflow-hidden">
                        <thead className="h-14 bg-[#f68122] text-white border border-slate-300 text-center overflow-hidden">
                            <tr>
                                <th className="px-5">Image</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {
                                    allStoreArr && allStoreArr.length > 0 &&
                                    allStoreArr.map((item, index) => {
                                        return (
                                            <tr className="h-12 font-medium text-base odd:bg-neutral-100 even:bg-slate-200 border border-slate-300 overflow-hidden" key={index}>
                                                <td className="p-4 flex justify-center">
                                                    {
                                                        item && item.imageData && item.imageData.length > 0 &&
                                                        <div className="rounded-xl overflow-hidden">
                                                            <img src={decodeBase64Func(item.imageData[0].image)} className="w-[500px] h-[300px]" />
                                                        </div>
                                                    }
                                                </td>
                                                <td>{item.nameStore}</td>
                                                <td>{item.address}</td>
                                                <td>{item.cityData.valueEn}</td>
                                                <td className="p-4 w-[120px]">
                                                    <button className="mb-2 text-white w-28 bg-green-500 hover:bg-green-400 p-2 border-none outline-none" name="View" onClick={() => handleView(item)}>
                                                        <i className="fa-regular fa-eye fa-md mr-1"></i>
                                                        View
                                                    </button>
                                                    <br />
                                                    <button className="mb-2 text-white w-28 bg-yellow-400 hover:bg-yellow-300 p-2 border-none outline-none" name="Edit" onClick={() => handleEdit(item)}>
                                                        <i className="fa-regular fa-pen-to-square fa-md mr-1"></i>
                                                        Edit
                                                    </button>
                                                    <br />
                                                    <button className="text-white w-28 bg-red-600 hover:bg-red-500 p-2 border-none outline-none" name="Delete" onClick={() => handleDelete(item)}>
                                                        <i className="fa-regular fa-trash-can fa-md mr-1"></i>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </>
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}