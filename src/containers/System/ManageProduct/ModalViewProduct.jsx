import { useState } from "react";
import { useSelector } from "react-redux"
import { categoryAllcodeSelector, sizeAllcodeSelector } from "../../../redux/selector"
import { decodeBase64Func } from "../../../utils/base64";
import { formatPrice } from "../../../utils/formatPrice"

export default function ModalViewProduct({ showModalView, setShowModalView, dataProduct }) {
    // const [dataProduct, setInputValues] = useState({
    //     name: dataProduct.name,
    //     originalPrice: dataProduct.originalPrice,
    //     category: dataProduct.category,
    //     image: dataProduct.image,
    //     description: dataProduct.description
    // });
    const cateArr = useSelector(categoryAllcodeSelector)
    const sizeArr = useSelector(sizeAllcodeSelector)
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);



    return (
        <>
            {showModalView ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative w-[70%] my-8 h-[80%]">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        View product: {dataProduct.name}
                                    </h3>

                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalView(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto mx-10">
                                    <div className="w-full flex justify-between">
                                        <div className="w-1/3 mt-20 ">
                                            <label className="text-xl font-medium">Product Name: </label>{dataProduct.name}<br />
                                            <label className="text-xl font-medium">Original Price: </label>{formatPrice(dataProduct.originalPrice)}(VND)<br />
                                        </div>
                                        <div className="w-1/3 flex justify-center h-[255px] ">
                                            <img src={decodeBase64Func(dataProduct.image)} className="cover h-[255px] w-[255px] overflow-hidden cursor-pointer rounded-xl" style={{ boxShadow: '0px 0px 13px 0px #00000040' }} />
                                        </div>

                                        <div className="w-1/3 mt-20 text-center">
                                            <label className="text-xl font-medium">Category:</label> {dataProduct.categoryData.valueEn}<br />
                                            {/* <label className="text-xl font-medium">Size:  </label>{dataProduct.sizeData ? dataProduct.sizeData.valueEn : 'None'}<br /> */}
                                            <label className="text-xl font-medium">Size:  </label>{dataProduct.size ? dataProduct.size : 'None'}<br />
                                        </div>
                                    </div>
                                    <div className="w-full mt-5 ">
                                        <label className="text-xl font-medium">Description</label><br />
                                        <textarea className=" border-2 outline-none bg-white p-2" rows="3" cols="100"
                                            name="description"
                                            value={dataProduct.description}
                                            disabled
                                        >
                                        </textarea>
                                    </div>
                                </div>


                                {/* Footer */}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => setShowModalView(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    )
}