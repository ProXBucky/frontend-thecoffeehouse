// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import NavbarLeft from "./NavbarLeft";
import CollectionRoute from "../../routes/CollectionRoute";
import NavbarMobile from "../../containers/HomePage/NavbarMobile"

export default function Collection() {

    return (
        <>
            <NavbarMobile />
            <div className="text-black h-screen w-full lg:px-[140px] md:px-[20px] sm:px-[10px] flex lg:flex-row md:flex-col sm:flex-col">
                <div className="lg:h-screen md:h-[20%] lg:w-1/6 sm:w-full lg:border-r-[3.5px] md:border-none lg:fixed md:text-center lg:pt-10 md:pt-2 sm:pt-1">
                    <NavbarLeft />
                </div>
                <div className="lg:h-full md:h-full lg:w-5/6 sm:w-full lg:ml-[250px] md:px-[20px] sm:px-[10px] md:pt-10 sm:pt-2">
                    <CollectionRoute />
                </div>
            </div >
        </>
    )
}