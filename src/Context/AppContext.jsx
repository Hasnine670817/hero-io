import { Children, createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false)
            })
    }, []);

    const value = {
        user,
        loading
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;