import { toast } from "react-toastify";
import { registerUser } from "../../../api/Auth"
import { useState } from "react";

export default function ModalCreateProduct({ showModalCreate, setShowModalCreate }) {

    const initStateInput = {
        email: '', password: '',
        firstName: '', lastName: '',
        phone: '', address: '',
    }

    const [inputValues, setInputValues] = useState(initStateInput);
    const [file, setFile] = useState();

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const validateForm = () => {
        let check = true;
        const valueArr = ['email', 'password', 'firstName', 'lastName', 'address', 'phone']
        const valueLabel = ['Email', 'Password', 'First Name', 'Last Name', 'Address', 'Phone']
        for (let i = 0; i < valueArr.length; i++) {
            if (!inputValues[valueArr[i]]) {
                toast.error('Please type ' + valueLabel[i])
                check = false;
                break
            }
        }
        return check
    }

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleAction = async () => {
    }

    return (
        <>
            {showModalCreate ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative w-[90%] my-8 h-[80%]">

                            <div className="border-2-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between py-5 px-5 border-2-b border-2-solid border-2-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold ml-10">
                                        Create new product
                                    </h3>

                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalCreate(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto mx-10">
                                    <div className="w-full flex justify-between">
                                        <div>
                                            <label className="text-lg">Product Name</label>
                                            <br />
                                            <input type="text" className="border-2 outline-none bg-white p-2" placeholder="Type new product" />
                                        </div>
                                        <div>
                                            <label className="text-lg">Original Price</label><br />
                                            <input className="border-2 outline-none bg-white p-2" placeholder="Type original price" />
                                        </div>
                                        <div>
                                            <label className="text-lg mr-4">Category</label>
                                            <select className="border-2 outline-none bg-white p-2 w-[100px] cursor-pointer">
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="fiat">Fiat</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-between mt-5">
                                        <div className="w-1/3">
                                            <label className="text-lg">Size</label><br />
                                            <div className="py-1">
                                                <input type="checkbox" className="w-5 h-5 cursor-pointer " id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className="text-base"> Small </label><br />
                                            </div>
                                            <div className="py-1">
                                                <input type="checkbox" className="w-5 h-5 cursor-pointer " id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className="text-base"> Small </label><br />
                                            </div>
                                            <div className="py-1">
                                                <input type="checkbox" className="w-5 h-5 cursor-pointer " id="vehicle1" name="vehicle1" value="Bike" />
                                                <label for="vehicle1" className="text-base"> Small </label><br />
                                            </div>

                                        </div>
                                        <div className="pl-28 w-2/3 items-center">
                                            <label className="text-lg pr-2">Image</label>
                                            <input id='upload-Img' type='file' hidden onChange={handleChange} />
                                            <label className='upload text-lg mr-2 cursor-pointer' htmlFor='upload-Img'><i class="fa-solid fa-arrow-up-from-bracket fa-lg"></i></label>
                                            <br />
                                            <div className="border-2 w-[300px] h-[100px] mt-3 flex justify-center">
                                                <img src={file} className="cover h-[100px]  cursor-pointer scale-100 hover:scale-[5] ease-in duration-500" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mt-5">
                                        <label className="text-lg">Description</label><br />
                                        <textarea className="border-2 outline-none bg-white p-2" rows="3" cols="100">
                                            Description
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
                    <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>
    )
}