import { toast } from "react-toastify"
import { updateAdminData } from "../../../api/adminAPI"
import { useSelector } from "react-redux"
import { cookieSelector } from "../../../redux/selector"

export default function ModalEditAdmin({ showModalEdit, setShowModalEdit, dataUser, handleOnChange, fetchRequest }) {

    const accessToken = useSelector(cookieSelector)
    const handleAction = async () => {
        try {
            let res = await updateAdminData({
                id: dataUser.id,  //for findOne
                password: dataUser.password,
                firstName: dataUser.firstName,
                lastName: dataUser.lastName,
                address: dataUser.address,
                phone: dataUser.phone
            }, accessToken)
            if (res.status === 200) {
                toast.success('Cập nhật thông tin thành công')
                fetchRequest()
            }
        } catch (error) {
            if (error.response) {
                const { status, data } = error.response;
                if (status === 404) {
                    toast.error("Không tìm thấy người dùng")
                }
                else if (status === 401) {
                    toast.error("Phiên làm việc đã hết hạn")
                }
                else if (status === 403) {
                    toast.error("Bạn không có quyền xóa")
                }
                else {
                    toast.error('Lỗi hệ thống');
                }
            } else {
                toast.error('Lỗi kết nối hoặc không có phản hồi từ server');
            }
        } finally {
            setShowModalEdit(false)
        }
    }


    return (
        <>
            {showModalEdit ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative md:w-[70%] md:h-[80%] md:pl-10 sm:w-[100%] sm:h-[82%] my-8">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-semibold">
                                        Sửa thông tin nhân viên
                                    </h3>
                                    <i className="fa-solid fa-x fa-lg cursor-pointer md:mt-5 sm:mt-3 mr-4" onClick={() => setShowModalEdit(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="my-4 text-gray-700 text-base leading-relaxed">
                                        {
                                            dataUser && dataUser.id &&
                                            <div className="overflow-x-auto">
                                                <table className=" w-full rounded-lg overflow-hidden">
                                                    <tbody>
                                                        <>
                                                            <tr className="div">
                                                                <th className="h-12 text-black border-2">ID:</th>
                                                                <td className="border-2">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" disabled value={dataUser.id} name="id" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 text-black border-2">Email:</th>
                                                                <td className="border-2">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" disabled value={dataUser.email} name="email" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 text-black border-2">Mật khẩu:</th>
                                                                <td className="border-2">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" value={dataUser.password} name="password" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 text-black border-2">Họ:</th>
                                                                <td className="border-2">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" value={dataUser.firstName} name="firstName" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 text-black border-2">Tên:</th>
                                                                <td className="border-2">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" value={dataUser.lastName} name="lastName" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 text-black border-2">Địa chỉ:</th>
                                                                <td className="border-2">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" value={dataUser.address} name="address" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 text-black border-2">SĐT:</th>
                                                                <td className="border-2">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" value={dataUser.phone} name="phone" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>

                                                        </>
                                                    </tbody>
                                                </table>
                                            </div>
                                        }
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center md:justify-end sm:justify-center p-6  border-solid border-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => setShowModalEdit(false)}
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleAction}
                                        >
                                            Lưu
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-30 fixed inset-0 z-[49] bg-black"></div>
                </>
            ) : null}
        </>
    );
}

