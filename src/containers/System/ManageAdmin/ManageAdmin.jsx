import { getAllAdmin, deleteAdmin, updateAdminData } from "../../../api/adminAPI"
import { useState, useEffect } from "react"

export default function ManageAdmin() {
    const [admins, setAdmins] = useState([])
    useEffect(() => {
        const fetchDataAdminList = async () => {
            let res = await getAllAdmin()
            if (res.errCode === 0) {
                setAdmins(res.data)
            }
        }
        fetchDataAdminList()
    }, [])
    return (
        <div className="p-10">
            <p className="text-3xl">Manage Admin</p>
            <div className="w-ful mt-10">
                <table className="w-full px-3 text-center rounded-lg overflow-hidden border-b-purple-950">
                    <thead className="h-16 bg-purple-950 text-white">
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            {/* <th>Password</th> */}
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admins && admins.length > 0 &&
                            admins.map((item) => {
                                return (
                                    <tr className="h-14 even:bg-neutral-100 odd:bg-slate-300" key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        {/* <td>{item.password}</td> */}
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <button className="text-white bg-purple-950 p-2 mr-5">Edit</button>
                                            <button className="text-white bg-purple-950 p-2">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        </div >
    )
}