import { shortcuts as defaultShortuts, shortcuts } from "../constants/Shortcuts";

const Shortcuts = ({ shortcutSettingVisibility, setShortcutSettingVisibility }) => {
    const [shortcutsList, setShortcutsList] = useState([]);

    const handleShortcutSetting = () => {
        setShortcutSettingVisibility(!shortcutSettingVisibility)
        console.log(shortcutSettingVisibility);
    }

    const handleAdd = () => {
        setShortcutsList([...setShortcutsList, { name: '', url: '', icon: '' }]);
    }

    const handleReset = () => {
        setShortcutsList(defaultShortuts);
    }

    const handleClose = () => {
        setShortcutSettingVisibility(!shortcutSettingVisibility);
    }

    return (
        <div className={`transition-all w-full duration-700 ease-in-out overflow-hidden bg-gray-100  rounded-xl  ${shortcutSettingVisibility ? "h-3500" : "h-0"}`}>
            <div className="p-2 h-full rounded-xl">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-3">
                        <button className="bg-gray-200 p-1 rounded-md"><img src="/assets/icons/add.svg" width={"15px"} alt="" /></button>
                        <button className="bg-gray-200 p-1 rounded-md"><img src="/assets/icons/reset.svg" width={"15px"} alt="" /></button>
                    </div>
                    <div>
                        <button className="bg-gray-200 p-1 rounded-md"><img src="/assets/icons/cross.svg" width={"15px"} alt="" /></button>
                    </div>
                </div>

                <div className="h-full  overflow-y-scroll mt-1 tailwind-scrollbar-hide [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-[#c6c6c6] ">
                    <div className="mt-2 mx-3 rounded-md flex p-1 text-md gap-1 items-center bg-gray-200">
                        <div className="flex flex-col w-[85%] gap-1">
                            <input type="text" onChange={(e) => handleNameChange(index, e.target.value)} className=" bg-white rounded-sm text-gray-700 border-0 outline-0 px-2" placeholder="Shortcut" />
                            <input type="text" onChange={(e) => handleUrlChange(index, e.target.value)} className=" bg-white text-sm text-gray-700 rounded-sm border-0 outline-0 px-2" placeholder="https://www.shortcut.com" />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-md flex bg-gray-300 items-center justify-center">
                            <img src="/assets/icons/trash.svg" width={'20px'} className="text-red-400" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shortcuts