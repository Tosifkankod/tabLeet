
const AiTools = () => {
    const urls = [
        { url: "ChatGPT", img: "/assets/icons/chat-gpt.png" },
        { url: "Perplexity", img: "/assets/icons/chat-gpt.png" },
        { url: "Gemini", img: "/assets/icons/chat-gpt.png" },
        { url: "Claude", img: "/assets/icons/chat-gpt.png" },
        { url: "DeepSeek", img: "/assets/icons/chat-gpt.png" },
        { url: "MetaAI", img: "/assets/icons/chat-gpt.png" },
        { url: "Grok", img: "/assets/icons/chat-gpt.png" },
        { url: "Llama", img: "/assets/icons/chat-gpt.png" },
        { url: "Mistral", img: "/assets/icons/chat-gpt.png" },
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
            <div className="con bg-[#d9d9d9] rounded-xl overflow-hidden">
                {/* Title */}
                <p className="text-center mb-4 text-sm py-2">AI Tools</p>

                {/* Grid */}
                <div className="grid grid-cols-4 gr grid-rows-3 gap-2 p-2 transition-all w-full ">
                    {urls.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center  justify-start gap-2 p-2 rounded-lg bg-gray-200 hover:bg-gray-800 hover:text-white cursor-pointer transition-all duration-300 "
                        >
                            <img
                                width="15"
                                height="15"
                                src="/assets/icons/chat-gpt.png"
                                alt="chatgpt"
                                className="object-contain"
                            />
                            <p className="text-xs text-center  w-full">{item.url}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default AiTools;