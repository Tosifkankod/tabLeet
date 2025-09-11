import { createContext, useContext, useReducer } from "react";

const initialState = {
    ltAiToolsToggle: false,
    ltShortcutsToggle: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { ...state, [action.key]: !state[action.key] }
        case 'SET':
            return { ...state, [action.key]: !state[action.value] }
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const settingContext = createContext();

export const SettingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const actions = {
        toggle: (key) => dispatch({ type: 'TOGGLE', key }),
        set: (key, value) => dispatch({ type: 'SET', key, value }),
        reset: () => dispatch({ type: 'RESET' })
    }

    return (
        <ToggleContext.Provider value={{ state, actions }} >
            {children}
        </ToggleContext.Provider>
    )
}

export const useSettings = () => {
    const context = useContext(settingContext);
    if (!context) {
        alert('toggle context');
    }
    return context;
};












