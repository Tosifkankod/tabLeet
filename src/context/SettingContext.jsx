import { createContext, useContext, useReducer } from "react";

// Initialize state from localStorage if available
const initialState = {
    ltAiToolsToggle: JSON.parse(localStorage.getItem('ltAiToolsToggle')) ?? false,
    ltShortcutsToggle: JSON.parse(localStorage.getItem('ltShortcutsToggle')) ?? false,
};

const settingReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            // eslint-disable-next-line no-case-declarations
            const newState = { ...state, [action.key]: action.value };
            localStorage.setItem(action.key, JSON.stringify(action.value));
            return newState;
        case 'TOGGLE':
            // eslint-disable-next-line no-case-declarations
            const toggledState = { ...state, [action.key]: !state[action.key] };
            localStorage.setItem(action.key, JSON.stringify(!state[action.key]));
            return toggledState;
        default:
            return state;
    }
};

const SettingContext = createContext();

export const SettingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(settingReducer, initialState);

    const setToggle = (key, value) => dispatch({ type: 'SET', key, value });
    const toggle = (key) => dispatch({ type: 'TOGGLE', key });

    return (
        <SettingContext.Provider value={{ state, setToggle, toggle }}>
            {children}
        </SettingContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useSettings() {
    return useContext(SettingContext);
}