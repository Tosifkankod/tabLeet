import React, { useState, useCallback, useRef, useEffect } from "react";
import { localStorageHelper } from "../utils/localStorageHelper.js";
import { keys } from "../constants/localStoragekeys.js";

const Notes = () => {
    const [content, setContent] = useState("Order created.");
    const editorRef = useRef(null);

    // Load saved notes on mount
    useEffect(() => {
        const savedNotes = localStorageHelper.get(keys.ltNotesData);
        if (savedNotes) {
            setContent(savedNotes);
        }
    }, []);

    // Save notes on content change
    const saveToLocalStorage = useCallback(
        (value) => {
            console.log("hello")
            localStorageHelper.set(keys.ltNotesData, value);
        },
        []
    );

    const onContentBlur = useCallback(
        (evt) => {
            const newValue = evt.currentTarget.innerHTML;
            setContent(newValue);
            saveToLocalStorage(newValue);
        },
        [saveToLocalStorage]
    );

    const handleFormat = (command) => {
        document.execCommand(command, false, null);
        if (editorRef.current) {
            const newValue = editorRef.current.innerHTML;
            setContent(newValue);
            saveToLocalStorage(newValue);
        }
    };

    return (
        <div className="w-80 h-90 border border-gray-300 top-14 left-30 overflow-hidden justify-between bg-gray-300 rounded-xl absolute">
            <div className="h-[10%] flex justify-between items-center p-2">
                <h3>Notes</h3>
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
                </div>
            </div>

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
