import { toast } from "react-toastify"
import { updateAdminData } from "../../../api/adminAPI"

export default function ModalEditAdmin({ showModalEdit, setShowModalEdit, dataUser, handleOnChange, fetchRequest }) {

    const handleAction = async () => {
        let res = await updateAdminData({
            id: dataUser.id,  //for findOne
            password: dataUser.password,
            firstName: dataUser.firstName,
            lastName: dataUser.lastName,
            address: dataUser.address,
            phone: dataUser.phone
        })
        if (res.errCode === 0) {
            toast.success('Cập nhật thông tin thành công')
            fetchRequest()
            setShowModalEdit(false)
        } else {
            toast.error('Lỗi hệ thống')

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
                                                                <th className="h-12 bg-[#f68122] text-white">ID:</th>
                                                                <td className="bg-[#f8a159]">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" disabled value={dataUser.id} name="id" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 bg-[#f68122] text-white">Email:</th>
                                                                <td className="bg-[#f8a159]">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" disabled value={dataUser.email} name="email" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 bg-[#f68122] text-white">Mật khẩu:</th>
                                                                <td className="bg-[#f6c7a0]">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" value={dataUser.password} name="password" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 bg-[#f68122] text-white">Họ:</th>
                                                                <td className="bg-[#f6c7a0]">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" value={dataUser.firstName} name="firstName" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 bg-[#f68122] text-white">Tên:</th>
                                                                <td className="bg-[#f6c7a0]">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" value={dataUser.lastName} name="lastName" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 bg-[#f68122] text-white">Địa chỉ:</th>
                                                                <td className="bg-[#f6c7a0]">
                                                                    <input className="px-6 py-3 bg-transparent w-full outline-none" value={dataUser.address} name="address" onChange={handleOnChange} />
                                                                </td>
                                                            </tr>
                                                            <tr className="div">
                                                                <th className="h-12 bg-[#f68122] text-white">SĐT:</th>
                                                                <td className="bg-[#f6c7a0]">
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

