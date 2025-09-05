
const SideBar = ({ isOpen, setIsOpen }) => {

    return (
        <div className="relative ">
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0  z-40"
                ></div>
            )}
            <div className={`fixed top-0 right-0 h-full w-90 rounded-tl-xl rounded-bl-xl bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "-translate-x-0" : "-translate-x-[-100%]"}`}>
                <div className="flex justify-center items-center gap-3 p-4">
                    <img src="/assets/icons/tab-leet-icon.svg" width='40px' className=' ' />
                    <h1 className="text-4xl font-medium">TabLeet</h1>
                </div>

                <div className=" h-full px-4 py-8">

                    <div className="nav p-2 flex">
                        <div className="w-[80%] ">
                            <h1 className="text-2xl font-medium">Shortcuts</h1>
                            <p>show saved shortcut</p>
                        </div>
                        <div className="w-[20%] flex items-center justify-center">
                            <img width={'30px'} src="/assets/icons/tab-leet-icon.svg" alt="" />
                        </div>
                    </div>
                    <div className="nav p-2 flex">
                        <div className="w-[80%] ">
                            <h1 className="text-2xl font-medium">Shortcuts</h1>
                            <p>show saved shortcut</p>
                        </div>
                        <div className="w-[20%] flex items-center justify-center">
                            <img width={'30px'} src="/assets/icons/tab-leet-icon.svg" alt="" />
                        </div>
                    </div>
                    <div className="nav p-2 flex">
                        <div className="w-[80%] ">
                            <h1 className="text-2xl font-medium">Shortcuts</h1>
                            <p>show saved shortcut</p>
                        </div>
                        <div className="w-[20%] flex items-center justify-center">
                            <img width={'30px'} src="/assets/icons/tab-leet-icon.svg" alt="" />
                        </div>
                    </div>
                    <div className="nav p-2 flex">
                        <div className="w-[80%] ">
                            <h1 className="text-2xl font-medium">Shortcuts</h1>
                            <p>show saved shortcut</p>
                        </div>
                        <div className="w-[20%] flex items-center justify-center">
                            <img width={'30px'} src="/assets/icons/tab-leet-icon.svg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SideBar