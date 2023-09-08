import { useSelector } from "react-redux"
import { categoryAllcodeSelector, sizeAllcodeSelector } from "../../../redux/selector"
import { updateProductData } from "../../../api/adminAPI"
import { toast } from "react-toastify"
import RiseLoader from "react-spinners/RiseLoader"
import { useState } from "react";
import Loading from "../../../components/Loading"

// handleChangeChecked, selectedCheckboxes,
export default function ModalEditProduct({ showModalEdit, setShowModalEdit, dataProduct, handleOnChange, fetchRequest, file, setFile, handlePreviewImage }) {
    const cateArr = useSelector(categoryAllcodeSelector)
    // const sizeArr = useSelector(sizeAllcodeSelector)

    const [loading, setLoading] = useState(false)


    const validateForm = () => {
        let check = true;
        const valueArr = ['name', 'originalPrice', 'category', 'description']
        const valueLabel = ['tên sản phẩm', 'giá tiền', 'thể loại', 'mô tả']
        for (let i = 0; i < valueArr.length; i++) {
            if (!dataProduct[valueArr[i]]) {
                toast.error('Vui lòng nhập ' + valueLabel[i])
                check = false;
                break
            }
        }
        if ((typeof (dataProduct.image) === 'object') === true) {
            toast.error('Vui lòng chọn hình ảnh sản phẩm')
            check = false;
        }
        return check
    }


    const handleAction = async () => {
        if (validateForm()) {
            setLoading(true)
            let res = await updateProductData({
                id: dataProduct.id,  //for findOne
                name: dataProduct.name,
                description: dataProduct.description,
                category: dataProduct.category,
                // size: selectedCheckboxes.toString(),
                image: dataProduct.image,
                originalPrice: dataProduct.originalPrice,
            })
            if (res.errCode === 0) {
                setLoading(false)
                toast.success('Cập nhật thông tin thành công')
                fetchRequest()
                setShowModalEdit(false)
            } else {
                setLoading(false)
                toast.error('Lỗi hệ thống')
            }
            setFile('')
        }
    }


    return (
        <>
            {showModalEdit ? (
                <>
                    {loading && (
                        <Loading />
                    )}
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative lg:w-[70%] md:w-[80%] md:ml-10 sm:w-[95%] my-8 md:h-[75%] sm:h-[80%]">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-semibold">
                                        Sửa sản phẩm: {dataProduct.name}
                                    </h3>
                                    <i className="fa-solid fa-x fa-lg cursor-pointer md:mt-5 sm:mt-3 mr-4" onClick={() => setShowModalEdit(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative md:p-6 sm:p-3 flex-auto md:mx-10 sm:mx-5">
                                    <div className="w-full flex justify-between lg:flex-nowrap md:flex-wrap sm:flex-wrap lg:gap-0 md:gap-5 lg:flex-row">
                                        <div>
                                            <label className="text-lg">Tên sản phẩm</label>
                                            <br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type new product" onChange={handleOnChange} name="name" value={dataProduct.name} />
                                        </div>
                                        <div>
                                            <label className="text-lg">Giá tiền (VND)</label><br />
                                            <input type="number" className="border-2 outline-none bg-white p-2" placeholder="Type original price" onChange={handleOnChange} name="originalPrice" value={dataProduct.originalPrice} />
                                        </div>
                                        <div>
                                            <label className="text-lg mr-4">Thể loại</label><br />
                                            <select className="border-2 outline-none bg-white p-2 cursor-pointer" onChange={handleOnChange} name="category" value={dataProduct.category} >
                                                <option className="cursor-pointer" defaultChecked>Không có</option>
                                                {
                                                    cateArr && cateArr.length > 0 &&
                                                    cateArr.map((item, index) => {
                                                        return <option className="cursor-pointer" key={index} value={item.keyMap}>{item.valueVn}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-between mt-5">
                                        {/* <div className="w-1/2 text-red-600 bg-red-300">
                                            <label className="text-lg">Kích thước (optional) MAINTAIN</label><br />
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
                                        </div> */}
                                        <div className="w-full items-center">
                                            <label className="text-lg pr-2">Hình ảnh</label>
                                            <input id='upload-Img' type='file' hidden name="image" onChange={handlePreviewImage} />
                                            <label className='upload text-lg mr-2 cursor-pointer' htmlFor='upload-Img'><i className="fa-solid fa-arrow-up-from-bracket fa-lg"></i></label>
                                            <br />
                                            <div className="border-2 w-full h-[100px] mt-3 flex justify-center">
                                                <img src={file} className="cover h-[100px]  cursor-pointer scale-100 hover:scale-[3] ease-in duration-100" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5">
                                        <label className="text-lg">Mô tả sản phẩm</label><br />
                                        <textarea className="border-2 outline-none bg-white p-2 w-full h-fit"
                                            name="description"
                                            value={dataProduct.description}
                                            onChange={handleOnChange}
                                            rows={5}
                                        >
                                        </textarea>
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

