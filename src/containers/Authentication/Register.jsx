import { useState } from "react";
import { useHistory } from 'react-router-dom'
import "./Register.scss"
import { registerUser } from "../../api/Auth"
import { toast } from "react-toastify";

export default function Register() {
    const initStateInput = {
        emailRegister: '', passwordRegister: '',
        firstName: '', lastName: '',
        phone: '', address: '',
    }

    const [inputValues, setInputValues] = useState(initStateInput);

    const [typePassword, setTypePass] = useState('true')

    const history = useHistory();

    const routeChange = () => {
        history.push('/login');
    }

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleHideShowPassword = () => {
        setTypePass(!typePassword)
    }

    const validateForm = () => {
        let check = true;
        const valueArr = ['emailRegister', 'passwordRegister', 'firstName', 'lastName', 'address', 'phone']
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

    const handleRegister = async () => {
        if (validateForm()) {
            let res = await registerUser({
                email: inputValues.emailRegister,
                password: inputValues.passwordRegister,
                firstName: inputValues.firstName,
                lastName: inputValues.lastName,
                address: inputValues.address,
                phone: inputValues.phone
            })
            if (res.errCode === 0) {
                toast.success('Đăng ký thành công, vui lòng chờ duyệt từ quản trị viên')
            }
            setInputValues(initStateInput)
            routeChange()
        }
    }




    return (
        <>
            <div className="container py-8 flex justify-center mt-10">
                <div className="content-right w-full max-w-lg px-5 text-center">
                    <h2 className="font-medium ">Đăng ký tài khoản</h2>
                    <div className="text-left">
                        <div className="flex flex-wrap  mb-1">
                            <div className="w-full px-3 mb-1 ">
                                <label className="mb-2" >
                                    Email
                                </label>
                                <input className="w-full bg-gray-100 border rounded py-3 px-4 mb-3  focus:outline-none 
             text-black" type="email" placeholder="example@email.com" onChange={handleOnChange} name="emailRegister" value={inputValues.emailRegister} />

                            </div>
                            <div className="password w-full px-3">
                                <label className="mb-2" >
                                    Mật khẩu
                                </label>
                                <div className="input-password ">
                                    <input className="w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none text-black
                 " type={typePassword ? 'password' : 'text'} placeholder="************"
                                        onChange={handleOnChange} name="passwordRegister" value={inputValues.passwordRegister}>
                                    </input>
                                    {typePassword ? <i className="icon fa-regular fa-eye" onClick={handleHideShowPassword}></i> : <i className="icon fa-regular fa-eye-slash" onClick={handleHideShowPassword}></i>}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap  mb-1">
                            <div className="w-1/2 px-3">
                                <label className="mb-2" >
                                    Họ
                                </label>
                                <input className="w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none
             text-black "  type="text" placeholder="AAA" onChange={handleOnChange} name="firstName" value={inputValues.firstName} />
                            </div>

                            <div className="w-1/2 px-3 mb-1">
                                <label className=" mb-2" >
                                    Tên
                                </label>
                                <input className="w-full bg-gray-100 border border-gray-200 rounded py-3 px-4  focus:outline-none
             text-black " type="text" placeholder="BBB" onChange={handleOnChange} name="lastName" value={inputValues.lastName} />
                            </div>

                        </div>
                        <div className="flex flex-wrap  mb-2">
                            <div className="w-full px-3 mb-1">
                                <label className=" mb-2" >
                                    Địa chỉ
                                </label>
                                <input className="  w-full bg-gray-100 border border-gray-200 rounded py-3 px-4  focus:outline-none
             text-black " type="text" placeholder="Ha Noi" onChange={handleOnChange} name="address" value={inputValues.address} />
                            </div>
                        </div>
                        <div className="flex flex-wrap  mb-2">
                            <div className="w-full px-3 mb-1">
                                <label className=" mb-2" >
                                    SĐT
                                </label>
                                <input className="  w-full bg-gray-100 border border-gray-200 rounded py-3 px-4  focus:outline-none
             text-black " type="text" placeholder="+84xxxxxxxxx" onChange={handleOnChange} name="phone" value={inputValues.phone} />
                            </div>
                        </div>
                    </div>
                    <button className="rounded-full  px-16 mt-2 text-white" onClick={handleRegister}>Đăng ký</button>
                </div>
            </div >
        </>
    )
}