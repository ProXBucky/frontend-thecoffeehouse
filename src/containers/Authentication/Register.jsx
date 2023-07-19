import { useState } from "react";
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

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleHideShowPassword = () => {
        setTypePass(!typePassword)
    }

    const handleRegister = async () => {
        let res = await registerUser({
            email: inputValues.emailRegister,
            password: inputValues.passwordRegister,
            firstName: inputValues.firstName,
            lastName: inputValues.lastName,
            address: inputValues.address,
            phone: inputValues.phone
        })
        if (res.errCode === 0) {
            toast.success('Register success, please login your account')
        } else {
            toast.error(res.errMessage)
        }
        setInputValues(initStateInput)
    }

    return (
        <>
            <div className="container py-8 flex justify-center">
                <div className="content-right w-full max-w-lg px-5 text-center">
                    <h2 className="text-black">Register new account</h2>
                    <div className="text-left">
                        <div className="flex flex-wrap  mb-1">
                            <div className="w-full px-3 mb-1 ">
                                <label className=" mb-2" >
                                    Email
                                </label>
                                <input className="w-full bg-gray-100 border rounded py-3 px-4 mb-3  focus:outline-none 
             text-black" type="email" placeholder="example@email.com" onChange={handleOnChange} name="emailRegister" value={inputValues.emailRegister} />

                            </div>
                            <div className="password w-full px-3">
                                <label className="mb-2" >
                                    Password
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
                                    First Name
                                </label>
                                <input className="w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none
             text-black "  type="text" placeholder="AAA" onChange={handleOnChange} name="firstName" value={inputValues.firstName} />
                            </div>

                            <div className="w-1/2 px-3 mb-1">
                                <label className=" mb-2" >
                                    Last Name
                                </label>
                                <input className="w-full bg-gray-100 border border-gray-200 rounded py-3 px-4  focus:outline-none
             text-black " type="text" placeholder="BBB" onChange={handleOnChange} name="lastName" value={inputValues.lastName} />
                            </div>

                        </div>
                        <div className="flex flex-wrap  mb-2">
                            <div className="w-full px-3 mb-1">
                                <label className=" mb-2" >
                                    Address
                                </label>
                                <input className="  w-full bg-gray-100 border border-gray-200 rounded py-3 px-4  focus:outline-none
             text-black " type="text" placeholder="Ha Noi" onChange={handleOnChange} name="address" value={inputValues.address} />
                            </div>
                        </div>
                        <div className="flex flex-wrap  mb-2">
                            <div className="w-full px-3 mb-1">
                                <label className=" mb-2" >
                                    Phone
                                </label>
                                <input className="  w-full bg-gray-100 border border-gray-200 rounded py-3 px-4  focus:outline-none
             text-black " type="text" placeholder="+84xxxxxxxxx" onChange={handleOnChange} name="phone" value={inputValues.phone} />
                            </div>
                        </div>
                    </div>
                    <button className="rounded-full  px-16 mt-2 text-white" onClick={handleRegister}>Register</button>
                </div>
            </div>
        </>
    )
}