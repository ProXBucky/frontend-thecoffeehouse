import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { cityAllcodeSelector } from "../../../redux/selector"
import { updateStoreData } from "../../../api/adminAPI"
import { toast } from "react-toastify"
import { decodeBase64Func } from "../../../utils/base64"


export default function ModalEditStore({ showModalEdit, setShowModalEdit, dataStore, fetchRequest, handleOnChange, onImageChange, imageURLS }) {
    const cityArr = useSelector(cityAllcodeSelector)

    const handleAction = async () => {
        let res = await updateStoreData({
            id: dataStore.id,  //for findOne
            nameStore: dataStore.nameStore,
            address: dataStore.address,
            cityId: dataStore.cityId,
            description: dataStore.description,
            shortDescription: dataStore.shortDescription,
            mapLink: dataStore.mapLink,
            image: dataStore.image
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
                        <div className="relative w-[85%] my-8  h-[90%]">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Edit store: {dataStore.nameStore}
                                    </h3>
                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalEdit(false)}></i>
                                </div>
                                {/*body*/}

                                <div className="relative p-6 flex-auto mx-10">
                                    <div className="w-full flex justify-between">
                                        <div>
                                            <label className="text-lg">Store Name</label>
                                            <br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type store's name" onChange={handleOnChange} name="nameStore" value={dataStore.nameStore} />
                                        </div>
                                        <div>
                                            <label className="text-lg">Address</label><br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type store's address" onChange={handleOnChange} name="address" value={dataStore.address} />
                                        </div>
                                        <div>
                                            <label className="text-lg mr-4">City</label><br />
                                            <select className="border-2 outline-none bg-white p-2 w-[170px] cursor-pointer" onChange={handleOnChange} name="cityId" value={dataStore.cityId} >
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
                                        <div className="w-[29%]">
                                            <label className="text-lg pr-2">Image</label><br />
                                            <input type="file" multiple accept="image/*" onChange={onImageChange} />
                                        </div>
                                        <div className="border-2 w-[71%] flex flex-col">
                                            <label>Before:</label>
                                            <div className="flex flex-wrap">
                                                {dataStore && dataStore.imageData && dataStore.imageData.length > 0 ?
                                                    dataStore.imageData.map((imageSrc, index) => (
                                                        <img src={decodeBase64Func(imageSrc.image)} key={index} alt="not found" width={"120px"} className="border m-0.5" />
                                                    ))
                                                    :
                                                    "None"
                                                }
                                            </div>
                                            <label>After:</label>
                                            <div className="flex flex-wrap">
                                                {
                                                    imageURLS && imageURLS.length > 0 ?
                                                        imageURLS.map((imageSrc, index) => (
                                                            <img src={imageSrc} key={index} alt="not found" width={"120px"} className="border m-0.5" />
                                                        ))
                                                        :
                                                        "None"
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5 flex gap-7">
                                        <div className="w-1/2">
                                            <label className="text-lg">Description</label><br />
                                            <textarea className="border-2 outline-none bg-white p-2 w-full" rows="6"
                                                name="description"
                                                value={dataStore.description}
                                                onChange={handleOnChange}
                                            >
                                            </textarea>
                                        </div>
                                        <div className="w-1/2">
                                            <div>
                                                <label className="text-lg">Map link</label><br />
                                                <input type="text" className="border-2 outline-none bg-white p-2 w-full" placeholder="Type map link" onChange={handleOnChange} name="mapLink" value={dataStore.mapLink} />
                                            </div>
                                            <div>
                                                <label className="text-lg">Short Description</label><br />
                                                <textarea className="border-2 outline-none bg-white p-2 w-full" rows="3"
                                                    name="shortDescription"
                                                    value={dataStore.shortDescription}
                                                    onChange={handleOnChange}
                                                >
                                                </textarea>
                                            </div>


                                        </div>

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

