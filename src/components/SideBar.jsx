import { useState } from "react";
import { aiToolsConstant } from "../constants/Aitools";
import { keys } from '../constants/localStoragekeys';
import { localStorageHelper } from '../utils/localStorageHelper';
import { ThemeSwitcher } from "../context/ThemeSwitcher";
import Shortcuts from "./Shortcuts";
import { useSettings } from "../context/SettingContext";


const SideBar = ({ isOpen, setIsOpen }) => {
    const [isThemeOpen, setThemeIsOpen] = useState(false);
    const { state, toggle } = useSettings();
    const [shortcutSettingToggle, setShortcutSettingToggle] = useState(false);


    const handleLtAiToolsToggle = () => {
        const newValue = !state.ltAiToolsToggle;
        toggle(keys.ltAiToolsToggle);

        let items = localStorageHelper.get(keys.ltAiToolsItems);
        if ((items == null || items == undefined) && newValue) {
            localStorageHelper.set(keys.ltAiToolsItems, aiToolsConstant);
        }
    }

    const handleShortcutToggle = () => {
        toggle(keys.ltShortcutsToggle);
    }

    const handleLtNotesToggle = () => {
        toggle(keys.ltNotesToggle)
    }

    const handleShortcutSetting = () => {
        setShortcutSettingToggle(!shortcutSettingToggle)
    }

    const handleGoogleAppsToggle = () => {
        toggle(keys.ltGoogleAppsToggle)
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
                                    <input type="checkbox" checked={state.ltAiToolsToggle} name={keys.ltAiToolsToggle} onChange={handleLtAiToolsToggle} className="sr-only peer" />
                                    <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color-primary)] peer-focus:ring-2 peer-focus:ring-[#FFA150] after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-6"></div>
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
                                    state.ltShortcutsToggle && <button onClick={handleShortcutSetting} className="p-2 cursor-pointer rounded-md ">
                                        <svg
                                            version="1.1"
                                            width={'20px'}
                                            id="Capa_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 512 512"
                                            style={{ enableBackground: 'new 0 0 512 512' }}
                                            xmlSpace="preserve"
                                            className="text-[var(--color-primary)] fill-current"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M490.667,405.333h-56.811C424.619,374.592,396.373,352,362.667,352s-61.931,22.592-71.189,53.333H21.333
			C9.557,405.333,0,414.891,0,426.667S9.557,448,21.333,448h270.144c9.237,30.741,37.483,53.333,71.189,53.333
			s61.931-22.592,71.189-53.333h56.811c11.797,0,21.333-9.557,21.333-21.333S502.464,405.333,490.667,405.333z M362.667,458.667
			c-17.643,0-32-14.357-32-32s14.357-32,32-32s32,14.357,32,32S380.309,458.667,362.667,458.667z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M490.667,64h-56.811c-9.259-30.741-37.483-53.333-71.189-53.333S300.736,33.259,291.477,64H21.333
			C9.557,64,0,73.557,0,85.333s9.557,21.333,21.333,21.333h270.144C300.736,137.408,328.96,160,362.667,160
			s61.931-22.592,71.189-53.333h56.811c11.797,0,21.333-9.557,21.333-21.333S502.464,64,490.667,64z M362.667,117.333
			c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32C394.667,102.976,380.309,117.333,362.667,117.333z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M490.667,234.667H220.523c-9.259-30.741-37.483-53.333-71.189-53.333s-61.931,22.592-71.189,53.333H21.333
			C9.557,234.667,0,244.224,0,256c0,11.776,9.557,21.333,21.333,21.333h56.811c9.259,30.741,37.483,53.333,71.189,53.333
			s61.931-22.592,71.189-53.333h270.144c11.797,0,21.333-9.557,21.333-21.333C512,244.224,502.464,234.667,490.667,234.667z
			 M149.333,288c-17.643,0-32-14.357-32-32s14.357-32,32-32c17.643,0,32,14.357,32,32S166.976,288,149.333,288z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                }
                            </div>
                            <div className="w-[20%] flex items-center justify-center">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value={state.ltShortcutsToggle} checked={state.ltShortcutsToggle} name={keys.ltShortcutsToggle} onChange={handleShortcutToggle} className="sr-only peer" />
                                    <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color-primary)] peer-focus:ring-2 peer-focus:ring-[#FFA150] after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-6"></div>
                                </label >
                            </div >
                        </div >
                    </div >

                    {/* SHORTCUT SETTING */}
                    {
                        <Shortcuts shortcutSettingToggle={shortcutSettingToggle} handleShortcutSetting={handleShortcutSetting} />
                    }

                    {/* GOOGLE APPS */}
                    <div className="nav p-2 bg-[var(--color-surface)] -mt-2 text-[var(--color-primary)] rounded-lg">
                        <div className="flex w-full">
                            <div className="w-[80%] ">
                                <h1 className="text-2xl font-medium">Google Apps</h1>
                                <p>show google apps</p>
                            </div>
                            <div className="w-[20%] flex items-center justify-center">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value={state.ltGoogleAppsToggle} checked={state.ltGoogleAppsToggle} name={keys.ltGoogleAppsToggle} onChange={handleGoogleAppsToggle} className="sr-only peer" />
                                    <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color-primary)] peer-focus:ring-2 peer-focus:ring-[#FFA150] after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-6"></div>
                                </label >
                            </div >
                        </div >
                    </div >

                    <div className="nav p-2 bg-[var(--color-surface)] text-[var(--color-primary)] rounded-lg">
                        <div className="flex w-full">
                            <div className="w-[80%] ">
                                <h1 className="text-2xl font-medium">Notes</h1>
                                <p>show notes</p>
                            </div>
                            <div className="w-[20%] flex items-center justify-center">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value={state.ltNotesToggle} checked={state.ltNotesToggle} name={keys.ltNotesToggle} onChange={handleLtNotesToggle} className="sr-only peer" />
                                    <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-[var(--color-primary)] peer-focus:ring-2 peer-focus:ring-[#FFA150] after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-6"></div>
                                </label>
                            </div>
                        </div>
                    </div>


                    <div className="nav p-2  bg-[var(--color-surface)] text-[var(--color-primary)] rounded-lg">
                        <div className="flex w-full">
                            <div className="w-[80%] ">
                                <h1 className="text-2xl font-medium">Themes</h1>
                                <p>select theme</p>
                            </div>
                            <div className="w-[20%] flex items-center justify-center">
                                <div onClick={() => setThemeIsOpen((prev) => !prev)} className="bg-[var(--color-primary)]  rounded-md p-1.5 w-fit flex items-center gap-1.5 transition-all duration-300 cursor-pointer">
                                    <div className="bg-white  border-[#D1D1D1] rounded-md grid grid-cols-2 gap-0.5 p-1">
                                        <div className="size-1 rounded-full bg-red-600"></div>
                                        <div className="size-1 rounded-full bg-cyan-600"></div>
                                        <div className="size-1 rounded-full bg-purple-600"></div>
                                        <div className="size-1 rounded-full bg-pink-600"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        <div className={`rounded-md w-full h-60 max-h-[calc(100vh-8.6rem)] overflow-y-auto border-[0.5px] border-white/5 outline-[0.5px] outline-black/5 mt-0 p-4 ${isThemeOpen ? 'block' : 'hidden'} transition-all duration-300`}>
                            <p className="text-xs mb-4 text-[var(--color-primary)]">Theme</p>
                            <ul className="w-full">
                                <ThemeSwitcher />
                            </ul>
                        </div>
                    }
                </div >
            </div >
        </div >
    );
}


export default SideBar