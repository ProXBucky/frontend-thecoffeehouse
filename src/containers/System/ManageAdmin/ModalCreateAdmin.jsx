import { toast } from "react-toastify";
import { registerUser } from "../../../api/Auth"
import { useState } from "react";

export default function ModalCreateAdmin({ showModalCreate, setShowModalCreate, fetchRequest }) {

    const initStateInput = {
        email: '', password: '',
        firstName: '', lastName: '',
        phone: '', address: '',
    }

    const [inputValues, setInputValues] = useState(initStateInput);

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

    const handleAction = async () => {
        if (validateForm()) {
            let res = await registerUser({
                email: inputValues.email,
                password: inputValues.password,
                firstName: inputValues.firstName,
                lastName: inputValues.lastName,
                address: inputValues.address,
                phone: inputValues.phone
            })
            if (res.errCode === 0) {
                toast.success('Add new admin success')
            } else {
                toast.error(res.errMessage)
            }
            setInputValues(initStateInput)
            fetchRequest()
            setShowModalCreate(false)
        }
    }

    return (
        <>
            {showModalCreate ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative w-[70%] my-8">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Create new admin
                                    </h3>

                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalCreate(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="my-4 text-slate-500 text-lg leading-relaxed">
                                        <div className="flex flex-wrap gap-28 px-2 justify-center">
                                            <div>
                                                <label className="block mb-3">
                                                    <span className="block font-medium text-slate-700 text-left text-lg">Email</span>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="example@gmail.com" name="email" onChange={handleOnChange} value={inputValues.email} />
                                                </label>
                                                <label className="block mb-3">
                                                    <span className="block font-medium text-slate-700 text-left text-lg">Password</span>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="**********" name="password" onChange={handleOnChange} value={inputValues.password} />
                                                </label>
                                            </div>
                                            <div>
                                                <label className="block mb-3">
                                                    <span className="block font-medium text-slate-700 text-left text-lg">First Name</span>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="AAA" name="firstName" onChange={handleOnChange} value={inputValues.firstName} />
                                                </label>
                                                <label className="block">
                                                    <span className="block font-medium text-slate-700 text-left text-lg">Last Name</span>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="BBB" name="lastName" onChange={handleOnChange} value={inputValues.lastName} />
                                                </label>
                                            </div>
                                            <div>
                                                <label className="block">
                                                    <span className="block font-medium text-slate-700 text-left text-lg">Address</span>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="Ha Noi" name="address" onChange={handleOnChange} value={inputValues.address} />
                                                </label>
                                                <label className="block">
                                                    <span className="block font-medium text-slate-700 text-left text-lg">Phone</span>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="+84xxxxxx" name="phone" onChange={handleOnChange} value={inputValues.phone} />
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
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
            ) : null}
        </>
    )
}