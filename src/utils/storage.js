export const setStorageData = (key, value) => {
    console.log("setStorage key", key, "value", value);
    return new Promise((resolve, reject) => {
        chrome.storage.local.set({ [key]: value }, () => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            resolve();
        })
    })

}

export const getStorageData = (key) => {
    console.log("getStorage key", key);
    return new Promise((resolve, reject) => {
        chrome.storage.local.get([key], (result) => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            resolve(result[key]);
        });
    });
};

export const removeStorageData = (key) => {
    console.log("removeStorage key", key);
    return new Promise((resolve, reject) => {
        chrome.storage.local.remove([key], () => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            resolve();
        });
    });
};