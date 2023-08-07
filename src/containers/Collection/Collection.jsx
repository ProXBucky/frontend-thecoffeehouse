import { useSelector } from "react-redux";
import NavbarLeft from "./NavbarLeft";
import { useEffect, useState } from "react";
import CollectionRoute from "../../routes/CollectionRoute";

export default function Collection() {

    return (
        <>
            <div className="text-black h-screen mt-20 w-full px-[140px] relative">
                <div className="h-screen w-1/6 border-r-[3.5px] fixed">
                    <NavbarLeft />
                </div>
                <div className="h-full w-5/6 ml-[250px]" >
                    <CollectionRoute />
                </div>
            </div >
        </>
    )
}