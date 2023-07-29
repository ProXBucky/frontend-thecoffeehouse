export default function ErrorPage() {
    return (
        <>
            <section className="bg-white h-full">
                <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                    <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                        <p className="p-3 text-2xl font-medium text-red-500 rounded-full bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-20 h-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </p>
                        <h1 className="mt-3 text-2xl font-semibold text-red-500 md:text-3xl">Cautious</h1>
                        <p className="mt-4 text-xl text-gray-800">You are not authorized to access this link</p>

                    </div>
                </div>
            </section>
        </>
    )
}