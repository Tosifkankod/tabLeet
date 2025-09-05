import LiveClock from "./components/LiveClock";
import Heatmap from "./components/Heatmap";
import FirstPage from "./components/FirstPage";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <main className="min-h-screen flex flex-col items-center justify-center gap-20 px-10">
    //   <section className="flex flex-col xl:flex-row gap-5 xl:gap-10">
    //     <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-2">
    //       <LiveClock />
    //       <div>
    //         <div className="flex items-center gap-3 border border-[#e1e0dc] rounded-xl p-1 sm:pr-10 md:pr-16 sm:w-fit">
    //           <img
    //             src="/assets/images/dummy-profile.jpg"
    //             className="rounded-xl size-[100px]"
    //           />
    //           <div className="text-sm flex flex-col gap-2">
    //             <p>tosifkandkod</p>
    //             <p>Rank: 737,485</p>
    //             <button className="bg-[#42543c] rounded-sm text-white py-1 px-6 cursor-pointer text-xs">
    //               Visit Profile
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="">
    //       <p className="text-[#f1c784] text-sm md:text-base font-medium pb-1 text-ellipsis line-clamp-1">
    //         "if you want something you never had, then do something you never
    //         did"
    //       </p>
    //       <div className="flex flex-col md:flex-row gap-2">
    //         <Heatmap />

    //         <div className="hidden sm:block space-y-2">
    //           <div className="grid grid-cols-2 gap-2 ">
    //             <div className="bg-[#dadada] p-2 px-8 rounded-xl text-center">
    //               <strong className="text-[#8da96c]">Easy</strong>
    //               <p>106/892</p>
    //             </div>
    //             <div className="bg-[#dadada] p-2 px-8 rounded-xl text-center">
    //               <strong className="text-[#fca36f]">Med</strong>
    //               <p>106/892</p>
    //             </div>
    //             <div className="bg-[#dadada] p-2 px-8 rounded-xl text-center">
    //               <strong className="text-[#e66962]">Hard</strong>
    //               <p>106/892</p>
    //             </div>
    //             <div className="bg-[#dadada] p-2 px-8 rounded-xl text-center">
    //               <img
    //                 src="assets/icons/fire.png"
    //                 className="size-[25px] mx-auto"
    //               />
    //               <strong className="text-xs">Daily Ques.</strong>
    //             </div>
    //           </div>

    //           <div className="bg-[#dadada] p-2 px-4 pb-5 rounded-xl text-center space-y-4">
    //             <p>Time Left</p>
    //             <div className="relative">
    //               <div className="bg-[#747474] rounded-2xl">
    //                 <div className="bg-[#76c801] w-[50%] rounded-xl h-2"></div>
    //               </div>

    //               <span className="absolute top-0 left-0 -translate-y-full text-xs">
    //                 0%
    //               </span>
    //               <span className="absolute top-0 right-0 -translate-y-full text-xs">
    //                 100%
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="bg-[#d9d9d9] rounded-full mt-2 py-1.5 px-1.5 flex gap-1">
    //         <button className="cursor-pointer ml-2 min-w-6">
    //           <img
    //             src="assets/icons/magnifier.png"
    //             className="object-contain size-6"
    //           />
    //         </button>
    //         <input
    //           type="text"
    //           className="w-full rounded-xl outline-0 px-2"
    //           placeholder="Type here..."
    //         />
    //         <button className="bg-[#6f6f6f] rounded-full min-w-10 h-10 flex items-center justify-center cursor-pointer">
    //           <img
    //             src="assets/icons/voice.png"
    //             className="rounded-full size-5"
    //           />
    //         </button>
    //         <button className="bg-[#737373] text-white rounded-full px-6 py-2 cursor-pointer">
    //           Search
    //         </button>
    //       </div>
    //     </div>
    //   </section>

    //   <div className="flex gap-8 fixed bottom-[10%] sm:bottom-[3%]">
    //     <div className="bg-[#737373] p-3 rounded-full cursor-pointer">
    //       <img src="assets/icons/youtube.png" className="size-6" />
    //     </div>
    //     <div className="bg-[#737373] p-3 rounded-full cursor-pointer">
    //       <img src="assets/icons/chat-gpt.png" className="size-6" />
    //     </div>
    //     <div className="bg-[#737373] p-3 rounded-full cursor-pointer">
    //       <img src="assets/icons/gmail.png" className="size-6" />
    //     </div>
    //   </div>

    //   <div onClick={() => setIsOpen(true)} className="size-12 rounded-full bg-[#727272] grid place-items-center cursor-pointer fixed bottom-[3%] right-[3%]">
    //     <div className="size-9 rounded-full grid place-items-center bg-[#020202]">
    //       <div className="size-5 rounded-full bg-white"></div>
    //     </div>
    //   </div>

    //   <div className="flex gap-4 absolute top-5 left-5 ">
    //     <div className="py-2 px-4 bg-[#d9d9d9] text-xs rounded-full cursor-pointer">
    //       AI Tools
    //     </div>
    //     <div className="py-2 px-4 bg-[#d9d9d9] text-xs rounded-full cursor-pointer">
    //       Contests
    //     </div>
    //   </div>

    //   <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    // </main>
    <FirstPage />
  );
}

export default App;
