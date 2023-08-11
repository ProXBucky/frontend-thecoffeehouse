import { decodeBase64Func } from "../../../utils/base64";
import { formatPrice } from "../../../utils/formatPrice"

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
                                            Detail Order with orderCode: {orderDetail.id}
                                        </h3>

                                        <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalView(false)}></i>
                                    </div>
                                    {/* //body */}
                                    <div className="p-6 flex flex-row mx-10 gap-10">
                                        <div className="w-1/3 text-lg flex justify-center">
                                            <div className="w-fit">
                                                <h2 className="font-medium text-2xl mb-4 text-[#f68122]">Customer information</h2>
                                                <p>Email: {orderDetail.UserData.email}</p>
                                                <p>Name: {orderDetail.UserData.firstName} {orderDetail.UserData.lastName}</p>
                                                <p>Phone: {orderDetail.UserData.phone}</p>
                                                <p>Address: {orderDetail.UserData.address}</p>
                                            </div>
                                        </div>
                                        <div className="w-2/3">
                                            <table className="w-full px-3 overflow-hidden border-2">
                                                <thead className="h-14 bg-[#f68122] text-white">
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Original Price</th>
                                                        <th>Quantity</th>
                                                        <th>Total Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-center">
                                                    {orderDetail.OrderData &&
                                                        orderDetail.OrderData.map((product) => (
                                                            <tr key={product.id} className="border-b-2">
                                                                <td className="w-[200px] px-10 py-5">
                                                                    <img src={decodeBase64Func(product.ProductData.image)} alt={product.ProductData.name} />
                                                                    <p>{product.ProductData.name}</p>
                                                                </td>
                                                                <td>{formatPrice(product.price)} VND</td>
                                                                <td>
                                                                    <span className="text-lg">{product.quantity}</span>
                                                                </td>
                                                                <td>
                                                                    {formatPrice(product.price * product.quantity)} VND
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table >
                                            <div className="w-full flex justify-around text-xl font-medium h-12 mt-10">
                                                <p>Order time: {orderDetail.timeOrder}</p>
                                                <p>Total: {formatPrice(orderDetail.totalPrice)} VND ( {orderDetail.StatusData && orderDetail.StatusData.valueEn && orderDetail.StatusData.valueEn === 'Paid' ?
                                                    <span className="text-green-500">{orderDetail.StatusData.valueEn}</span>
                                                    :
                                                    <span className="text-red-500">{orderDetail.StatusData.valueEn}</span>
                                                } )
                                                </p>


                                            </div>
                                        </div>

                                    </div>


                                    {/* Footer */}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <div>
                                            <button
                                                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg border-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                                onClick={() => setShowModalView(false)}
                                            >
                                                Cancel
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