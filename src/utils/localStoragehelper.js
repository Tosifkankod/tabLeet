const storage = {

    set(key, value) {
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(key, serialized)
        } catch (error) {
            console.error('Error saving localStorage', error)
        }
    },

    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
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