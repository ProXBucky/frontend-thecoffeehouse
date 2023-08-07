import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { cityAllcodeSelector } from "../../../redux/selector"
import { encodeBase64Func } from "../../../utils/base64";
import { createNewStore, uploadMultiImageStore } from "../../../api/adminAPI"
import { v4 as uuidv4 } from 'uuid';

export default function ModalCreateStore({ showModalCreate, setShowModalCreate, fetchRequest }) {

    const [inputValues, setInputValues] = useState({
        nameStore: '',
        address: '',
        description: '',
        shortDescription: '',
        image: [],
        cityId: '',
        mapLink: '',
        storeId: uuidv4()
    });

    const cityArr = useSelector(cityAllcodeSelector)
    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);
    // const [mapURL, setMapURL] = useState();

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
                storeId: inputValues.storeId,
                image: base64Img
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
        // if (name === 'mapLink') {
        //     setMapURL(fixErrors(value))
        //     setInputValues({ ...inputValues, [name]: value });

        // }
        setInputValues({ ...inputValues, [name]: value });
    };


    const validateForm = () => {
        let check = true;
        const valueArr = ['nameStore', 'address', 'cityId', 'mapLink', 'description', 'shortDescription']         // loi validate image
        const valueLabel = ['Store Name', 'Address', 'City', 'MapLink', 'Description', 'Short Description']
        for (let i = 0; i < valueArr.length; i++) {
            if (!inputValues[valueArr[i]]) {
                toast.error('Please type ' + valueLabel[i])
                check = false;
                break
            }
        }
        return check
    }

    // const fixErrors = (s) => {
    //     s = s.replace("allowfullscreen", "allowFullScreen");
    //     s = s.replace("referrerpolicy", "referrerPolicy");
    //     s = s.replace(`style="border:0;"`, "");
    //     s = s.replace(`width="600"`, `width="300"`);
    //     s = s.replace(`height="450`, `height="200"`);

    //     return s;
    // }


    const handleAction = async () => {
        if (validateForm()) {
            const response = await createNewStore({
                id: inputValues.storeId,
                nameStore: inputValues.nameStore,
                address: inputValues.address,
                cityId: inputValues.cityId,
                mapLink: (inputValues.mapLink),
                description: inputValues.description,
                shortDescription: inputValues.shortDescription,
            })
            const res = await uploadMultiImageStore(inputValues.image)

            if (response.errCode === 0 && res.errCode === 0) {
                toast.success('Create new store succcess')
            } else {
                toast.error(response.errMessage)
            }
            setInputValues({
                nameStore: '',
                address: '',
                cityId: '',
                image: '',
                description: '',
                storeId: '',
                mapLink: '',
                shortDescription: '',
            })
            setImageURLs([])
            setImages('')
            // setMapURL('')
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
                                        Create new store
                                    </h3>
                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalCreate(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto mx-10">
                                    <div className="w-full flex flex-wrap justify-between">
                                        <div>
                                            <label className="text-lg">Store Name</label>
                                            <br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type store's name" onChange={handleOnChange} name="nameStore" value={inputValues.nameStore} />
                                        </div>
                                        <div>
                                            <label className="text-lg">Address</label><br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type store's address" onChange={handleOnChange} name="address" value={inputValues.address} />
                                        </div>
                                        <div>
                                            <label className="text-lg mr-4">City</label><br />
                                            <select className="border-2 outline-none bg-white p-2 w-[170px] cursor-pointer" onChange={handleOnChange} name="cityId" value={inputValues.cityId} >
                                                <option className="cursor-pointer" defaultChecked>None</option>

                                                {
                                                    cityArr && cityArr.length > 0 &&
                                                    cityArr.map((item, index) => {
                                                        return <option className="cursor-pointer" key={index} value={item.keyMap}>{item.valueEn}</option>
                                                    })
                                                }
                                            </select>
                                        </div>

                                    </div>
                                    <div className="w-full mt-5 flex gap-7">
                                        <div>
                                            <label className="text-lg pr-2">Image</label><br />
                                            <input type="file" multiple accept="image/*" onChange={onImageChange} />
                                        </div>
                                        <div className="flex flex-wrap">
                                            {imageURLS.map((imageSrc, index) => (
                                                <img src={imageSrc} key={index} alt="not found" width={"100px"} className="border m-0.5" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="w-full mt-5 flex gap-7">
                                        <div className="w-1/2">
                                            <label className="text-lg">Description</label><br />
                                            <textarea className="border-2 outline-none bg-white p-2 w-full" rows="6"
                                                name="description"
                                                value={inputValues.description}
                                                onChange={handleOnChange}
                                            >
                                            </textarea>
                                        </div>
                                        <div className="w-1/2">
                                            <div>
                                                <label className="text-lg">Map link</label><br />
                                                <input type="text" className="border-2 outline-none bg-white p-2 w-full" placeholder="Type map link" onChange={handleOnChange} name="mapLink" value={inputValues.mapLink} />
                                            </div>
                                            <div className="">
                                                <label className="text-lg">Short Description</label><br />
                                                <textarea className="border-2 outline-none bg-white p-2 w-full" rows="3"
                                                    name="shortDescription"
                                                    value={inputValues.shortDescription}
                                                    onChange={handleOnChange}
                                                >
                                                </textarea>
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
                                            Cancel
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleAction}
                                        >
                                            Create
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
