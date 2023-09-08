import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { cityAllcodeSelector } from "../../../redux/selector"
import { encodeBase64Func } from "../../../utils/base64";
import { createNewStore, uploadMultiImageStore } from "../../../api/adminAPI"
import RiseLoader from "react-spinners/RiseLoader"
import Loading from "../../../components/Loading";

export default function ModalCreateStore({ showModalCreate, setShowModalCreate, fetchRequest }) {

    const [inputValues, setInputValues] = useState({
        nameStore: '',
        address: '',
        description: '',
        shortDescription: '',
        image: [],
        cityId: '',
        mapLink: '',
        mapHTML: '',
    });

    const cityArr = useSelector(cityAllcodeSelector)
    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleImageStore()
    }, [images]);

    const handleImageStore = () => {
        let newImageUrls = [];
        let base64Arr = []
        if (images.length < 1) return;
        images.forEach(async (image) => {
            newImageUrls.push(URL.createObjectURL(image))
            let base64Img = await encodeBase64Func(image)
            base64Arr.push({
                base64Image: base64Img
            })
        });
        setImageURLs(newImageUrls);
        setInputValues({ ...inputValues, ['image']: base64Arr });
    }

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    }

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };


    const validateForm = () => {
        let check = true;
        const valueArr = ['nameStore', 'address', 'cityId', 'mapLink', 'mapHTML', 'description', 'shortDescription']         // loi validate image
        const valueLabel = ['tên cửa hàng', 'địa chỉ', 'thành phố', 'link bản đồ', 'html bản đồ', 'mô tả', 'mô tả rút gọn']
        for (let i = 0; i < valueArr.length; i++) {
            if (!inputValues[valueArr[i]]) {
                toast.error('Vui lòng nhập ' + valueLabel[i])
                check = false;
                break
            }
        }
        if (inputValues['image'].length <= 0) {
            toast.error('Vui lòng chọn ảnh cho cửa hàng')
            check = false;
        }
        return check
    }

    const handleAction = async () => {
        if (validateForm()) {
            setLoading(true)
            const response = await createNewStore({
                nameStore: inputValues.nameStore,
                address: inputValues.address,
                cityId: inputValues.cityId,
                mapLink: inputValues.mapLink,
                mapHTML: inputValues.mapHTML,
                description: inputValues.description,
                shortDescription: inputValues.shortDescription,
                image: inputValues.image
            })

            if (response.errCode === 0) {
                setLoading(false)
                toast.success('Tạo cửa hàng thành công')
            } else {
                setLoading(false)
                toast.error('Lỗi hệ thống')

            }
            setInputValues({
                nameStore: '',
                address: '',
                cityId: '',
                image: '',
                description: '',
                storeId: '',
                mapLink: '',
                mapHTML: '',
                shortDescription: '',
            })
            setImageURLs([])
            setImages('')
            setShowModalCreate(false)
            fetchRequest()
        }
    }


    return (
        <>
            {showModalCreate ? (
                <>

                    {loading && (
                        <Loading />
                    )}
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative lg:w-[70%] md:w-[80%] sm:w-full md:ml-10 my-8 h-[80%]">
                            <div className="border-2-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between py-5 px-5 border-2-b border-2-solid border-2-slate-200 rounded-t">
                                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-semibold ml-10">
                                        Thêm cửa hàng mới
                                    </h3>
                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalCreate(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto mx-10">
                                    <div className="w-full flex flex-wrap justify-between lg:gap-0 md:gap-5">
                                        <div>
                                            <label className="text-lg">Tên cửa hàng</label>
                                            <br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Hãy nhập tên cửa hàng" onChange={handleOnChange} name="nameStore" value={inputValues.nameStore} />
                                        </div>
                                        <div>
                                            <label className="text-lg">Địa chỉ</label><br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Hãy nhập địa chỉ cửa hàng" onChange={handleOnChange} name="address" value={inputValues.address} />
                                        </div>
                                        <div>
                                            <label className="text-lg mr-4">Thành phố</label><br />
                                            <select className="border-2 outline-none bg-white p-2 w-[170px] cursor-pointer" onChange={handleOnChange} name="cityId" value={inputValues.cityId} >
                                                <option className="cursor-pointer" defaultChecked>Không có</option>

                                                {
                                                    cityArr && cityArr.length > 0 &&
                                                    cityArr.map((item, index) => {
                                                        return <option className="cursor-pointer" key={index} value={item.keyMap}>{item.valueVn}</option>
                                                    })
                                                }
                                            </select>
                                        </div>

                                    </div>
                                    <div className="w-full mt-5 flex gap-20">
                                        <div>
                                            <label className="text-lg pr-2">Hình ảnh</label><br />
                                            <input type="file" multiple accept="image/*" onChange={onImageChange} />
                                        </div>
                                        <div className="flex flex-wrap">
                                            {imageURLS.map((imageSrc, index) => (
                                                <img src={imageSrc} key={index} alt="not found" width={"100px"} className="border m-0.5" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full mt-5 flex gap-7 lg:flex-row md:flex-col sm:flex-col">
                                        <div className="lg:w-1/2 md:w-full">
                                            <label className="text-lg">Mô tả cửa hàng</label><br />
                                            <textarea className="border-2 outline-none bg-white p-2 w-full" rows="3"
                                                name="description"
                                                value={inputValues.description}
                                                onChange={handleOnChange}
                                            >
                                            </textarea>
                                        </div>
                                        <div className="lg:w-1/2 md:w-full">
                                            <div className="">
                                                <label className="text-lg">Mô tả cửa hàng rút gọn</label><br />
                                                <textarea className="border-2 outline-none bg-white p-2 w-full" rows="3"
                                                    name="shortDescription"
                                                    value={inputValues.shortDescription}
                                                    onChange={handleOnChange}
                                                >
                                                </textarea>
                                            </div>
                                            <div>
                                                <label className="text-lg">Map link</label><br />
                                                <input type="text" className="border-2 outline-none bg-white p-2 w-full" placeholder="Nhập link bản đồ" onChange={handleOnChange} name="mapLink" value={inputValues.mapLink} />
                                            </div>
                                            <div>
                                                <label className="text-lg">Map HTML</label><br />
                                                <input type="text" className="border-2 outline-none bg-white p-2 w-full" placeholder="Nhập HTML bản đồ" onChange={handleOnChange} name="mapHTML" value={inputValues.mapHTML} />
                                            </div>

                                        </div>

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
            )
                :
                null
            }


        </>
    )
}
