import React, { useState, useCallback, useRef } from "react";
import { localStorageHelper } from '../utils/localStorageHelper.js'
import { keys } from '../constants/localStoragekeys.js'

const Notes = ({ handleNotesVisible }) => {
    const [content, setContent] = useState(() => {
        const notesData = localStorageHelper.get(keys.ltNotesData);
        return notesData;
    });
    const editorRef = useRef(null);

    const onContentBlur = useCallback((evt) => {
        setContent(evt.currentTarget.innerHTML);
    }, []);

    const handleFormat = (command) => {
        document.execCommand(command, false, null);
        // Update state after formatting
        if (editorRef.current) {
            setContent(editorRef.current.innerHTML);
        }
    };

    const handleOnSave = () => {
        localStorageHelper.set(keys.ltNotesData, content);
    }

    const handleClose = () => {
        handleNotesVisible()
    }

    const handleOnClear = () => {
        localStorageHelper.set(keys.ltNotesData, "");
        setContent("")
    }


    return (
        <div className="w-80 h-90 border text-left border-gray-300 top-10 left-0 overflow-hidden justify-between bg-gray-300 rounded-xl absolute">
            <div className="h-[10%] flex justify-between items-center p-2">
                <div className="flex gap-2">
                    <button onClick={() => handleClose()} className="cursor-pointer p-[0.5px] rounded-full">
                        <img src="/assets/icons/cross.svg" width={"15px"} alt="" height={"15px"} />
                    </button>
                    <h3>Notes</h3>
                </div>
                <button onClick={handleOnSave} className="text-sm border-1 px-2 rounded-md" >Save</button>
                <div className="flex gap-2">
                    {/* Bold Button */}
                    <button
                        onClick={() => handleFormat("bold")}
                        className="p-1 border rounded-md"
                        title="Bold"
                    >
                        <svg
                            width="14px"
                            height="14px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 4h7a4 4 0 0 1 0 8H6zm0 8h8a4 4 0 0 1 0 8H6z"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* Italic Button */}
                    <button
                        onClick={() => handleFormat("italic")}
                        className="p-1 border rounded-md"
                        title="Italic"
                    >
                        <svg
                            width="14px"
                            height="14px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#000000"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 4h-9M14 20H5M15 4l-6 16" />
                        </svg>
                    </button>
                    <button
                        onClick={handleOnClear}
                        className="p-1 border rounded-md"
                        title="Italic"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" role="img">
                            <title>Clear (C)</title>
                            <path d="M17 6.5a7 7 0 1 0 0 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Editable Area */}
            <div
                ref={editorRef}
                onBlur={onContentBlur}
                contentEditable
                role="textbox"
                className="bg-white border-0 outline-0 w-full h-[90%] rounded-tl-xl overflow-y-auto p-2 rounded-tr-xl"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};

export default Notes;
