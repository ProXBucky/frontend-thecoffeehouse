import { useState } from "react"
import "./Login.scss"

export default function Login() {

  return (
    <>
      <div className="container flex px-52 py-10 gap-80">
        <div className="content-left w-full max-w-lg">
          <h2 className="text-black">Login my account</h2>
          <div class="w-full px-3">
            <label class="mb-2">
              Email
            </label>
            <input class="  w-full bg-gray-200 border 
                  rounded py-3 px-4 mb-3  focus:outline-none text-black"  type="email" placeholder="demo@email.com" />
          </div>
          <div class="w-full px-3">
            <label class=" mb-2" >
              Password
            </label>
            <input class="  w-full bg-gray-200 border border-gray-200 
                  rounded py-3 px-4 mb-3  focus:outline-none text-black
                 focus:border-gray-500" type="password" placeholder="***********" />
          </div>
          <button class="rounded-full mx-28 px-16">Login</button>
        </div>


        <div className="content-right w-full max-w-lg">
          <h2 className="text-black">Register new account</h2>
          <div class="flex flex-wrap  mb-1">
            <div class="w-full px-3 mb-1 ">
              <label class=" mb-2" >
                Email
              </label>
              <input class="w-full bg-gray-200 border rounded py-3 px-4 mb-3  focus:outline-none 
             text-black" type="email" placeholder="demo@email.com" />

            </div>
            <div class="w-full px-3">
              <label class="mb-2" >
                Password
              </label>
              <input class="  w-full bg-gray-200 border border-gray-200 rounded py-3 px-4  focus:outline-none
             text-black focus:border-gray-500" type="password" placeholder="*****" />
            </div>
          </div>
          <div class="flex flex-wrap  mb-1">
            <div class="w-1/2 px-3">
              <label class="mb-2" >
                First Name
              </label>
              <input class="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4 mb-3  focus:outline-none
             text-black focus:border-gray-500"  type="text" placeholder="AAA" />
            </div>

            <div class="w-1/2 px-3 mb-1">
              <label class=" mb-2" >
                Last Name
              </label>
              <input class="w-full bg-gray-200 border border-gray-200 rounded py-3 px-4  focus:outline-none
             text-black focus:border-gray-500" type="text" placeholder="BBB" />
            </div>

          </div>
          <div class="flex flex-wrap  mb-2">
            <div class="w-full px-3 mb-1">
              <label class=" mb-2" >
                Address
              </label>
              <input class="  w-full bg-gray-200 border border-gray-200 rounded py-3 px-4  focus:outline-none
             text-black focus:border-gray-500" type="text" placeholder="TP.Bac Ninh - Bac Ninh" />
            </div>
          </div>
          <div class="flex flex-wrap  mb-2">
            <div class="w-full px-3 mb-1">
              <label class=" mb-2" >
                Phone
              </label>
              <input class="  w-full bg-gray-200 border border-gray-200 rounded py-3 px-4  focus:outline-none
             text-black focus:border-gray-500" type="text" placeholder="0123445678" />
            </div>
          </div>


          <button class="rounded-full mx-28 px-16">Register</button>
        </div>
      </div>
    </>
  )
}