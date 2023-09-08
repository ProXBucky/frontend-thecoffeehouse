import { decodeBase64Func } from "../../utils/base64"
import { formatPrice } from "../../utils/formatPrice"
import RiseLoader from "react-spinners/RiseLoader"


export default function ProductList({ allProductArr, handleDetail }) {
    return (
        <div className="relative h-full flex flex-wrap xl:gap-8 lg:gap-5 sm:gap-3 md:justify-evenly sm:justify-between xl:px-10 lg:px-2 sm:px-3">
            {
                allProductArr === 'None' ?
                    (
                        <div className="text-2xl mt-24">Không có dữ liệu</div>
                    )
                    :
                    allProductArr && allProductArr.length > 0 ?
                        allProductArr.map((item, index) => {
                            return (
                                <div className="xl:w-[30%] lg:w-[25%] sm:w-[40%] md:mt-5 cursor-pointer" key={index} onClick={() => handleDetail(item)}>
                                    <div className="rounded-lg overflow-hidden" style={{ boxShadow: '1px 1px 13px 0px #00000040' }}>
                                        <img src={(item.image)} ></img>
                                    </div>
                                    <div className="mt-2">
                                        <label className="font-semibold text-base">{item.name}</label><br></br>
                                        <label className="font-normal text-sm text-[#666]">{formatPrice(item.originalPrice)} đ</label>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <RiseLoader color="#36d7b7" className="absolute top-[45%] left-[45%] " />
            }

        </div >
    )
}