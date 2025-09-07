import { useState } from "react";

const SideBar = ({ isOpen, setIsOpen }) => {

    const [isThemeOpen, setThemeIsOpen] = useState(false);

    return (
        <div className="relative">
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 backdrop-blur-xsx z-40"
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

                    <div onClick={() => setThemeIsOpen((prev) => !prev)} className="border border-transparent hover:border-[#D1D1D1] rounded-md p-1.5 hover:bg-[#E2E2E2] w-fit flex items-center gap-1.5 transition-all duration-300 cursor-pointer">
                        <div className="bg-white border border-[#D1D1D1] rounded-md grid grid-cols-2 gap-0.5 p-1">
                            <div className="size-1 rounded-full bg-red-600"></div>
                            <div className="size-1 rounded-full bg-cyan-600"></div>
                            <div className="size-1 rounded-full bg-purple-600"></div>
                            <div className="size-1 rounded-full bg-pink-600"></div>
                        </div>
                        <img src="./assets/icons/down-arrow.png" alt="down-icon" className="size-3" />
                    </div>

                    <div className={`rounded-md w-fit max-h-[calc(100vh-8.6rem)] overflow-y-auto border-[0.5px] border-white/5 outline-[0.5px] outline-black/5 mt-2 shadow-2xl p-4 ${isThemeOpen ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}>
                        <p className="text-xs mb-4">Theme</p>
                        <ul className="w-56">
                            <li className="flex items-center gap-2 my-2 p-1 hover:bg-[#E2E2E2] rounded-sm cursor-pointer">
                                <button className="">
                                    <div className="grid grid-cols-2 gap-0.5 rounded-sm p-1 shadow-sm bg-white">
                                        <div className="size-1 rounded-full bg-amber-200"></div>
                                        <div className="size-1 rounded-full bg-violet-200"></div>
                                        <div className="size-1 rounded-full bg-pink-200"></div>
                                        <div className="size-1 rounded-full bg-red-200"></div>
                                    </div>
                                </button>
                                <span className="text-xs">Dracula</span>
                            </li>
                            <li className="flex items-center gap-2 my-2 p-1 hover:bg-[#E2E2E2] rounded-sm cursor-pointer">
                                <button className="">
                                    <div className="grid grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm bg-white">
                                        <div className="size-1 rounded-full bg-green-200"></div>
                                        <div className="size-1 rounded-full bg-amber-200"></div>
                                        <div className="size-1 rounded-full bg-yellow-200"></div>
                                        <div className="size-1 rounded-full bg-blue-200"></div>
                                    </div>
                                </button>
                                <span className="text-xs">Laal pari</span>
                            </li>
                            <li className="flex items-center gap-2 my-2 p-1 hover:bg-[#E2E2E2] rounded-sm cursor-pointer">
                                <button className="">
                                    <div className="grid grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm bg-white">
                                        <div className="size-1 rounded-full bg-red-200"></div>
                                        <div className="size-1 rounded-full bg-pink-200"></div>
                                        <div className="size-1 rounded-full bg-cyan-200"></div>
                                        <div className="size-1 rounded-full bg-amber-200"></div>
                                    </div>
                                </button>
                                <span className="text-xs">Panduba</span>
                            </li>
                            <li className="flex items-center gap-2 my-2 p-1 hover:bg-[#E2E2E2] rounded-md cursor-pointer">
                                <button className="">
                                    <div className="grid grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm bg-white">
                                        <div className="size-1 rounded-full bg-cyan-200"></div>
                                        <div className="size-1 rounded-full bg-black"></div>
                                        <div className="size-1 rounded-full bg-teal-200"></div>
                                        <div className="size-1 rounded-full bg-pink-200"></div>
                                    </div>
                                </button>
                                <span className="text-xs">Paimon</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar