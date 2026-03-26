import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteLoader = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true); // route change start
        const timer = setTimeout(() => {
        setLoading(false); // small delay for loader animation
        }, 300); // 0.3s delay, adjust as you like

        return () => clearTimeout(timer);
    }, [location]);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
        <span className="loading loading-bars loading-xl text-[#7E45EA]"></span>
        </div>
    );
};

export default RouteLoader;