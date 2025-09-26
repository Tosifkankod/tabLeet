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

    const handleClose = () => {
        handleShortcutSetting()
    }

    return (
        <div className={`transition-all w-full  border-0 duration-700 ease-in-out overflow-hidden  bg-[var(--color-surface)]  rounded-xl  ${shortcutSettingToggle ? "h-[3500px] mb-2 " : "h-0 "}`}>
            <div className="p-2 rounded-xl h-full">
                <div className="flex h-[8%] items-center  border-green-300 justify-between ">
                    <div className="flex items-center gap-2 ">
                        <button onClick={() => handleAdd()} className=" p-1 cursor-pointer rounded-md">
                            <svg
                                version="1.1"
                                id="Capa_1"
                                width={"14px"}
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 512 512"
                                style={{ enableBackground: 'new 0 0 512 512' }}
                                className="text-[var(--color-primary)] fill-current"
                                xmlSpace="preserve"
                            >
                                <g>
                                    <g>
                                        <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
                                    </g>
                                </g>
                            </svg>
                        </button>

                        <button onClick={() => handleReset()} className=" p-1 cursor-pointer rounded-md">
                            <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="text-[var(--color-primary)] fill-current" width={'17px'} xmlns="http://www.w3.org/2000/svg">
                                <g id="timeline" />
                                <g id="navigation" />
                                <g id="align_center" />
                                <g id="align_left_1_" />
                                <g id="align_left" />
                                <g id="more" />
                                <g id="share" />
                                <g id="music" />
                                <g id="camera" />
                                <g id="print" />
                                <g id="wifi_1_" />
                                <g id="setting" />
                                <g id="composed" />
                                <g id="password" />
                                <g id="list" />
                                <g id="voice" />
                                <g id="open_folder" />
                                <g id="refresh">
                                    <path d="m19.6025 12.6348c-.5586-.085-1.0547.2979-1.1348.8438-.2012 1.3711-.834 2.6221-1.8301 3.6182-2.5352 2.5352-6.6572 2.5332-9.1914 0-2.5337-2.5342-2.5337-6.6577 0-9.1914.9531-.9526 2.1563-1.5737 3.5029-1.7998.5791-.1099 1.2017-.1289 1.8477-.0557.887.1021 1.7126.3964 2.466.8285l-1.3019.2223c-.5439.0933-.9102.6099-.8164 1.1543.083.4873.5059.8315.9844.8315.0557 0 .1123-.0044.1699-.0142l3.4902-.5967c.2607-.0449.4941-.1914.6475-.4082.1533-.2163.2139-.4849.1689-.7466l-.5977-3.4897c-.0918-.5439-.6016-.9082-1.1543-.8169-.5439.0933-.9102.6104-.8164 1.1548l.1573.9185c-.9679-.543-2.0356-.8943-3.17-1.0249-.8496-.0967-1.6738-.0698-2.4282.0747-1.7368.291-3.3149 1.105-4.564 2.354-3.3135 3.3135-3.3135 8.7051 0 12.0195 1.6567 1.6572 3.8335 2.4854 6.0098 2.4854 2.1768 0 4.3525-.8281 6.0098-2.4854 1.3018-1.3018 2.1299-2.9414 2.3945-4.7412.0802-.5469-.2978-1.0548-.8437-1.1348z" />
                                </g>
                                <g id="link" />
                                <g id="attach" />
                                <g id="email" />
                                <g id="bookmark" />
                                <g id="folder" />
                                <g id="file" />
                                <g id="notification" />
                                <g id="galery" />
                                <g id="delete_1_" />
                                <g id="update" />
                                <g id="upload" />
                                <g id="download" />
                                <g id="menu" />
                                <g id="down" />
                                <g id="up" />
                                <g id="backward" />
                                <g id="forward" />
                                <g id="zoom_out" />
                                <g id="zoom_in" />
                                <g id="search" />
                                <g id="home" />
                                <g id="user" />
                                <g id="guide" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => handleClose()} className="cursor-pointer p-1 rounded-md">
                            <svg className="text-[var(--color-primary)] fill-current  " viewBox="0 0 329.26933 329" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" /></svg>
                        </button>
                    </div>
                </div>

                <div className=" h-[92%] overflow-y-scroll mt-1 tailwind-scrollbar-hide [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-track]:bg-[#c6c6c6] ">
                    {
                        shortcutsList.map((sc, index) => {
                            return <div key={index} className="mt-2 mx-3 border-1 border-[var(--color-primary)] rounded-md flex p-1 text-md gap-1 items-center bg-[var(--color-surface)]">
                                <div className="flex flex-col w-[85%] gap-1">
                                    <input
                                        type="text"
                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                        className=" bg-white rounded-sm text-[var(--color-primary)] border-0 outline-0 px-2"
                                        placeholder="Shortcut"
                                        value={sc.name}
                                    />

                                    <input
                                        type="text"
                                        onChange={(e) => handleUrlChange(index, e.target.value)}
                                        className=" bg-white text-sm text-[var(--color-primary)] rounded-sm border-0 outline-0 px-2"
                                        placeholder="https://www.shortcut.com"
                                        value={sc.url}
                                    />

                                </div>
                                <div onClick={() => handleDelete(index)} className="w-[40px] cursor-pointer h-[40px] rounded-md flex  items-center justify-center">
                                    <svg width="20px" className="text-[var(--color-primary)] fill-current" viewBox="-40 0 427 427.00131" xmlns="http://www.w3.org/2000/svg"><path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" /><path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" /><path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" /><path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" /></svg>
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

