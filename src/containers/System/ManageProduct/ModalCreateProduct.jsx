import { toast } from "react-toastify";
import { useState } from "react";
import { useSelector } from "react-redux"
import { categoryAllcodeSelector, sizeAllcodeSelector } from "../../../redux/selector"
import { encodeBase64Func } from "../../../utils/base64";
import { createNewProduct } from "../../../api/adminAPI"
export default function ModalCreateProduct({ showModalCreate, setShowModalCreate, fetchRequest }) {

    const [inputValues, setInputValues] = useState({
        name: '',
        originalPrice: '',
        category: '',
        image: '',
        description: ''
    });
    const [file, setFile] = useState();
    const cateArr = useSelector(categoryAllcodeSelector)
    // const sizeArr = useSelector(sizeAllcodeSelector)
    // const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    // const handleChangeChecked = (e) => {
    //     const { id, value } = e.target
    //     const updatedCheckboxes = [...selectedCheckboxes];
    //     // Find index
    //     const findIdx = updatedCheckboxes.indexOf(id);
    //     // Index > -1 means that the item exists and that the checkbox is checked
    //     // and in that case we want to remove it from the array and uncheck it
    //     if (findIdx > -1) {
    //         updatedCheckboxes.splice(findIdx, 1);
    //     } else {
    //         // updatedCheckboxes.push(id);
    //         updatedCheckboxes.push(value);
    //     }
    //     setSelectedCheckboxes(updatedCheckboxes);
    // };

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handlePreviewImage = async (e) => {
        const { name, files } = e.target
        let file = files[0]
        if (file) {
            setFile(URL.createObjectURL(file));
            const base64 = await encodeBase64Func(file)
            setInputValues({ ...inputValues, [name]: base64 });
        }
    }

    const validateForm = () => {
        let check = true;
        const valueArr = ['name', 'originalPrice', 'category', 'image', 'description']
        const valueLabel = ['tên sản phẩm', 'giá tiền', 'thể loại', 'hình ảnh', 'mô tả sản phẩm']
        for (let i = 0; i < valueArr.length; i++) {
            if (!inputValues[valueArr[i]]) {
                toast.error('Vui lòng nhập ' + valueLabel[i])
                check = false;
                break
            }
        }
        return check
    }


    const handleAction = async () => {
        if (validateForm()) {
            const response = await createNewProduct({
                name: inputValues.name,
                originalPrice: inputValues.originalPrice,
                category: inputValues.category,
                // size: selectedCheckboxes.toString(),
                image: inputValues.image,
                description: inputValues.description
            })
            if (response.errCode === 0) {
                toast.success('Thêm sản phẩm mới thành công')
            } else {
                toast.error('Lỗi hệ thống')

            }
            setInputValues({
                name: '',
                originalPrice: '',
                category: '',
                image: '',
                description: ''
            })
            setFile('')
            // setSelectedCheckboxes([])
            setShowModalCreate(false)
            fetchRequest()
        }
    }

    return (
        <>
            {showModalCreate ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative w-[70%] my-8 h-[80%]">
                            <div className="border-2-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between py-5 px-5 border-2-b border-2-solid border-2-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold ml-10">
                                        Tạo sản phẩm mới
                                    </h3>
                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalCreate(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto mx-10">
                                    <div className="w-full flex justify-between flex-row">
                                        <div>
                                            <label className="text-lg">Tên sản phẩm</label>
                                            <br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type new product" onChange={handleOnChange} name="name" value={inputValues.name} />
                                        </div>
                                        <div>
                                            <label className="text-lg">Giá tiền (VND)</label><br />
                                            <input type="number" className="border-2 outline-none bg-white p-2" placeholder="Type original price" onChange={handleOnChange} name="originalPrice" value={inputValues.originalPrice} />
                                        </div>
                                        <div>
                                            <label className="text-lg mr-4">Thể loại</label><br />
                                            <select className="border-2 outline-none bg-white p-2 w-[170px] cursor-pointer" onChange={handleOnChange} name="category" value={inputValues.category} >
                                                <option className="cursor-pointer" selected>Không có</option>
                                                {
                                                    cateArr && cateArr.length > 0 &&
                                                    cateArr.map((item, index) => {
                                                        return <option className="cursor-pointer" key={index} value={item.keyMap}>{item.valueVn}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5">
                                        {/* <div className="w-1/3">
                                            <label className="text-lg">Kích cỡ (optional)</label><br />
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
                                                <img src={file} className="cover h-auto  cursor-pointer scale-100 hover:scale-[3] ease-in duration-100" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5">
                                        <label className="text-lg">Mô tả sản phẩm</label><br />
                                        <textarea className="border-2 outline-none bg-white p-2 w-full" rows="3"
                                            name="description"
                                            value={inputValues.description}
                                            onChange={handleOnChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-2-t border-2-solid border-2-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => setShowModalCreate(false)}
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleAction}
                                        >
                                            Tạo
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
