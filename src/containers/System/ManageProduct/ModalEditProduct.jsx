import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { categoryAllcodeSelector, sizeAllcodeSelector } from "../../../redux/selector"
import { updateProductData } from "../../../api/adminAPI"
import { toast } from "react-toastify"

export default function ModalEditProduct({ showModalEdit, setShowModalEdit, dataProduct, handleOnChange, fetchRequest, handleChangeChecked, selectedCheckboxes, file, handlePreviewImage }) {
    const cateArr = useSelector(categoryAllcodeSelector)
    const sizeArr = useSelector(sizeAllcodeSelector)

    const handleAction = async () => {
        let res = await updateProductData({
            id: dataProduct.id,  //for findOne
            name: dataProduct.name,
            description: dataProduct.description,
            category: dataProduct.category,
            size: selectedCheckboxes.toString(),
            image: dataProduct.image,
            originalPrice: dataProduct.originalPrice,
        })
        if (res.errCode === 0) {
            toast.success('Update information success')
            fetchRequest()
            setShowModalEdit(false)
        } else {
            toast.error(res.errMessage)
        }
    }


    return (
        <>
            {showModalEdit ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative w-[70%] my-8 h-[75%]">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Edit product: {dataProduct.name}
                                    </h3>
                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalEdit(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto mx-10">
                                    <div className="w-full flex justify-between">
                                        <div>
                                            <label className="text-lg">Product Name</label>
                                            <br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type new product" onChange={handleOnChange} name="name" value={dataProduct.name} />
                                        </div>
                                        <div>
                                            <label className="text-lg">Original Price (VND)</label><br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type original price" onChange={handleOnChange} name="originalPrice" value={dataProduct.originalPrice} />
                                        </div>
                                        <div>
                                            <label className="text-lg mr-4">Category</label><br />
                                            <select className="border-2 outline-none bg-white p-2 w-[170px] cursor-pointer" onChange={handleOnChange} name="category" value={dataProduct.category} >
                                                <option className="cursor-pointer" selected>None</option>

                                                {
                                                    cateArr && cateArr.length > 0 &&
                                                    cateArr.map((item, index) => {
                                                        return <option className="cursor-pointer" key={index} value={item.keyMap}>{item.valueEn}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-between mt-5">
                                        <div className="w-1/3 text-red-600 bg-red-300">
                                            <label className="text-lg">Size (optional) MAINTAIN</label><br />
                                            {
                                                sizeArr && sizeArr.length > 0 &&
                                                sizeArr.map((item, index) => {
                                                    return (
                                                        <div className="py-1 flex items-center" key={index}>
                                                            <input type="checkbox" className="w-5 h-5 cursor-pointer mr-2" id={item.id} name="size" value={item.keyMap} onChange={handleChangeChecked} select={selectedCheckboxes.indexOf(item.id) > -1} />
                                                            <label htmlFor={item.id} className="text-base"> {item.valueEn} </label><br />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="pl-[120px] w-2/3 items-center">
                                            <label className="text-lg pr-2">Image</label>
                                            <input id='upload-Img' type='file' hidden name="image" onChange={handlePreviewImage} />
                                            <label className='upload text-lg mr-2 cursor-pointer' htmlFor='upload-Img'><i className="fa-solid fa-arrow-up-from-bracket fa-lg"></i></label>
                                            <br />
                                            <div className="border-2 w-[300px] h-[100px] mt-3 flex justify-center">
                                                <img src={file} className="cover h-[100px]  cursor-pointer scale-100 hover:scale-[3] ease-in duration-100" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5">
                                        <label className="text-lg">Description</label><br />
                                        <textarea className="border-2 outline-none bg-white p-2 w-full h-auto"
                                            name="description"
                                            value={dataProduct.description}
                                            onChange={handleOnChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => setShowModalEdit(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleAction}
                                        >
                                            Save
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

