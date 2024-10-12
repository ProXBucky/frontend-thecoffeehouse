import { toast } from "react-toastify"
import { useSelector } from "react-redux";
import { cookieSelector } from "../../../redux/selector"
import { useState } from "react";
import Loading from "../../../components/Loading";
import { deleteProduct } from "../../../api/adminAPI";


export default function ModalDeleteProduct({ showModalDelete, setShowModalDelete, dataProduct, fetchRequest }) {
    const [loading, setLoading] = useState(false)
    let cookieValue = useSelector(cookieSelector)

    const handleAction = async () => {
        try {
            setLoading(true)
            let res = await deleteProduct(dataProduct.id, cookieValue)
            if (res.status === 200) {
                toast.success('Xóa sản phẩm thành công')
                fetchRequest()
            }
        } catch (error) {
            console.log(error)
            if (error.response) {
                const { status, data } = error.response;
                if (status === 404) {
                    toast.error('Không tìm thấy sản phẩm')
                }
                else if (status === 401) {
                    toast.error('Phiên làm việc đã hết')
                }
                else if (status === 403) {
                    toast.error('Bạn không có quyền')
                }
                else {
                    toast.error('Lỗi hệ thống')
                }
            } else {
                toast.error('Lỗi kết nối hoặc không có phản hồi từ server');
            }
        } finally {
            setLoading(false)
            setShowModalDelete(false)
        }
    }

    return (
        <>
            {showModalDelete ? (
                <>
                    {loading && (
                        <Loading />
                    )}
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative lg:w-[70%] md:w-[80%] md:ml-10 sm:w-[90%] sm:h-[70%] my-8">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-semibold">
                                        Xóa sản phẩm: {dataProduct.name}
                                    </h3>

                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalDelete(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-4 flex-auto text-center">
                                    <div className="my-4 text-slate-500 text-lg leading-relaxed">
                                        <div>
                                            <i className="fa-solid fa-circle-exclamation fa-2xl text-red-600"></i>
                                            <p className="md:text-3xl sm:text-2xl font-bold text-red-500 mt-4">
                                                Bạn chắc chắn rồi đúng không?
                                            </p>
                                        </div>
                                        <div className="flex items-center md:justify-end sm:justify-around p-6 border-solid border-slate-200 rounded-b">
                                            <div>
                                                <button
                                                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                                    onClick={() => setShowModalDelete(false)}
                                                >
                                                    Hủy
                                                </button>
                                                <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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