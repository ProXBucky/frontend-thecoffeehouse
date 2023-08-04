

export default function ModalViewAdmin({ showModalView, setShowModalView, dataUser }) {


    return (
        <>
            {showModalView ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative w-[70%] my-8 h-[75%]">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 pl-14 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        View admin  {`id: ${dataUser.id}`}
                                    </h3>

                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalView(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="my-4 text-slate-500 text-lg leading-relaxed">
                                        <div className="overflow-x-auto">
                                            <table className=" w-full rounded-lg overflow-hidden">
                                                <tbody>
                                                    <tr>
                                                        <th className="h-12 bg-[#f68122] text-white">ID:</th>
                                                        <td className="px-6 bg-[#f4a86a]">{dataUser.id}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="h-12 bg-[#f68122] text-white">Email:</th>
                                                        <td className="px-6 bg-[#f4a86a]">{dataUser.email}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="h-12 bg-[#f68122] text-white">Password:</th>
                                                        <td className="px-6 bg-[#f4a86a]">{dataUser.password}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="h-12 bg-[#f68122] text-white">First Name:</th>
                                                        <td className="px-6 bg-[#f4a86a]">{dataUser.firstName}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="h-12 bg-[#f68122] text-white">Last Name:</th>
                                                        <td className="px-6 bg-[#f4a86a]">{dataUser.lastName}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="h-12 bg-[#f68122] text-white">Address:</th>
                                                        <td className="px-6 bg-[#f4a86a]">{dataUser.address}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="h-12 bg-[#f68122] text-white">Phone:</th>
                                                        <td className="px-6 bg-[#f4a86a]">{dataUser.phone}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => setShowModalView(false)}
                                        >
                                            Cancel
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