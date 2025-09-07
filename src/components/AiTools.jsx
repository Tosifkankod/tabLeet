import { useState } from "react";

const AiTools = () => {
    const [isOpen, setIsOpen] = useState(false);

    const urls = [
        { name: "ChatGPT", url: "https://chatgpt.com/", img: "/assets/icons/chat-gpt.png" },
        { name: "Perplexity", url: "https://www.perplexity.ai/", img: "/assets/icons/chat-gpt.png" },
        { name: "Gemini", url: "https://gemini.google.com/", img: "/assets/icons/chat-gpt.png" },
        { name: "Claude", url: "https://www.anthropic.com/claude", img: "/assets/icons/chat-gpt.png" },
        { name: "DeepSeek", url: "https://www.deepseek.com/", img: "/assets/icons/chat-gpt.png" },
        { name: "MetaAI", url: "https://about.fb.com/news/2025/04/introducing-meta-ai-app-new-way-access-ai-assistant/", img: "/assets/icons/chat-gpt.png" },
        { name: "Grok", url: "https://x.ai/grok", img: "/assets/icons/chat-gpt.png" },
        { name: "Llama", url: "https://www.llama.com/", img: "/assets/icons/chat-gpt.png" },
        { name: "Mistral", url: "https://mistral.ai/", img: "/assets/icons/chat-gpt.png" },
    ];

    return (
        <div className="">
            <div className="con bg-[var(--color-surface)] rounded-xl overflow-hidden ">
                {/* Title */}
                <p className="text-center mb-4 text-sm py-2">AI Tools</p>

                {/* Grid */}
                <div className="grid grid-cols-4 gr grid-rows-3 gap-2 p-2 transition-all w-full ">
                    {urls.map((item, index) => (
                        <a
                            href={item.url}
                            key={index}
                            target="_blank"
                            className="flex flex-col items-center  justify-start gap-2 p-2 rounded-lg bg-gray-200 hover:bg-gray-800 hover:text-white transition-all duration-300 "
                        >
                            <img
                                width="15"
                                height="15"
                                src="/assets/icons/chat-gpt.png"
                                alt="chatgpt"
                                className="object-contain"
                            />
                            <p className="text-xs text-center  w-full">{item.name}</p>
                        </a>
                    ))}
                    <div onClick={() => setIsOpen(true)} className="group flex flex-col justify-center items-center overflow-hidden gap-2 p-2 rounded-lg bg-gray-200 hover:bg-gray-800 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            width="35px"
                            height="35px"
                            className="text-gray-800 group-hover:text-white transition-colors duration-300"
                            fill="currentColor"
                        >
                            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
                        </svg>
                    </div>

                </div>
            </div>



            {/* Popup overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0  flex items-center justify-center bg-black/50 z-50"
                    onClick={() => setIsOpen(false)} // closes when clicking overlay
                >
                    <div
                        className="bg-[#d9d9d9] rounded-2xl shadow-lg p-8 w-96 relative"
                        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
                    >
                        {/* Close button (top right only) */}

                        <h2 className="text-xl font-bold flex justify-between ">
                            Edit AI Tools <span className="text-sm cursor-pointer " onClick={() => setIsOpen(false)}>
                                ✕
                            </span>
                        </h2>
                        <p className="text-sm mb-4 font-extralight">select AI tool you want to display</p>
                        <div className="flex flex-col gap-2 h-80  px-2 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#c6c6c6] [&::-webkit-scrollbar-track]:rounded-full  [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#313131]
">
                            {
                                urls.map((item, index) => {
                                    return <div key={index} className="bg-[#c6c6c6] p-2 flex items-center gap-4 rounded-md">
                                        <input
                                            type="checkbox"
                                            class="w-5 h-5 rounded-md border border-[#313131] cursor-pointer bg-[#d9d9d9] checked:bg-[#c6c6c6] checked:border-[#313131] accent-[#313131]"
                                        />
                                        <label htmlFor="" className="font-medium text-md">{item.name}</label>
                                    </div>
                                })
                            }
                        </div>

                        <div className="flex mt-4 gap-2">
                            <button className=" flex-1 rounded-full p-1 duration-500 bg-[#313131]  text-white  cursor-pointer">Reset</button>
                            <button className=" flex-1 rounded-full p-1 duration-500 bg-[#c6c6c6] hover:bg-[#313131] hover:text-white cursor-pointer">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AiTools;