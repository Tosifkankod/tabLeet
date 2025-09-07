import LiveClock from "./components/LiveClock";
import Heatmap from "./components/Heatmap";
import FirstPage from "./components/FirstPage";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import { setStorageData, getStorageData } from "./utils/storage";
import AiTools from "./components/AiTools";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('username'));

  const handlePropSetUsername = (user_name) => {
    // for dev
    // localStorage.setItem('username', user_name)

    setStorageData('username', user_name).then(() => {
      console.log("user_name🤣", user_name);
      setUserName(user_name);
      localStorage.setItem('username', user_name)
    }).catch((err) => {
      console.log(err);
      alert("unable to proceed")
    })
  }

  function handleGetUsername() {
    // for dev
    // return localStorage.getItem('username')

    getStorageData('username').then((value) => {
      return value
    }).catch((err) => {
      console.log("app.js error setting username 😅", err);
    })
  }

  return (
    userName != null ? (
      <main className="min-h-screen flex flex-col items-center justify-center gap-20 px-10 bg-[var(--color-background)]">
        <section className="flex flex-col xl:flex-row gap-5 xl:gap-10">
          <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-2">
            <LiveClock />
            <div>
              <div className="flex items-center gap-3 border border-[var(--color-muted)] rounded-xl p-1 sm:pr-10 md:pr-16 sm:w-fit">
                <img
                  src="/assets/images/dummy-profile.jpg"
                  className="rounded-xl size-[100px]"
                />
                <div className="text-sm flex flex-col gap-2">
                  <p>tosifkandkod</p>
                  <p>Rank: 737,485</p>
                  <button className="bg-[var(--color-primary)] rounded-sm text-white py-1 px-6 cursor-pointer text-xs">
                    Visit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-[var(--color-secondary)] text-sm md:text-base font-medium pb-1 text-ellipsis line-clamp-1">
              "if you want something you never had, then do something you never
              did"
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <Heatmap />

              <div className="hidden sm:block space-y-2">
                <div className="grid grid-cols-2 gap-2 ">
                  <div className="bg-[var(--color-surface)] p-2 px-8 rounded-xl text-center">
                    <strong className="text-[#8da96c]">Easy</strong>
                    <p>106/892</p>
                  </div>
                  <div className="bg-[var(--color-surface)] p-2 px-8 rounded-xl text-center">
                    <strong className="text-[#fca36f]">Med</strong>
                    <p>106/892</p>
                  </div>
                  <div className="bg-[var(--color-surface)] p-2 px-8 rounded-xl text-center">
                    <strong className="text-[#e66962]">Hard</strong>
                    <p>106/892</p>
                  </div>
                  <div className="bg-[var(--color-surface)] p-2 px-8 rounded-xl text-center">
                    <img
                      src="assets/icons/fire.png"
                      className="size-[25px] mx-auto"
                    />
                    <strong className="text-xs">Daily Ques.</strong>
                  </div>
                </div>

                <div className="bg-[var(--color-surface)] p-2 px-4 pb-5 rounded-xl text-center space-y-4">
                  <p>Time Left</p>
                  <div className="relative">
                    <div className="bg-[#747474] rounded-2xl">
                      <div className="bg-[#76c801] w-[50%] rounded-xl h-2"></div>
                    </div>

                    <span className="absolute top-0 left-0 -translate-y-full text-xs">
                      0%
                    </span>
                    <span className="absolute top-0 right-0 -translate-y-full text-xs">
                      100%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-surface)] rounded-full mt-2 py-1.5 px-1.5 flex gap-1">
              <button className="cursor-pointer ml-2 min-w-6">
                <img
                  src="assets/icons/magnifier.png"
                  className="object-contain size-6"
                />
              </button>
              <input
                type="text"
                className="w-full rounded-xl outline-0 px-2"
                placeholder="Type here..."
              />
              <button className="bg-[var(--color-button)] rounded-full min-w-10 h-10 flex items-center justify-center cursor-pointer">
                <img
                  src="assets/icons/voice.png"
                  className="rounded-full size-5"
                />
              </button>
              <button className="bg-[var(--color-button)] text-[var(--color-primary)] rounded-full px-6 py-2 cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </section>

        <div className="flex gap-8 fixed bottom-[10%] sm:bottom-[3%]">
          <div className="bg-[var(--color-surface)] p-3 rounded-full cursor-pointer">
            <img src="assets/icons/youtube.png" className="size-6" />
          </div>
          <div className="bg-[var(--color-surface)] p-3 rounded-full cursor-pointer">
            <img src="assets/icons/chat-gpt.png" className="size-6" />
          </div>
          <div className="bg-[var(--color-surface)] p-3 rounded-full cursor-pointer">
            <img src="assets/icons/gmail.png" className="size-6" />
          </div>
        </div>

        {/* SIDE-BAR-TOGGLE */}
        <div onClick={() => setIsOpen(true)} className="size-12 rounded-full bg-[#727272] grid place-items-center cursor-pointer fixed bottom-[3%] right-[3%]">
          <div className="size-9 rounded-full grid place-items-center bg-[#020202]">
            <div className="size-5 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="flex absolute top-4 left-4 gap-4 ">
          <AiTools />
          <div className="p-2 bg-[var(--color-surface)] rounded-xl h-[35px] cursor-pointer text-sm px-4 ">
            Courses
          </div>
        </div>

        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
    ) : (
      <FirstPage handlePropSetUsername={handlePropSetUsername} userName={userName} />
    )
  )
}

export default App;
