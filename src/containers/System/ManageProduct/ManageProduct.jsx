import ModalCreateProduct from "./ModalCreateProduct"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchAllcodeCategory, fetchAllcodeSize } from "../../../redux/Slice/AppSlice"

export default function ManageProduct() {
    const [showModalCreate, setShowModalCreate] = useState(false)
    const [showModalView, setShowModalView] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAllcodeSize())
        dispatch(fetchAllcodeCategory())
    }, [])

    // const handleOnChange = (event) => {
    //     setDataUser({
    //         ...dataUser,
    //         [event.target.name]: event.target.value
    //     });
    // };

    const handleCreate = () => {
        setShowModalCreate(true)
    }

    return (
        <>
            <ModalCreateProduct showModalCreate={showModalCreate} setShowModalCreate={setShowModalCreate} />
            <div className="p-10">
                <p className="text-3xl inline-block">Manage Product</p>
                <button className="text-white bg-[#f68122] ml-6 hover:bg-[#f68122c4] hover:border-white" name="Create" onClick={handleCreate}>Add new product</button>
                <div className="w-ful mt-10 text-center text-sm">


                </div>
            </div >
        </>
    )
}