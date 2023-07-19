import { useState } from "react"
import "./Login.scss"
import { loginUser } from "../../api/Auth"
import { toast } from "react-toastify";
import { Link } from "react-router-dom"

export default function Login() {
  const initStateInput = {
    emailLogin: '', passwordLogin: '',
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

  const handleLogin = async () => {
    let res = await loginUser({
      email: inputValues.emailLogin,
      password: inputValues.passwordLogin
    })
    if (res.errCode === 0) {
      toast.success('Login success')
    } else {
      toast.error(res.errMessage)
    }
    setInputValues(initStateInput)
  }



  return (
    <>
      <div className="container py-20 flex justify-center">
        <div className="content-left w-full max-w-lg px-5">
          <h2 className="text-black text-2xl pb-2 pt-6">Login my account</h2>
          <div className="text-left">
            <div className="w-full px-3">
              <label className="label mb-2 text-black">
                Email
              </label>
              <input className="w-full bg-gray-100 border rounded py-3 px-4 mb-3  focus:outline-none text-black"
                type="email" placeholder="example@email.com" onChange={handleOnChange} name="emailLogin" value={inputValues.emailLogin} />
            </div>
            <div className="password w-full px-3">
              <label className="label mb-2 text-black" >
                Password
              </label>
              <div className="input-password ">
                <input className="w-full bg-gray-100 border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none text-black"
                  type={typePassword ? 'password' : 'text'} placeholder="************"
                  onChange={handleOnChange} name="passwordLogin" value={inputValues.passwordLogin}>
                </input>
                {typePassword ? <i className="icon fa-regular fa-eye" onClick={handleHideShowPassword}></i> : <i className="icon fa-regular fa-eye-slash" onClick={handleHideShowPassword}></i>}
              </div>
            </div>
          </div>
          <p className="py-3">If you don't have account, please register in <Link to="/register">here</Link></p>
          <button className="rounded-full mx-28 px-16 mt-3 text-white" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  )
}

