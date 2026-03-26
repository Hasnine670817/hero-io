const getStoredApps = () => {
    const storedApps = localStorage.getItem("installed-apps");

    if (storedApps) {
        return JSON.parse(storedApps);
    }

    return [];
};

const saveAppsToLocalStorage = (apps) => {
    localStorage.setItem("installed-apps", JSON.stringify(apps));
};

const removeAppFromLocalStorage = (id) => {
    const storedApps = getStoredApps();
    const updatedApps = storedApps.filter((app) => app.id !== id);
    localStorage.setItem("installed-apps", JSON.stringify(updatedApps));
};

export { getStoredApps, saveAppsToLocalStorage, removeAppFromLocalStorage };