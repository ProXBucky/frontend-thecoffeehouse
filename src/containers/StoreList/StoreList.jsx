import { useSelector } from "react-redux";
import NavbarLeft from "./NavbarLeft";
import { useEffect, useState } from "react";
import StoreRoute from "../../routes/StoreRoute";

export default function StoreList() {

    return (
        <>
            <div className="h-[150px] mt-9 mb-5 w-full bg-[url('/src/assets/StoreImg/Banner.webp')] bg-contain bg-center flex 
            justify-center items-center">
                <p className="font-medium text-3xl">Hệ thống 150 cửa hàng The Coffee House toàn quốc</p>
            </div>
            <div className="text-black h-screen mt-10 w-full px-[140px]">
                <div className=" w-1/6 border-r-[3.5px] fixed">
                    <NavbarLeft />
                </div>
                <div className="h-full w-5/6 ml-[250px]" >
                    <StoreRoute />
                </div>
            </div >
        </>
    )
}