import { useState } from "react";
import { useHistory } from 'react-router-dom'
import "./Register.scss"
import { registerUser } from "../../api/Auth"
import { toast } from "react-toastify";
import { useForm } from "react-hook-form"
import NavbarMobile from "../HomePage/NavbarMobile";

export default function Register() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [typePassword, setTypePass] = useState('true')
    const history = useHistory();

    const handleHideShowPassword = () => {
        setTypePass(!typePassword)
    }

    const onSubmit = async (data) => {
        let res = await registerUser({
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phone: data.phone
        })
        if (res.errCode === 0) {
            toast.success('Đăng ký thành công, vui lòng chờ duyệt từ quản trị viên')
            history.push('/login');
        } else {
            toast.error(res.errMessage)
        }
        reset({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phone: ''
        });
    }

    return (
        <>
            <NavbarMobile />
            <div className="container py-8 flex justify-center mt-10">
                <div className="content-right w-full max-w-lg h-fit px-5 text-center">
                    <h2 className="font-medium ">Đăng ký tài khoản</h2>

                    <div className="text-left">
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

                            <div className="flex flex-wrap  mb-1">
                                <div className="w-full px-3 mb-1 ">
                                    <label className="mb-2" >
                                        Email
                                    </label>
                                    <input className="w-full bg-gray-100 border rounded py-3 px-4 mb-3  focus:outline-none text-black"
                                        type="email" placeholder="example@email.com"
                                        {...register("email", {
                                            required: "Email là trường bắt buộc",
                                            pattern: {
                                                value:
                                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: "Vui lòng nhập email hợp lệ",
                                            },
                                        })}
                                    />
                                    <p className="text-red-500 mb-2">{errors.email?.message}</p>
                                </div>
                                <div className="password w-full px-3">
                                    <label className="mb-2" >
                                        Mật khẩu
                                    </label>
                                    <div className="input-password">
                                        <div className="relative">
                                            <input className="w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none text-black"
                                                type={typePassword ? 'password' : 'text'} placeholder="************"
                                                {...register("password", {
                                                    required: "Mật khẩu là trường bắt buộc",
                                                    pattern: {
                                                        value:
                                                            /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                                                        message:
                                                            "Mật khẩu phải có ít nhất 6 kí tự, 1 chữ hoa, 1 chữ thường, 1 số, 1 kí tự đặc biệt",
                                                    },
                                                })}
                                            />
                                            {typePassword ? <i className="absolute top-[25%] right-5 cursor-pointer fa-regular fa-eye" onClick={handleHideShowPassword}></i> : <i className="absolute top-[25%] right-5 cursor-pointer fa-regular fa-eye-slash" onClick={handleHideShowPassword}></i>}
                                        </div>
                                        <p className="text-red-500 mb-2">{errors.password?.message}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap  mb-1">
                                <div className="w-1/2 px-3">
                                    <label className="mb-2" >
                                        Họ đệm
                                    </label>
                                    <input className="w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none text-black "
                                        type="text" placeholder="Nguyễn Văn"
                                        {...register("firstName", {
                                            required: "Đây là trường bắt buộc",
                                        })}
                                    />
                                    <p className="text-red-500 mb-2">{errors.firstName?.message}</p>
                                </div>

                                <div className="w-1/2 px-3 mb-1">
                                    <label className=" mb-2" >
                                        Tên
                                    </label>
                                    <input className="w-full bg-gray-100 border border-gray-200 rounded py-3 px-4  focus:outline-none text-black "
                                        type="text" placeholder="A"
                                        {...register("lastName", {
                                            required: "Đây là trường bắt buộc",
                                        })}
                                    />
                                    <p className="text-red-500 mb-2">{errors.lastName?.message}</p>
                                </div>

                            </div>
                            <div className="flex flex-wrap  mb-2">
                                <div className="w-full px-3 mb-1">
                                    <label className=" mb-2" >
                                        Địa chỉ
                                    </label>
                                    <input className="  w-full bg-gray-100 border border-gray-200 rounded py-3 px-4  focus:outline-none text-black "
                                        type="text" placeholder="Ha Noi"
                                        {...register("address", {
                                            required: "Đây là trường bắt buộc",
                                        })}
                                    />
                                    <p className="text-red-500 mb-2">{errors.address?.message}</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap  mb-2">
                                <div className="w-full px-3 mb-1">
                                    <label className=" mb-2" >
                                        SĐT
                                    </label>
                                    <input className="  w-full bg-gray-100 border border-gray-200 rounded py-3 px-4  focus:outline-none text-black"
                                        placeholder="+84xxxxxxxxx"
                                        {...register("phone", {
                                            required: "Đây là trường bắt buộc",
                                            pattern: {
                                                value:
                                                    /^[0-9]{1,11}$/,
                                                message:
                                                    "Số điện thoại sẽ ít hơn 11 kí tự và tất cả kí tự là chữ số",
                                            },
                                        })}
                                    />
                                    <p className="text-red-500 mb-2">{errors.phone?.message}</p>
                                </div>
                            </div>
                            <button className="rounded-full bg-black px-10 mx-40 mt-2 text-white" type="submit">Đăng ký</button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}