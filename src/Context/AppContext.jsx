import { Children, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getStoredApps, removeAppFromLocalStorage, saveAppsToLocalStorage } from "../Utilities/addToDB";

export const AppContext = createContext(null);

const AppProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // const [installedApps, setInstalledApps] = useState([]);
    const [installedApps, setInstalledApps] = useState(getStoredApps());

    useEffect(() => {
        fetch("/Data.json")
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, [])


    const handleInstallButton = (app) => {
        setInstalledApps((data) => {
            const alreadyInstalled = data.find((item) => item.id === app.id);

            if (alreadyInstalled) {
                toast.warning("App already installed!", {
                    toastId: "already-installed"
                });
                return data;
            }

            const updatedApps = [...data, app];

            saveAppsToLocalStorage(updatedApps);

            toast.success(`${app.title} installed successfully!`, {
                toastId: app.id
            });

            return updatedApps;
        });
    };

    const handleUninstallButton = (id) => {
        setInstalledApps((data) => {
            const updatedApps = data.filter((app) => app.id !== id);

            removeAppFromLocalStorage(id);

            toast.error("App Uninstalled!", {
                toastId: id
            });

            return updatedApps;
        });
    };

    

    const value = {
        data,
        loading,
        installedApps,
        handleInstallButton,
        handleUninstallButton
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;