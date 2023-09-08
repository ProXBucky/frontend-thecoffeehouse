import ReactPlayer from 'react-player'


export default function ModalVideo({ showModal, setShowModal, urlVideo }) {
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[50] outline-none focus:outline-none ease-linear scroll-smooth"
                    >
                        <div className="relative w-full h-full">
                            <div className="shadow-lg relative w-full bg-[rgba(30,30,30,.7)] outline-none focus:outline-none">
                                <i className="fa-solid fa-x fa-lg cursor-pointer text-white p-5 absolute top-0 right-0 z-[51] bg-[rgba(30,30,30,.7)]" onClick={() => setShowModal(false)}></i>
                                <div className="relative flex justify-center py-14">
                                    <ReactPlayer url={urlVideo} width='75%' height='75vh' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[rgba(30,30,30,.7)] fixed inset-0 z-[49]" onClick={() => setShowModal(false)}>
                    </div>
                </>
            ) : null}
        </>
    )
}