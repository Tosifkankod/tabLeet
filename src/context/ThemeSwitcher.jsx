import { useTheme } from './ThemeContext';

const themes = [
    {
        name: 'Default',
        bg: '#ffffff',
        surface: '#d9d9d9',
        primary: '#313131',
        button: '#c6c6c6',
        secondary: '#4d4d4d'
    },
    {
        name: 'Dracula',
        bg: '#282a36',
        surface: '#44475a',
        primary: '#bd93f9',
        button: '#ff79c6',
        secondary: '#6272a4'
    },
    {
        name: 'Laal pari',
        bg: '#1e0f0f',
        surface: '#4c1a1a',
        primary: '#ff2e63',
        button: '#ff595e',
        secondary: '#800f2f'
    },
    {
        name: 'Panduba',
        bg: '#e0f7fa',
        surface: '#b2ebf2',
        primary: '#00796b',
        button: '#4dd0e1',
        secondary: '#004d40'
    },
    {
        name: 'Paimon',
        bg: '#f6f8ff',
        surface: '#e0e7ff',
        primary: '#7f5af0',
        button: '#c0aaff',
        secondary: '#5a4fcf'
    }
];

export const ThemeSwitcher = () => {
    const { theme: currentTheme, setTheme } = useTheme();

    return (
        <>
            {
                themes.map((theme) =>
                    <li key={theme.name.trim().toLowerCase()} onClick={() => setTheme(theme.name.replace(" ", "").toLowerCase())} className="flex items-center justify-between my-2 p-1 hover:bg-[#E2E2E2] rounded-sm cursor-pointer">
                        <div className='flex items-center gap-2'>
                            <button>
                                <div className={`grid grid-cols-2 gap-0.5 rounded-sm p-1 shadow-sm`} style={{
                                    backgroundColor: theme.bg
                                }}>
                                    <div className={`size-1 rounded-full`} style={{ backgroundColor: theme.primary }}></div>
                                    <div className={`size-1 rounded-full`} style={{ backgroundColor: theme.surface }}></div>
                                    <div className={`size-1 rounded-full`} style={{ backgroundColor: theme.button }}></div>
                                    <div className={`size-1 rounded-full`} style={{ backgroundColor: theme.secondary }}></div>
                                </div>
                            </button>
                            <span className={`text-xs`} style={{color: theme.primary}}>{theme.name}</span>
                        </div>
                         {/* <img src="/assets/icons/tick.svg" alt="tick-icon" } /> */}


                        <svg className={`size-8 ${currentTheme == theme.name.replace(" ", "").toLowerCase() ? "visible" : "invisible"}`} fill={theme.primary} width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z" /></svg>
                    </li>
                )
            }
        </>
    )
}