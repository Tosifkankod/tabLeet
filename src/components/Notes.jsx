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
        <div className="w-80 h-90 bg-[var(--color-surface)] shadow-md text-left  top-10 left-0 overflow-hidden justify-between rounded-xl absolute">
            <div className="h-[10%] flex justify-between items-center p-2">
                <div className="flex gap-3">
                    <button onClick={() => handleClose()} className="cursor-pointer p-[0.5px] rounded-full">
                        <svg className="text-[var(--color-primary)] fill-current  " height="10px" viewBox="0 0 329.26933 329" width="10px" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" /></svg>
                    </button>
                    <button onClick={handleOnSave} className="text-sm cursor-pointer border text-[var(--color-primary)]  px-2 rounded-md" >Save</button>
                </div>
                <div className="flex gap-2">
                    {/* Bold Button */}
                    <button
                        onClick={() => handleFormat("bold")}
                        className="p-1 rounded-md "
                        title="Bold"
                    >
                        <svg version="1.1"
                            width={'12px'}
                            height={'12px'}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 181.395 181.395" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 181.395 181.395"
                            className="text-[var(--color-primary)] cursor-pointer  fill-current"
                        >
                            <g>
                                <path d="m20.618,181.395v-181.395h62.293c22.506,0 40.074,4.174 52.699,12.521 12.623,8.346 18.936,20.785 18.936,37.313 0,8.639-2.033,16.318-6.104,23.049-4.07,6.729-10.34,11.795-18.813,15.199 10.631,2.408 18.479,7.246 23.547,14.514 5.064,7.268 7.6,15.637 7.6,25.104 0,17.691-5.939,31.064-17.814,40.115-11.879,9.055-28.904,13.58-51.082,13.58h-71.262zm42.235-105.772h20.93c9.551-0.166 16.695-2.014 21.43-5.545 4.734-3.529 7.102-8.699 7.102-15.51 0-7.725-2.41-13.35-7.225-16.881-4.82-3.529-12.211-5.295-22.178-5.295h-20.059v43.231zm0,27.908v45.473h29.027c8.971,0 15.699-1.766 20.184-5.297 4.484-3.529 6.729-8.947 6.729-16.256 0-7.891-1.932-13.85-5.795-17.879-3.861-4.027-10.111-6.041-18.748-6.041h-31.397z" />
                            </g>
                        </svg>

                    </button>

                    {/* Italic Button */}
                    <button
                        onClick={() => handleFormat("italic")}
                        className="p-1 cursor-pointer  rounded-md"
                        title="Italic"
                    >
                        <svg id="Layer_1"
                            enable-background="new 0 0 64 64"
                            height="12px"
                            viewBox="0 0 64 64"
                            className="text-[var(--color-primary)] fill-current"
                            width="12px" xmlns="http://www.w3.org/2000/svg"><path d="m45.171 1.62h-17.342c-2.761 0-5 2.239-5 5s2.239 5 5 5h3.217l-8.451 40.675c-.006.029-.003.056-.008.085h-3.758c-2.761 0-5 2.238-5 5s2.239 5 5 5h17.342c2.762 0 5-2.238 5-5s-2.238-5-5-5h-3.399l8.467-40.76h3.932c2.762 0 5-2.239 5-5s-2.238-5-5-5z" />
                        </svg>
                    </button>
                    <button
                        onClick={handleOnClear}
                        className="p-1 cursor-pointer rounded-md"
                        title="Italic"
                    >
                        <svg id="Capa_1"
                            enable-background="new 0 0 512 512"
                            height="12px"
                            viewBox="0 0 512 512"
                            width="12px"
                            className="text-[var(--color-primary)] fill-current"
                            xmlns="http://www.w3.org/2000/svg"><g id="C"><path d="m263.961 512c188.706 0 215.53-170.501 218.774-175.814l-123.75-37.764c-4.301 9.081-7.124 102.466-96.006 102.466-68.613 0-103.403-49.702-103.403-147.744 0-94.248 35.449-142.031 105.381-142.031 83.037 0 88.405 77.18 90.483 80.845l126.401-29.077c-3.259-4.975-27.575-162.881-211.962-162.881-148.418 0-240.615 100.287-240.615 260.116 0 150.059 94.321 251.884 234.697 251.884z" /></g></svg>
                    </button>
                </div>
            </div>

            {/* Editable Area */}
            <div
                ref={editorRef}
                onBlur={onContentBlur}
                contentEditable
                role="textbox"
                className="bg-white border-0  text-[var(--color-primary)] outline-0 w-full h-[90%] rounded-tl-xl overflow-y-auto p-2 rounded-tr-xl"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};

export default Notes;
