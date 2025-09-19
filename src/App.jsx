import LiveClock from "./components/LiveClock";
import Heatmap from "./components/Heatmap";
import FirstPage from "./components/FirstPage";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import AiTools from "./components/AiTools";
import { localStorageHelper } from "./utils/localStoragehelper.js";
import { keys } from "./constants/localStoragekeys";
import { useSettings } from "./context/SettingContext";
import { useShortcuts } from "./context/ShortItemContext";
import TimeLeft from "./components/TimeLeft.jsx";
import Temp from "./components/Temp.jsx";
import Notes from "./components/Notes.jsx";

function App() {
  const [quote, setQuote] = useState(() => {
    const quote = localStorageHelper.get(keys.ltQuote);
    return quote ? quote : null;
  })
  const { state, toggle } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(() => {
    let data = localStorageHelper.get(keys.ltUserdata);
    return data ? data : null;
  });
  const { shortcutsList } = useShortcuts();

  useEffect(() => {
    const saved = localStorageHelper.get(keys.ltQuote);

    if (saved) {
      const oneDay = 24 * 60 * 60 * 1000;

      if (Date.now() - saved.savedAt < oneDay) {
        setQuote(saved);
        return;
      }
    }

    fetchQuote();
  }, [])

  const handlePropSetUserdata = (user_data) => {
    localStorageHelper.set(keys.ltUserdata, user_data)
    setUserData(user_data)
  }

  const color = (index) => {
    if (index == 0) {
      return `text-black`
    } else if (index == 1) {
      return `text-green-800`
    } else if (index == 2) {
      return `text-orange-800`
    } else {
      return `text-red-800`
    }
  }

  const fetchQuote = async () => {
    fetch(`http://localhost:3000/api/v1/leetcode/quote`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${response.status}`);
      }

      const data = await response.json().catch((err) => {
        throw new Error(err.message);
      });

      const payload = {
        quote: data.data.quote,
        savedAt: Date.now()
      }

      localStorageHelper.set(keys.ltQuote, payload);
      setQuote(payload);
    }).catch((err) => {
      alert(err.message)
    })

  }

  return (
    userData != null ? (
      <main className="min-h-screen flex flex-col items-center justify-center gap-20 px-10 bg-[var(--color-background)]">
        <section className="flex flex-col xl:flex-row gap-5 xl:gap-10">
          <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-2">
            <LiveClock />
            <div>
              <div className="flex bg-[var(--color-surface)]  items-center gap-3 border border-[var(--color-muted)] rounded-xl p-1 sm:pr-10 md:pr-16 sm:w-fit">
                <img
                  src={userData?.matchedUser?.profile?.userAvatar}
                  className="rounded-xl size-[100px]"
                />
                <div className="text-sm flex flex-col gap-2 text-[var(--color-primary)]">
                  <p className="text-lg">{userData?.matchedUser?.username}</p>
                  <p>Rank: {userData?.matchedUser?.profile?.ranking}</p>
                  <div className="flex gap-2">
                    <a target="_blank" href={`https://leetcode.com/u/${userData?.matchedUser?.username}/`} className="bg-[var(--color-primary)] flex items-center rounded-sm text-white py-1 px-6 cursor-pointer text-xs">
                      Visit Profile
                    </a>
                    <div className="bg-[var(--color-primary)] cursor-pointer flex items-center justify-center p-1 rounded-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 18 18"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="h-[20px] w-[20px] text-white  hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.19 1.564a.75.75 0 01.729.069c2.137 1.475 3.373 3.558 3.981 5.002l.641-.663a.75.75 0 011.17.115c1.633 2.536 1.659 5.537.391 7.725-1.322 2.282-3.915 2.688-5.119 2.688-1.177 0-3.679-.203-5.12-2.688-.623-1.076-.951-2.29-.842-3.528.109-1.245.656-2.463 1.697-3.54.646-.67 1.129-1.592 1.468-2.492.337-.895.51-1.709.564-2.105a.75.75 0 01.44-.583zm.784 2.023c-.1.368-.226.773-.385 1.193-.375.997-.947 2.13-1.792 3.005-.821.851-1.205 1.754-1.282 2.63-.078.884.153 1.792.647 2.645C6.176 14.81 7.925 15 8.983 15c1.03 0 2.909-.366 3.822-1.94.839-1.449.97-3.446.11-5.315l-.785.812a.75.75 0 01-1.268-.345c-.192-.794-1.04-2.948-2.888-4.625z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-[var(--color-secondary)] text-sm md:text-base font-medium pb-1 text-ellipsis line-clamp-1">
              {/* <q></q> */}
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              {/* <Heatmap /> */}
              <Temp />
              <div className="hidden sm:block space-y-2 text-[var(--color-primary)]">
                <div className="grid grid-cols-2 gap-2 ">
                  {
                    userData.matchedUser?.submitStats?.acSubmissionNum &&
                    userData.matchedUser?.submitStats?.acSubmissionNum.map((item, index) => {
                      return (
                        <div key={index} className="bg-[var(--color-surface)] p-2 px-8 rounded-xl text-center">
                          <p className={`text-[14px] font-sans `}>{item.difficulty}</p>
                          <p className={`text-[14px] ${color(index)} font-semibold`} > {item.count} / 800</p>
                        </div>
                      )
                    })
                  }
                </div>

                <div className="bg-[var(--color-surface)] p-2 px-4  rounded-xl text-center space-y-3">
                  <div className="relative">
                    <TimeLeft />
                  </div>
                  <p className="text-[14px]"><i>Finish strong, you're almost done!</i></p>
                </div>
              </div>
            </div>

            <form action="https://www.google.com/search" method="get" target="_blank">
              <div className="bg-[var(--color-surface)] rounded-full mt-2 py-1.5 px-1.5 flex gap-1">
                <button className="cursor-pointer ml-2 min-w-6">
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke={"var(--color-primary)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
                <input
                  type="text"
                  name="q"
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
                <button type="submit" className="bg-[var(--color-button)] text-[var(--color-primary)] rounded-full px-6 py-2 cursor-pointer">
                  Search
                </button>
              </div>
            </form>
            <h1 className="text-lg italic mt-2 text-center rounded-4xl ">“{quote.quote}”</h1>
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
          <img src="/assets/icons/tab-leet-icon.svg" alt="" />
        </div>

        <div className="flex absolute top-4 left-4 gap-3 ">
          {
            state.ltAiToolsToggle && <AiTools />
          }
          <div className="p-2 bg-[var(--color-surface)] text-center flex items-center justify-center rounded-xl h-[35px] cursor-pointer text-sm px-2 ">
            <svg fill="#000000" width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M16,14H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-4H10a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4-6H17V3a1,1,0,0,0-2,0V4H13V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H4A1,1,0,0,0,3,5V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V5A1,1,0,0,0,20,4ZM19,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V6H7V7A1,1,0,0,0,9,7V6h2V7a1,1,0,0,0,2,0V6h2V7a1,1,0,0,0,2,0V6h2Z" /></svg>
          </div>
        </div>

        <Notes />

        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </main >
    ) : (
      <FirstPage handlePropSetUserdata={handlePropSetUserdata} />
    )
  )
}

export default App;
