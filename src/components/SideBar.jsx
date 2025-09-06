
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
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" />
                                <div class="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-[#FFA150] peer-focus:ring-2 peer-focus:ring-[#FFA150] after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-6"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar