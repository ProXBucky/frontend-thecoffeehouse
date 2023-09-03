import { toast } from "react-toastify"
import { deleteAdmin } from "../../../api/adminAPI"

export default function ModalDeleteAdmin({ showModalDelete, setShowModalDelete, dataUser, fetchRequest }) {

    const handleAction = async () => {
        let res = await deleteAdmin(dataUser.id)
        if (res.errCode === 0) {
            toast.success('Xóa nhân viên thành công')
            fetchRequest()
            setShowModalDelete(false)
        } else {
            toast.error('Lỗi hệ thống')

        }
    }

    return (
        <>
            {showModalDelete ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[50] outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative w-[70%] my-8">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">

                                        Xóa nhân viên

                                    </h3>

                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalDelete(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto text-center">
                                    <div className="my-4 text-slate-500 text-lg leading-relaxed">
                                        <div>
                                            <i className="fa-solid fa-circle-exclamation fa-2xl text-red-600"></i>
                                            <p className="text-3xl font-bold text-red-500 mt-4">
                                                Bạn chắc chắn rồi đúng không?
                                            </p>
                                        </div>
                                        <div className="flex justify-end  border-solid border-slate-200 rounded-b">
                                            <div className="py-3">
                                                <button
                                                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                                    onClick={() => setShowModalDelete(false)}
                                                >
                                                    Hủy
                                                </button>
                                                <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={handleAction}
                                                >
                                                    Đúng
                                                </button>
                                            </div>

                                        </div>
                                    </div>
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