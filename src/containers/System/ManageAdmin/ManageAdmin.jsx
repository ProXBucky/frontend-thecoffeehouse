import { useState, useEffect, useCallback } from "react"
import ModalEditAdmin from "./ModalEditAdmin"
import ModalCreateAdmin from "./ModalCreateAdmin"
import ModalDeleteAdmin from "./ModalDeleteAdmin"
import ModalViewAdmin from "./ModalViewAdmin"
import ModalApproveAdmin from "./ModalApproveAdmin"
import { fetchAllAdmins, fetchAllAdminsNotApproved } from "../../../redux/Slice/AppSlice"
import { adminArrSelector, adminNotApprovedArrSelector } from "../../../redux/selector"
import { useDispatch, useSelector } from "react-redux"
import RiseLoader from "react-spinners/RiseLoader"
import { withRouter } from "react-router-dom"


function ManageAdmin() {
    const [showModalCreate, setShowModalCreate] = useState(false)
    const [showModalView, setShowModalView] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [dataUser, setDataUser] = useState({})
    const dispatch = useDispatch()
    const adminArr = useSelector(adminArrSelector)
    const adminNotApprovedArr = useSelector(adminNotApprovedArrSelector)

    useEffect(() => {
        dispatch(fetchAllAdmins())
        dispatch(fetchAllAdminsNotApproved())
        window.scrollTo(0, 0)
    }, [])


    const fetchRequest = useCallback(() => {
        dispatch(fetchAllAdmins())
        dispatch(fetchAllAdminsNotApproved())
    }, [adminArr]);

    const handleCreate = () => {
        setShowModalCreate(true)
    }
    const handleApprove = () => {
        setShowModal(true)
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
            <ModalApproveAdmin showModal={showModal} setShowModal={setShowModal} adminNotApprovedArr={adminNotApprovedArr} fetchRequest={fetchRequest} />
            <ModalEditAdmin showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} dataUser={dataUser} handleOnChange={handleOnChange} fetchRequest={fetchRequest} />
            <ModalDeleteAdmin showModalDelete={showModalDelete} setShowModalDelete={setShowModalDelete} dataUser={dataUser} fetchRequest={fetchRequest} />
            <ModalViewAdmin showModalView={showModalView} setShowModalView={setShowModalView} dataUser={dataUser} />
            <ModalCreateAdmin showModalCreate={showModalCreate} setShowModalCreate={setShowModalCreate} fetchRequest={fetchRequest} />
            <div className="p-10 text-sm">
                <p className="text-2xl font-medium inline-block">Quản lý quản trị viên</p>
                <button className="text-white bg-[#f68122] ml-6 hover:bg-[#f68122c4] hover:border-white" name="Create" onClick={() => handleCreate()}>Tạo mới quản trị viên</button>
                <button className="text-white bg-[#f68122] ml-6 hover:bg-[#f68122c4] hover:border-white relative" name="Approved" onClick={() => handleApprove()}>
                    Đang chờ
                    <span className="bg-red-500 border text-white px-2 rounded-full absolute top-[-10px] right-[-10px]">{adminNotApprovedArr === 'None' ? '0' : adminNotApprovedArr.length}</span>
                </button>
                <div className="w-ful mt-10 text-center text-sm">
                    <table className="w-full px-3 rounded-lg overflow-hidden">
                        <thead className="h-14 bg-[#f68122] text-white border-slate-300 overflow-hidden" style={{ boxShadow: '1px 1px 13px 0px #00000040' }}>
                            <tr>
                                <th className="px-5">ID</th>
                                <th>Email</th>
                                <th>Họ</th>
                                <th>Tên</th>
                                <th>Địa chỉ</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                adminArr === 'None' ?
                                    (
                                        <td colspan="6" className="border py-4 text-lg">Không có dữ liệu</td>
                                    )
                                    :
                                    (
                                        adminArr && adminArr.length > 0 ?
                                            (
                                                adminArr.map((item, index) => {
                                                    return (
                                                        <tr className="h-14 font-medium bg-white border-slate-300 overflow-hidden border-b" key={index}>
                                                            <td>{item.id}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.firstName}</td>
                                                            <td>{item.lastName}</td>
                                                            <td>{item.address}</td>
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
                                            )
                                            :
                                            (
                                                <RiseLoader color="#36d7b7" className="absolute top-[45%] left-[45%] " />
                                            )
                                    )
                            }
                        </tbody>

                    </table>

                </div>
            </div >
        </>
    )
}

export default withRouter(ManageAdmin)