import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import {
    getPrices,
    getEvents,
    getChangePoint,
} from "./services/api";

function App() {

    useEffect(() => {

        getPrices().then(data => {
            console.log("Prices:", data);
        });

        getEvents().then(data => {
            console.log("Events:", data);
        });

        getChangePoint().then(data => {
            console.log("Change Point:", data);
        });

    }, []);

    return <Dashboard />;
}

export default App;