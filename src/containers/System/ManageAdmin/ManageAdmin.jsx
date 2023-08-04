import { useState, useEffect, useCallback } from "react"
import ModalEditAdmin from "./ModalEditAdmin"
import ModalCreateAdmin from "./ModalCreateAdmin"
import ModalDeleteAdmin from "./ModalDeleteAdmin"
import ModalViewAdmin from "./ModalViewAdmin"
import { fetchAllAdmins } from "../../../redux/Slice/AppSlice"
import { adminArrSelector } from "../../../redux/selector"
import { useDispatch, useSelector } from "react-redux"

export default function ManageAdmin() {
    const [showModalCreate, setShowModalCreate] = useState(false)
    const [showModalView, setShowModalView] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [dataUser, setDataUser] = useState({})
    const dispatch = useDispatch()
    const adminArr = useSelector(adminArrSelector)


    useEffect(() => {
        dispatch(fetchAllAdmins())
    }, [])


    const fetchRequest = useCallback(() => {
        dispatch(fetchAllAdmins())
    }, [adminArr]);

    const handleCreate = () => {
        setShowModalCreate(true)
    }
    const handleView = (item) => {
        setDataUser(item)
        setShowModalView(true)
    }
    const handleDelete = (item) => {
        setDataUser(item)
        setShowModalDelete(true)
    }
    const handleEdit = (item) => {
        setDataUser(item)
        setShowModalEdit(true)
    }

    const handleOnChange = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        });
    };

    return (
        <>
            <ModalEditAdmin showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} dataUser={dataUser} handleOnChange={handleOnChange} fetchRequest={fetchRequest} />
            <ModalDeleteAdmin showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} dataUser={dataUser} fetchRequest={fetchRequest} />
            <ModalViewAdmin showModalView={showModalView} setShowModalView={setShowModalView} dataUser={dataUser} />
            <ModalCreateAdmin showModalCreate={showModalCreate} setShowModalCreate={setShowModalCreate} fetchRequest={fetchRequest} />
            <div className="p-10">
                <p className="text-3xl font-medium inline-block">Manage Admin</p>
                <button className="text-white bg-[#f68122] ml-6 hover:bg-[#f68122c4] hover:border-white" name="Create" onClick={() => handleCreate()}>Add new admin</button>
                <div className="w-ful mt-10 text-center text-sm">
                    <table className="w-full px-3 rounded-lg overflow-hidden">
                        <thead className="h-14 bg-[#f68122] text-white border border-slate-300 overflow-hidden">
                            <tr>
                                <th className="px-5">ID</th>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                adminArr && adminArr.length > 0 &&
                                adminArr.map((item, index) => {
                                    return (
                                        <tr className="h-12 even:bg-neutral-100 odd:bg-slate-300 border border-slate-300 overflow-hidden" key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
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
                            }
                        </tbody>
                    </table>

                </div>
            </div >
        </>
    )
}