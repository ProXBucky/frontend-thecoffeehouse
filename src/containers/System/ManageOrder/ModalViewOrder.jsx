import { decodeBase64Func } from "../../../utils/base64";
import { formatPrice } from "../../../utils/formatPrice"
import CustomerInfo from "../../DetailPage/ShoppingCart/CustomerInfo";
import OrderList from "../../DetailPage/ShoppingCart/OrderList";

export default function ModalViewOrder({ showModalView, setShowModalView, orderDetail }) {


    return (
        <>
            {showModalView ?
                (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                        >
                            <div className="relative w-[95%] my-5 h-[95%]">

                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                    <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Chi tiết đơn hàng với mã đơn hàng: {orderDetail.id}
                                        </h3>

                                        <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalView(false)}></i>
                                    </div>
                                    {/* //body */}
                                    <div className="p-6 flex flex-col mx-10 gap-10">
                                        <div className="w-full text-lg flex justify-center">
                                            <CustomerInfo cart={orderDetail} isViewFunction={'true'} />
                                        </div>
                                        <div className="w-full">
                                            <OrderList cart={orderDetail} isViewFunction={'true'} />
                                        </div>

                                    </div>
                                    {/* Footer */}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <div>
                                            <button
                                                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg border-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                                onClick={() => setShowModalView(false)}
                                            >
                                                Hủy
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-30 fixed inset-0 z-[49] bg-black"></div>
                    </>
                ) : null
            }
        </>
    )
}