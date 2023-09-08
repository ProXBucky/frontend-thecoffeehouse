

export default function ModalViewAdmin({ showModalView, setShowModalView, dataUser }) {


    return (
        <>
            {showModalView ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative xl:w-[70%] lg:w-[80%] md:w-[80%] md:ml-10 sm:w-full my-8 lg:h-[80%] md:h-[85%] sm:h-[75%]">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between md:p-5 sm:p-3 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-semibold">
                                        Thông tin nhân viên
                                    </h3>
                                    <i className="fa-solid fa-x fa-lg cursor-pointer md:mt-5 sm:mt-3 mr-4" onClick={() => setShowModalView(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative lg:p-6 md:px-6 sm:px-2 flex-auto">
                                    <div className="my-4 text-gray-700 md:text-lg sm:text-sm leading-relaxed">
                                        <div className="overflow-x-auto">
                                            <table className=" w-full lg:rounded-lg md:rounded-none overflow-hidden">
                                                <tbody>
                                                    <>
                                                        <tr>
                                                            <th className="md:h-12 sm:h-10 md:px-5 sm:px-2 bg-[#f68122] lg:w-1/4 md:w-[200px] sm:w-[100px] text-white">ID:</th>
                                                            <td className="px-6 bg-[#f6c7a0]">{dataUser.id}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="md:h-12 sm:h-10 md:px-5 sm:px-2 bg-[#f68122] lg:w-1/4 md:w-[200px] sm:w-[100px] text-white">Email:</th>
                                                            <td className="px-6 bg-[#f6c7a0]">{dataUser.email}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="md:h-12 sm:h-10 md:px-5 sm:px-2 bg-[#f68122] lg:w-1/4 md:w-[200px] sm:w-[100px] text-white">Mật khẩu:</th>
                                                            <td className="px-6 bg-[#f6c7a0]">{dataUser.password}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="md:h-12 sm:h-10 md:px-5 sm:px-2 bg-[#f68122] lg:w-1/4 md:w-[200px] sm:w-[100px] text-white">Họ:</th>
                                                            <td className="px-6 bg-[#f6c7a0]">{dataUser.firstName}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="md:h-12 sm:h-10 md:px-5 sm:px-2 bg-[#f68122] lg:w-1/4 md:w-[200px] sm:w-[100px] text-white">Tên:</th>
                                                            <td className="px-6 bg-[#f6c7a0]">{dataUser.lastName}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="md:h-12 sm:h-10 md:px-5 sm:px-2 bg-[#f68122] lg:w-1/4 md:w-[200px] sm:w-[100px] text-white">Địa chỉ:</th>
                                                            <td className="px-6 bg-[#f6c7a0]">{dataUser.address}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="md:h-12 sm:h-10 md:px-5 sm:px-2 bg-[#f68122] lg:w-1/4 md:w-[200px] sm:w-[100px] text-white">SĐT:</th>
                                                            <td className="px-6 bg-[#f6c7a0]">{dataUser.phone}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="md:h-12 sm:h-10 md:px-5 sm:px-2 bg-[#f68122] lg:w-1/4 md:w-[200px] sm:w-[100px] text-white">Vai trò:</th>
                                                            <td className="px-6 bg-[#f6c7a0]">{dataUser.roleData && dataUser.roleData.valueVn}</td>
                                                        </tr>
                                                    </>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end p-6  border-solid border-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => setShowModalView(false)}
                                        >
                                            Hủy
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