import { useEffect, useState } from "react";
import { shortcuts as defaultShortuts } from "../constants/Shortcuts";
import { localStorageHelper } from "../utils/localStorageHelper";
import { keys } from "../constants/localStoragekeys";
import { useSettings } from "../context/SettingContext";
import { useShortcuts } from "../context/ShortItemContext";



const Shortcuts = ({ shortcutSettingToggle, handleShortcutSetting }) => {
    const {
        shortcutsList,
        handleAdd,
        handleReset,
        handleDelete,
        handleNameChange,
        handleUrlChange,
    } = useShortcuts();

    return (
        <div className={`transition-all w-full mb-8 duration-700 ease-in-out overflow-hidden bg-gray-100  rounded-xl  ${shortcutSettingToggle ? "h-[3500px]" : "h-0"}`}>
            <div className="p-2 rounded-xl h-full">
                <div className="flex h-[8%] items-center  border-green-300 justify-between ">
                    <div className="flex items-center ">
                        <button onClick={() => handleAdd()} className="bg-gray-200 p-1 cursor-pointer rounded-md"><img src="/assets/icons/add.svg" width={"15px"} alt="" /></button>
                        <button onClick={() => handleReset()} className="bg-gray-200 p-1 cursor-pointer rounded-md"><img src="/assets/icons/reset.svg" width={"15px"} alt="" /></button>
                    </div>
                    <div>
                        <button onClick={() => handleClose()} className="bg-gray-200 cursor-pointer p-1 rounded-md"><img src="/assets/icons/cross.svg" width={"15px"} alt="" /></button>
                    </div>
                </div>

                <div className=" h-[92%] overflow-y-scroll mt-1 tailwind-scrollbar-hide [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-[#c6c6c6] ">
                    {
                        shortcutsList.map((sc, index) => {
                            return <div key={index} className="mt-2 mx-3 rounded-md flex p-1 text-md gap-1 items-center bg-gray-200">
                                <div className="flex flex-col w-[85%] gap-1">
                                    <input
                                        type="text"
                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                        className=" bg-white rounded-sm text-gray-700 border-0 outline-0 px-2"
                                        placeholder="Shortcut"
                                        value={sc.name}
                                    />

                                    <input
                                        type="text"
                                        onChange={(e) => handleUrlChange(index, e.target.value)}
                                        className=" bg-white text-sm text-gray-700 rounded-sm border-0 outline-0 px-2"
                                        placeholder="https://www.shortcut.com"
                                        value={sc.url}
                                    />

                                </div>
                                <div onClick={() => handleDelete(index)} className="w-[40px] h-[40px] rounded-md flex bg-gray-300 items-center justify-center">
                                    <img src="/assets/icons/trash.svg" width={'20px'} className="text-red-400" alt="" />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Shortcuts

