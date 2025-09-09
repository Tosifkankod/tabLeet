export const localStorageHelper = {

    set(key, value) {
        try {
            if (typeof value === "object") {
                const serialized = JSON.stringify(value);
                localStorage.setItem(key, serialized)
            } else {
                localStorage.setItem(key, value)
            }
        } catch (error) {
            console.error('Error saving localStorage', error)
        }
    },

    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            console.log(item);
            if (item === null || item === undefined) return defaultValue;

            try {
                return JSON.parse(item);
            } catch {
                return item;
            }
        } catch (error) {
            console.log("Error reading from localStorage", error);
            return defaultValue;
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.log("Error removing from localStorage", error)
        }
    },

    clear() {
        try {
            localStorage.clear();
        } catch (error) {
            console.log("Error clearing localStorage", error)
        }
    }

}