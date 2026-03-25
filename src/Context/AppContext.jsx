import { Children, createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUser(data);
    //             setLoading(false)
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             setLoading(false)
    //         })
    // }, []);

    const value = {
        data,
        loading
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;