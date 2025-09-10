import { useState } from "react";
import { aiToolsConstant } from "../constants/Aitools";
import { keys } from '../constants/localStoragekeys';
import { localStorageHelper } from '../utils/localStorageHelper';
import { ThemeSwitcher } from "../context/ThemeSwitcher";

const SideBar = ({ isOpen, setIsOpen, handleAiToolVisible, ltAiTools }) => {
    const [isThemeOpen, setThemeIsOpen] = useState(false);
    const [shortcutVisibility, setShortcutVisibility] = useState(() => {
        return localStorageHelper.get(keys.ltshortcutVisible) || false;
    });
    const [shortcutSettingVisibility, setShortcutSettingVisibility] = useState(false);

    const handleLtAiTools = (e) => {
        handleAiToolVisible(e.target.checked)
        let items = localStorageHelper.get(keys.ltAiToolsItems);
        if (items == null || items == undefined) {
            localStorageHelper.set(keys.ltAiToolsItems, aiToolsConstant);
        }
    }

    const handleShortcutSetting = () => {
        setShortcutSettingVisibility(!shortcutSettingVisibility)
        console.log(shortcutSettingVisibility);
    }

    const handleLtShortcut = (e) => {
        setShortcutVisibility(e.target.checked)
        localStorageHelper.set(e.target.name, e.target.checked);
    }

    return (
        <div className="relative ">
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 backdrop-blur-xsx z-40"
                ></div>
            )}
            <div className={`fixed top-0 right-0 h-full w-90 rounded-tl-xl rounded-bl-xl bg-[var(--color-background)] shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "-translate-x-0" : "-translate-x-[-100%]"}`}>
                <div className="flex justify-center items-center gap-3 p-4">
                    <img src="/assets/icons/tab-leet-icon.svg" width='40px' className=' ' />
                    <h1 className="text-4xl font-medium">TabLeet</h1>
                </div>

                {/* NAVIGATION STARTS FROM HERE */}
                <div className=" h-full px-4 py-8 flex flex-col gap-2">

                    {/* AI TOOLS */}
                    <div className="nav p-2 bg-[var(--color-surface)] text-[var(--color-primary)] rounded-lg">
                        <div className="flex w-full">
                            <div className="w-[80%] ">
                                <h1 className="text-2xl font-medium">Ai Tools</h1>
                                <p>show ai tools</p>
                            </div>
                            <div className="w-[20%] flex items-center justify-center">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={ltAiTools} name="ltAiTools" onChange={handleLtAiTools} className="sr-only peer" />
                                    <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-[#FFA150] peer-focus:ring-2 peer-focus:ring-[#FFA150] after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-6"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* SHORTCUTS */}
                    <div className="nav p-2 bg-[var(--color-surface)] text-[var(--color-primary)] rounded-lg">
                        <div className="flex w-full">
                            <div className="w-[80%] ">
                                <h1 className="text-2xl font-medium">Shortcuts</h1>
                                <p>show shortcuts</p>
                            </div>
                            <div className=" mr-1 flex items-center justify-center">
                                {
                                    shortcutVisibility && <button onClick={handleShortcutSetting} className="p-2 cursor-pointer rounded-md bg-gray-200">
                                        <img width={'20px'} src="/assets/icons/equalizer.svg" alt="" />
                                    </button>
                                }
                            </div>
                            <div className="w-[20%] flex items-center justify-center">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value={shortcutVisibility} checked={shortcutVisibility} name={keys.ltshortcutVisible} onChange={handleLtShortcut} className="sr-only peer" />
                                    <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-[#FFA150] peer-focus:ring-2 peer-focus:ring-[#FFA150] after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-6"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* SHORTCUT SETTING */}
                    {/* <div className={`w-full h-150 rounded-lg  bg-gray-100 transition-all duration-2 border-1 p-2 `}>
                        <div className="flex  gap-2 justify-between border-b-1 pb-1">
                            <div className="flex gap-2 ">
                                <p className="">R</p>
                                <img width='20px' src="/assets/icons/addplus.svg" alt="" />
                            </div>
                            <div>
                                <p className=" ">✕</p>
                            </div>
                        </div>
                        <div className="border-1 mt-1">
                            <div className="border-1 w-[80%]">
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <div className="border-1 w-[20%]">

                            </div>
                            <div className="border-1 w-[80%]">
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <div className="border-1 w-[20%]">

                            </div>
                            <div className="border-1 w-[80%]">
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <div className="border-1 w-[20%]">

                            </div>
                            <div className="border-1 w-[80%]">
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <div className="border-1 w-[20%]">

                            </div>
                            <div className="border-1 w-[80%]">
                                <input type="text" />
                                <input type="text" />
                            </div>
                            <div className="border-1 w-[20%]">

                            </div>
                        </div>
                    </div> */}


                    {/* THEME SETTINGS */}
                    <div onClick={() => setThemeIsOpen((prev) => !prev)} className="border border-transparent hover:border-[#D1D1D1] rounded-md p-1.5 hover:bg-[#E2E2E2] w-fit flex items-center gap-1.5 transition-all duration-300 cursor-pointer">
                        <div className="bg-white border border-[#D1D1D1] rounded-md grid grid-cols-2 gap-0.5 p-1">
                            <div className="size-1 rounded-full bg-red-600"></div>
                            <div className="size-1 rounded-full bg-cyan-600"></div>
                            <div className="size-1 rounded-full bg-purple-600"></div>
                            <div className="size-1 rounded-full bg-pink-600"></div>
                        </div>
                        <img src="./assets/icons/down-arrow.png" alt="down-icon" className="size-3" />
                    </div>

                    {<div className={`rounded-md w-fit max-h-[calc(100vh-8.6rem)] overflow-y-auto border-[0.5px] border-white/5 outline-[0.5px] outline-black/5 mt-2 shadow-2xl p-4 ${isThemeOpen ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}>
                        <p className="text-xs mb-4 text-[var(--color-primary)]">Theme</p>
                        <ul className="w-56">
                            <ThemeSwitcher />
                        </ul>
                    </div>}
                </div>
            </div>
        </div >
    );
}


export default SideBar