import LiveClock from "./components/LiveClock";
import Heatmap from "./components/Heatmap";
import FirstPage from "./components/FirstPage";
import SideBar from "./components/SideBar";
import { useState } from "react";
import AiTools from "./components/AiTools";
import { localStorageHelper } from "./utils/localStorageHelper";
import { keys } from "./constants/localStoragekeys";
import { useSettings } from "./context/SettingContext";
import { useShortcuts } from "./context/ShortItemContext";

function App() {
  const { state, toggle } = useSettings();
  const [isOpen, setIsOpen] = useState(true);
  const [userName, setUserName] = useState(localStorageHelper.get(keys.username));
  const [shortcutItems, setShortcutItems] = useState(() => {
    return localStorageHelper.get(keys.ltShortcutItems) || []
  })
  const { shortcutsList } = useShortcuts();

  const handlePropSetUsername = (user_name) => {
    localStorage.setItem(keys.username, user_name)
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
                <div className="text-sm flex flex-col gap-2 text-[var(--color-primary)]">
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

              <div className="hidden sm:block space-y-2 text-[var(--color-primary)]">
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
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke={"var(--color-primary)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </button>
              <input
                type="text"
                className="w-full rounded-xl outline-0 px-2 placeholder:text-[var(--color-primary)]"
                placeholder="Type here..."
              />
              <button className="bg-[var(--color-button)] rounded-full min-w-10 h-10 flex items-center justify-center cursor-pointer">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                  <g id="SVGRepo_iconCarrier"> <path d="M8 5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V5Z" fill={`var(--color-primary)`} /> <path d="M6.25 11.8438V12C6.25 13.525 6.8558 14.9875 7.93414 16.0659C9.01247 17.1442 10.475 17.75 12 17.75C13.525 17.75 14.9875 17.1442 16.0659 16.0659C17.1442 14.9875 17.75 13.525 17.75 12V11.8438C17.75 11.2915 18.1977 10.8438 18.75 10.8438H19.25C19.8023 10.8438 20.25 11.2915 20.25 11.8437V12C20.25 14.188 19.3808 16.2865 17.8336 17.8336C16.5842 19.0831 14.9753 19.8903 13.25 20.1548V22C13.25 22.5523 12.8023 23 12.25 23H11.75C11.1977 23 10.75 22.5523 10.75 22V20.1548C9.02471 19.8903 7.41579 19.0831 6.16637 17.8336C4.61919 16.2865 3.75 14.188 3.75 12V11.8438C3.75 11.2915 4.19772 10.8438 4.75 10.8438H5.25C5.80228 10.8438 6.25 11.2915 6.25 11.8438Z" fill={`var(--color-primary)`} /> </g>

                </svg>
              </button>
              <button className="bg-[var(--color-button)] text-[var(--color-primary)] rounded-full px-6 py-2 cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* SHORTCUTS */}
        {
          state.ltShortcutsToggle && <div className="flex gap-8 fixed bottom-[10%] sm:bottom-[3%]">
            {
              shortcutsList.length > 0 && (
                shortcutsList.map((item, index) => {
                  return <a href={item.url} target="_blank" className="bg-[var(--color-surface)] border-2 border-transparent hover:border-2 hover:border-black duration-600 p-3 rounded-full cursor-pointer">
                    <img src={item.icon} className="size-6" />
                  </a>

                })
              )
            }
          </div>
        }

        {/* SIDE-BAR-TOGGLE */}
        <div onClick={() => setIsOpen(true)} className="size-12 rounded-full bg-[#727272] grid place-items-center cursor-pointer fixed bottom-[3%] right-[3%]">
          <div className="size-9 rounded-full grid place-items-center bg-[#020202]">
            <div className="size-5 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="flex absolute top-4 left-4 gap-4 ">
          {
            state.ltAiToolsToggle && <AiTools />
          }
          <div className="p-2 bg-[var(--color-surface)] rounded-xl h-[35px] cursor-pointer text-sm px-4 ">
            Courses
          </div>
        </div>

        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </main >
    ) : (
      <FirstPage handlePropSetUsername={handlePropSetUsername} userName={userName} />
    )
  )
}

export default App;
