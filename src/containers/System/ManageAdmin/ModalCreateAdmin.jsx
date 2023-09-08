import { toast } from "react-toastify";
import { registerUser } from "../../../api/Auth"
import { useState } from "react";
import RiseLoader from "react-spinners/RiseLoader"
import Loading from "../../../components/Loading";

export default function ModalCreateAdmin({ showModalCreate, setShowModalCreate, fetchRequest }) {

    const initStateInput = {
        email: '', password: '',
        firstName: '', lastName: '',
        phone: '', address: '',
    }

    const [inputValues, setInputValues] = useState(initStateInput);
    const [loading, setLoading] = useState(false);


    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const validateForm = () => {
        let check = true;
        const valueArr = ['email', 'password', 'firstName', 'lastName', 'address', 'phone']
        const valueLabel = ['email', 'mật khẩu', 'họ đệm', 'tên', 'địa chỉ', 'số điện thoại']
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
            setLoading(true)
            let res = await registerUser({
                email: inputValues.email,
                password: inputValues.password,
                firstName: inputValues.firstName,
                lastName: inputValues.lastName,
                address: inputValues.address,
                phone: inputValues.phone
            })
            if (res.errCode === 0) {
                setLoading(false)
                toast.success('Quản trị viên đang chờ được duyệt')
            } else {
                setLoading(false)
                toast.error('Lỗi hệ thống')

            }
            setInputValues(initStateInput)
            fetchRequest()
            setShowModalCreate(false)
        }
    }

    const handleClose = () => {
        setInputValues(initStateInput)
        setShowModalCreate(false)
    }

    return (
        <>
            {showModalCreate ? (
                <>
                    {loading && (
                        <Loading />
                    )}
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[50] outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative xl:w-[50%] sm:w-[80%] md:ml-10 h-[80%] my-5">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-semibold">
                                        Tạo mới quản trị viên
                                    </h3>

                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={handleClose}></i>
                                </div>
                                {/*body*/}
                                <div className="relative px-6 flex-auto">
                                    <div className="my-4 text-slate-500 text-lg leading-relaxed">
                                        <div className="flex flex-wrap px-2 justify-center">
                                            <div className="w-full">
                                                <div className="block mb-3">
                                                    <p className="block font-medium text-slate-700 text-left text-lg">Email</p>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="example@gmail.com" name="email" onChange={handleOnChange} value={inputValues.email} />
                                                </div>
                                                <div className="block mb-3">
                                                    <p className="block font-medium text-slate-700 text-left text-lg">Mật khẩu</p>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="**********" name="password" onChange={handleOnChange} value={inputValues.password} />
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="block mb-3">
                                                    <p className="block font-medium text-slate-700 text-left text-lg">Họ</p>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="AAA" name="firstName" onChange={handleOnChange} value={inputValues.firstName} />
                                                </div>
                                                <div className="block">
                                                    <p className="block font-medium text-slate-700 text-left text-lg">Tên</p>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="BBB" name="lastName" onChange={handleOnChange} value={inputValues.lastName} />
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <div className="block mb-3">
                                                    <p className="block font-medium text-slate-700 text-left text-lg">Địa chỉ</p>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="Ha Noi" name="address" onChange={handleOnChange} value={inputValues.address} />
                                                </div>
                                                <div className="block">
                                                    <p className="block font-medium text-slate-700 text-left text-lg">Số điện thoại</p>
                                                    <input className="border-slate-200 placeholder-slate-400 bg-gray-100 text-black text-sm p-3 w-full" placeholder="+84xxxxxx" name="phone" onChange={handleOnChange} value={inputValues.phone} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-3  border-solid border-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                            onClick={handleClose}
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
            ) : null}
        </>
    )
}