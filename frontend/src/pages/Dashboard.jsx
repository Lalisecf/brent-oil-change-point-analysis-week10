import { useState } from "react";

import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";
import Filters from "../components/Filters";
import PriceChart from "../components/PriceChart";
import EventTable from "../components/EventTable";

function Dashboard() {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    return (
        <div style={{ padding: "20px" }}>

            <Header />

            <SummaryCards />

            <Filters
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />

            <PriceChart
                startDate={startDate}
                endDate={endDate}
            />

            <EventTable />

        </div>
    );
}

export default Dashboard;