import { toast } from "react-toastify"
import { deleteAdmin, approveAdminById } from "../../../api/adminAPI"
import RiseLoader from "react-spinners/RiseLoader"


export default function ModalApproveAdmin({ showModal, setShowModal, adminNotApprovedArr, fetchRequest }) {

    const handleApprove = async (item) => {
        let res = await approveAdminById(item.id)
        if (res.errCode === 0) {
            toast.success('Duyệt thành công')
            fetchRequest()
            setShowModal(false)
        } else {
            toast.error('Lỗi hệ thống')

        }
    }

    const handleReject = async (item) => {
        let res = await deleteAdmin(item.id)
        if (res.errCode === 0) {
            toast.success('Từ chối thành công')
            fetchRequest()
            setShowModal(false)
        } else {
            toast.error('Lỗi hệ thống')

        }
    }

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[50] outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative md:pl-10 w-[85%] h-[70%]">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-semibold">
                                        Danh sách quản trị viên đang chờ duyệt
                                    </h3>

                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModal(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-4 flex-auto text-center">
                                    <table className="w-full px-3 rounded-lg overflow-hidden">
                                        <thead className="h-14 bg-[#f68122] text-white border border-slate-300 overflow-hidden">
                                            <tr>
                                                <th className="px-5">ID</th>
                                                <th>Email</th>
                                                <th>Họ</th>
                                                <th>Tên</th>
                                                <th>Địa chỉ</th>
                                                <th>Tác vụ</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                adminNotApprovedArr === 'None' ?
                                                    (
                                                        <td colSpan="6" className="border py-4 text-lg">Không có dữ liệu</td>
                                                    )
                                                    :
                                                    (
                                                        adminNotApprovedArr && adminNotApprovedArr.length > 0 ?
                                                            (
                                                                adminNotApprovedArr.map((item, index) => {
                                                                    return (
                                                                        <tr className="h-14 font-medium text-base odd:bg-neutral-100 even:bg-slate-200 border border-slate-300 overflow-hidden" key={index}>
                                                                            <td>{item.id}</td>
                                                                            <td>{item.email}</td>
                                                                            <td>{item.firstName}</td>
                                                                            <td>{item.lastName}</td>
                                                                            <td>{item.address}</td>
                                                                            <td>
                                                                                <button className="text-white bg-green-500 hover:bg-green-400 p-2 mr-3 border-none outline-none" name="View" onClick={() => handleApprove(item)}>
                                                                                    <i className="fa-solid fa-check fa-md mr-1"></i>
                                                                                    Duyệt
                                                                                </button>
                                                                                <button className="text-white bg-red-600 hover:bg-red-500 p-2 mr-3 border-none outline-none" name="View" onClick={() => handleReject(item)}>
                                                                                    <i className="fa-solid fa-x fa-md mr-1"></i>
                                                                                    Từ chối
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
                            </div>
                        </div>
                    </div>
                    <div className="opacity-30 fixed inset-0 z-[49] bg-black"></div>
                </>
            ) : null}
        </>
    )
}