import { useState } from "react"
import "./Login.scss"
import { loginUser } from "../../api/Auth"
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom"
import { UserSlice } from "../../redux/Slice/UserSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form"

export default function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const history = useHistory()
  const [typePassword, setTypePass] = useState('true')
  const dispatch = useDispatch()

  const handleHideShowPassword = () => {
    setTypePass(!typePassword)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(onSubmit)
    }
  }

  const onSubmit = async (data) => {
    let res = await loginUser({
      email: data.email,
      password: data.password
    })
    if (res && res.errCode === 0) {
      dispatch(UserSlice.actions.loginUserSucces(res.email))
      toast.success('Đăng nhập thành công')
      history.push('/system/dashboard')
    } else {
      toast.error(res.errMessage)
    }
    reset({
      email: '',
      password: ''
    });
  }


  return (
    <>
      <div className="container py-20 flex justify-center">
        <div className="content-left w-full max-w-lg px-5">
          <h2 className=" text-2xl font-medium pt-6">Đăng nhập</h2>
          <p className="pb-2 text-red-500 text-center">( Chỉ dành cho quản trị viên )</p>

          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="w-full px-3">
              <label className="label mb-2 text-black">
                <i className="fa-solid fa-envelope"></i> Email
              </label>
              <input
                {...register("email", {
                  required: "Email là trường bắt buộc",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Vui lòng nhập email hợp lệ",
                  },
                })}
                type="email"
                placeholder="example@email.com"
                className="w-full bg-gray-100 border rounded py-3 px-4 mb-3  focus:outline-none text-black"
              />
              <p className="text-red-500 mb-2">{errors.email?.message}</p>
            </div>
            <div className="password w-full px-3">
              <label className="label mb-2 text-black" >
                <i className="fa-solid fa-key"></i> Mật khẩu
              </label>
              <div className="input-password ">
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Mật khẩu là trường bắt buộc",
                      pattern: {
                        value:
                          /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                        message:
                          "Mật khẩu phải có ít nhất 6 kí tự, 1 chữ hoa, 1 chữ thường, 1 số, 1 kí tự đặc biệt",
                      },
                    })}
                    type={typePassword ? 'password' : 'text'}
                    className="w-full bg-gray-100 border rounded py-3 px-4 mb-3  focus:outline-none text-black"
                    placeholder="************"
                    onKeyPress={handleKeyPress}
                  />
                  {typePassword ? <i className="absolute top-[25%] right-3 cursor-pointer fa-regular fa-eye" onClick={handleHideShowPassword}></i> : <i className="absolute top-[25%] right-3 cursor-pointer fa-regular fa-eye-slash" onClick={handleHideShowPassword}></i>}
                </div>
                <p className="text-red-500 mb-2">{errors.password?.message}</p>
              </div>
            </div>
            <p className="py-3 text-center">Nếu bạn chưa có tài khoản, hãy đăng ký <Link to="/register">tại đây</Link></p>
            <button className="rounded-full mx-24 px-16 mt-3 text-white bg-black text-center" type="submit">Đăng nhập</button>
          </form>
        </div>

      </div >
    </>
  )
}

