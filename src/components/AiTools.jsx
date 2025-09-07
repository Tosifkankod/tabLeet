
const AiTools = () => {
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
        // <div className='t absolute top-4 transition-all duration-1000 left-4'>
        //     <div className='aitool p-2 flex transition-all duration-1000 items-center border-b-[0.5px]  border-white px-4  bg-[#d9d9d9] '>
        //         <h1>AI Tools</h1>
        //     </div>
        //     <div className="draw absolute  bg-[#d9d9d9] transition-all duration-1000  grid-cols-4 grid-rows-3 w-[350px] rounded-bl-lg rounded-br-lg p-2 gap-2 justify-center h-[200px] hidden">
        //         {
        //             urls.map((item, index) => {
        //                 return (
        //                     <div key={index} className='flex transition-all duration-1000 flex-col gap-2 hover:bg-gray-800 rounded-md hover:text-white cursor-pointer py-1 justify-center items-center bg-gray-300l'>
        //                         <img width='15px' src="/assets/icons/chat-gpt.png" alt="chatgpt" />
        //                         <p className='text-xs'>{item.url}</p>
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>
        // </div>
        <div className="">
            <div className="con bg-[var(--color-surface)] rounded-xl overflow-hidden">
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
                </div>
            </div>
        </div>


    );
};

export default AiTools;