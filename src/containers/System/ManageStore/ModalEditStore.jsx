import { useSelector } from "react-redux"
import { cityAllcodeSelector } from "../../../redux/selector"
import { updateStoreData } from "../../../api/adminAPI"
import { toast } from "react-toastify"
import RiseLoader from "react-spinners/RiseLoader"
import { useState } from "react";
import Loading from "../../../components/Loading"


export default function ModalEditStore({ showModalEdit, setShowModalEdit, dataStore, fetchRequest, handleOnChange, onImageChange, imageURLS }) {
    const cityArr = useSelector(cityAllcodeSelector)
    const [loading, setLoading] = useState(false)

    const validateForm = () => {
        let check = true;
        const valueArr = ['nameStore', 'address', 'cityId', 'mapLink', 'mapHTML', 'description', 'shortDescription', 'image']         // loi validate image
        const valueLabel = ['tên cửa hàng', 'địa chỉ', 'thành phố', 'link bản đồ', 'html bản đồ', 'mô tả', 'mô tả rút gọn', 'ảnh']
        for (let i = 0; i < valueArr.length; i++) {
            if (!dataStore[valueArr[i]]) {
                toast.error('Vui lòng nhập ' + valueLabel[i])
                check = false;
                break
            }
        }
        return check
    }

    const handleAction = async () => {
        if (validateForm()) {
            setLoading(true)
            let res = await updateStoreData({
                id: dataStore.id,  //for findOne
                nameStore: dataStore.nameStore,
                address: dataStore.address,
                cityId: dataStore.cityId,
                description: dataStore.description,
                shortDescription: dataStore.shortDescription,
                mapLink: dataStore.mapLink,
                mapHTML: dataStore.mapHTML,
                image: dataStore.image
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
        }
    }

    const closeModal = () => {
        setShowModalEdit(false)
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
                        <div className="relative lg:w-[85%] md:w-[90%] md:ml-14 sm:w-[95%] my-8 lg:h-[80%] md:h-[90%] sm:h-[80%]">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-semibold">
                                        Sửa thông tin cửa hàng: <br />
                                        {dataStore.nameStore}
                                    </h3>
                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={closeModal}></i>
                                </div>
                                {/*body*/}

                                <div className="relative p-6 flex-auto md:mx-10 sm:mx-3">
                                    <div className="w-full flex justify-between md:flex-row sm:flex-col">
                                        <div>
                                            <label className="text-lg">Tên cửa hàng</label>
                                            <br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type store's name" onChange={handleOnChange} name="nameStore" value={dataStore.nameStore} />
                                        </div>
                                        <div>
                                            <label className="text-lg">Địa chỉ</label><br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type store's address" onChange={handleOnChange} name="address" value={dataStore.address} />
                                        </div>
                                        <div>
                                            <label className="text-lg mr-4">Thành phố</label><br />
                                            <select className="border-2 outline-none bg-white p-2 w-[170px] cursor-pointer" onChange={handleOnChange} name="cityId" value={dataStore.cityId} >
                                                {
                                                    cityArr && cityArr.length > 0 &&
                                                    cityArr.map((item, index) => {
                                                        return <option className="cursor-pointer" key={index} value={item.keyMap}>{item.valueVn}</option>
                                                    })
                                                }
                                            </select>
                                        </div>

                                    </div>
                                    <div className="w-full mt-5 flex md:flex-row sm:flex-col gap-7">
                                        <div className="md:w-[30%] sm:w-full">
                                            <label className="text-lg pr-2">Hình ảnh</label><br />
                                            <input type="file" multiple accept="image/*" onChange={onImageChange} />
                                        </div>
                                        <div className="md:w-[70%] sm:w-full flex">
                                            <div className="flex flex-wrap gap-2">
                                                {
                                                    imageURLS && imageURLS.length > 0 &&
                                                    imageURLS.map((imageSrc, index) => (
                                                        <img src={imageSrc} key={index} alt="not found" width={"120px"} />
                                                    ))
                                                    // :
                                                    // <div className="flex self-center">Hãy nhập hình ảnh cho cửa hàng</div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5 flex gap-7 lg:flex-row md:flex-col sm:flex-col">
                                        <div className="lg:w-1/2 md:w-full">
                                            <label className="text-lg">Mô tả cửa hàng</label><br />
                                            <textarea className="border-2 outline-none bg-white p-2 w-full" rows="6"
                                                name="description"
                                                value={dataStore.description}
                                                onChange={handleOnChange}
                                            >
                                            </textarea>
                                        </div>
                                        <div className="lg:w-1/2 md:w-full">
                                            <div>
                                                <label className="text-lg">Mô tả cửa hàng rút gọn</label><br />
                                                <textarea className="border-2 outline-none bg-white p-2 w-full" rows="3"
                                                    name="shortDescription"
                                                    value={dataStore.shortDescription}
                                                    onChange={handleOnChange}
                                                >
                                                </textarea>
                                            </div>
                                            <div>
                                                <label className="text-lg">Map link</label><br />
                                                <input type="text" className="border-2 outline-none bg-white p-2 w-full" placeholder="Type map link" onChange={handleOnChange} name="mapLink" value={dataStore.mapLink} />
                                            </div>
                                            <div>
                                                <label className="text-lg">Map HTML</label><br />
                                                <input type="text" className="border-2 outline-none bg-white p-2 w-full" placeholder="Type map html" onChange={handleOnChange} name="mapHTML" value={dataStore.mapHTML} />
                                            </div>


                                        </div>

                                    </div>
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                            onClick={closeModal}
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

