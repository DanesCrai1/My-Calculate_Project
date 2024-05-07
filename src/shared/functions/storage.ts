export const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getStorage = (key, value) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    return value;
}