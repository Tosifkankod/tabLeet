import { createContext, useContext, useEffect, useState } from "react";
import { shortcuts as defaultShortuts } from "../constants/Shortcuts";
import { localStorageHelper } from "../utils/localStorageHelper";
import { keys } from "../constants/localStoragekeys";

const ShortcutsContext = createContext();

export const ShortcutsProvider = ({ children }) => {
    const [shortcutsList, setShortcutsList] = useState(() => {
        return localStorageHelper.get(keys.ltShortcutItems) || defaultShortuts;
    });

    useEffect(() => {
        const stored = localStorageHelper.get(keys.ltShortcutItems);
        if (stored) {
            setShortcutsList(stored);
        } else {
            setShortcutsList(defaultShortuts);
            localStorageHelper.set(keys.ltShortcutItems, defaultShortuts);
        }
    }, []);

    useEffect(() => {
        if (shortcutsList.length > 0) {
            localStorage.setItem(keys.ltShortcutItems, JSON.stringify(shortcutsList));
        }
    }, [shortcutsList]);

    const handleAdd = () =>
        setShortcutsList([...shortcutsList, { name: "", url: "", icon: "" }]);

    const handleReset = () => setShortcutsList(defaultShortuts);

    const handleDelete = (index) =>
        setShortcutsList(shortcutsList.filter((_, i) => i !== index));

    const handleNameChange = (index, value) => {
        const newList = [...shortcutsList];
        newList[index].name = value;
        setShortcutsList(newList);
    };

    const handleUrlChange = (index, value) => {
        const newList = [...shortcutsList];
        newList[index].url = value;
        if (value) {
            try {
                const urlObj = new URL(value);
                const domain = urlObj.hostname;
                newList[index].icon = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
            } catch {
                newList[index].icon = "";
            }
        } else {
            newList[index].icon = "";
        }
        setShortcutsList(newList);
    };

    return (
        <ShortcutsContext.Provider
            value={{
                shortcutsList,
                handleAdd,
                handleReset,
                handleDelete,
                handleNameChange,
                handleUrlChange,
            }}
        >
            {children}
        </ShortcutsContext.Provider>
    );
};

export const useShortcuts = () => useContext(ShortcutsContext);
