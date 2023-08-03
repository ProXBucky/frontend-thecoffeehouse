import { toast } from "react-toastify"
import { updateAdminData } from "../../../api/adminAPI"

export default function ModalEditAdmin({ showModalEdit, setShowModalEdit, dataUser, handleOnChange, fetchRequest }) {

    // const validateForm = () => {
    //     let check = true;
    //     const valueArr = ['email', 'password', 'firstName', 'lastName', 'address', 'phone']
    //     const valueLabel = ['Email', 'Password', 'First Name', 'Last Name', 'Address', 'Phone']
    //     for (let i = 0; i < valueArr.length; i++) {
    //         if (!dataUser[valueArr[i]]) {
    //             alert('Please type ' + valueLabel[i])
    //             check = false;
    //             break
    //         }
    //     }
    //     return check
    // }

    const handleAction = async () => {
        let res = await updateAdminData({
            id: dataUser.id,  //for findOne
            password: dataUser.password,
            firstName: dataUser.firstName,
            lastName: dataUser.lastName,
            address: dataUser.address,
            phone: dataUser.phone
        })
        if (res.errCode === 0) {
            toast.success('Update information success')
            fetchRequest()
            setShowModalEdit(false)
        } else {
            toast.error(res.errMessage)
        }

    }


    return (
        <>
            {showModalEdit ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative w-[70%] my-8 h-[80%]">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Edit admin  {`id: ${dataUser.id}`}
                                    </h3>
                                    <i className="fa-solid fa-x fa-lg cursor-pointer mt-5 mr-4" onClick={() => setShowModalEdit(false)}></i>
                                </div>
                                {/*body*/}
                                <div className="relative p-4 flex-auto">
                                    <div className="my-4 text-slate-500 text-base leading-relaxed">
                                        {
                                            dataUser && dataUser.id &&
                                            <div className="overflow-x-auto">
                                                <table className=" w-full rounded-lg overflow-hidden">
                                                    <tbody>
                                                        <tr className="div">
                                                            <th className="h-12 bg-[#f68122] text-white">ID:</th>
                                                            <td><input className="px-6 bg-[#f4a86a] w-full outline-none py-3   disabled:bg-[#f77104]" disabled value={dataUser.id} name="id" onChange={handleOnChange} /></td>
                                                        </tr>
                                                        <tr className="div">
                                                            <th className="h-12 bg-[#f68122] text-white">Email:</th>
                                                            <td><input className="px-6 bg-[#f4a86a] w-full outline-none py-3   disabled:bg-[#f77104]" disabled value={dataUser.email} name="email" onChange={handleOnChange} /></td>
                                                        </tr>
                                                        <tr className="div">
                                                            <th className="h-12 bg-[#f68122] text-white">Password:</th>
                                                            <td><input className="px-6 bg-[#f4a86a] w-full outline-none py-3  " value={dataUser.password} name="password" onChange={handleOnChange} /></td>
                                                        </tr>
                                                        <tr className="div">
                                                            <th className="h-12 bg-[#f68122] text-white">First Name:</th>
                                                            <td><input className="px-6 bg-[#f4a86a] w-full outline-none py-3  " value={dataUser.firstName} name="firstName" onChange={handleOnChange} /></td>
                                                        </tr>
                                                        <tr className="div">
                                                            <th className="h-12 bg-[#f68122] text-white">Last Name:</th>
                                                            <td><input className="px-6 bg-[#f4a86a] w-full outline-none py-3  " value={dataUser.lastName} name="lastName" onChange={handleOnChange} /></td>
                                                        </tr>
                                                        <tr className="div">
                                                            <th className="h-12 bg-[#f68122] text-white">Address:</th>
                                                            <td><input className="px-6 bg-[#f4a86a] w-full outline-none py-3  " value={dataUser.address} name="address" onChange={handleOnChange} /></td>
                                                        </tr>
                                                        <tr className="div">
                                                            <th className="h-12 bg-[#f68122] text-white">Phone:</th>
                                                            <td><input className="px-6 bg-[#f4a86a] w-full outline-none py-3 " value={dataUser.phone} name="phone" onChange={handleOnChange} /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        }
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <div>
                                        <button
                                            className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                            onClick={() => setShowModalEdit(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleAction}
                                        >
                                            Save
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
    );
}

