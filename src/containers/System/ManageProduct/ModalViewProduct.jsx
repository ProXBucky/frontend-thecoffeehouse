import { decodeBase64Func } from "../../../utils/base64";
import { formatPrice } from "../../../utils/formatPrice"

export default function ModalViewProduct({ showModalView, setShowModalView, dataProduct }) {


    return (
        <>
            {showModalView ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative lg:w-[70%] md:w-[80%] md:ml-10 my-8 h-[80%]">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 md:pl-14 sm:pl-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-semibold">
                                        Thông tin sản phẩm: {dataProduct.name}
                                    </h3>

                                    <i className="fa-solid fa-x fa-lg cursor-pointer md:mt-5 sm:mt-3 md:mr-4 sm:ml-2" onClick={() => setShowModalView(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative md:p-6 sm:p-0 flex-auto mx-10">
                                    <div className="w-full flex md:justify-between md:flex-row sm:flex-col-reverse">
                                        <div className="md:w-1/2 sm:w-full md:mt-20 sm:mt-5">
                                            <label className="text-xl font-medium">Tên sản phẩm: </label>{dataProduct.name}<br />
                                            <label className="text-xl font-medium">Giá tiền: </label>{formatPrice(dataProduct.originalPrice)}(VND)<br />
                                            <label className="text-xl font-medium">Thể loại:</label> {dataProduct.categoryData.valueVn}<br />
                                        </div>
                                        <div className="md:w-1/2 sm:w-full flex justify-center h-[255px] ">
                                            <img src={(dataProduct.image)} className="cover h-[255px] w-[255px] overflow-hidden cursor-pointer rounded-xl" style={{ boxShadow: '0px 0px 13px 0px #00000040' }} />
                                        </div>
                                    </div>
                                    <div className="w-full mt-5 ">
                                        <label className="text-xl font-medium">Mô tả sản phẩm</label><br />
                                        <textarea className=" border-2 outline-none bg-white p-2 w-full h-fit"
                                            name="description"
                                            value={dataProduct.description}
                                            rows={4}
                                            disabled
                                        >
                                        </textarea>
                                    </div>
                                </div>


                                {/* Footer */}
                                <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
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