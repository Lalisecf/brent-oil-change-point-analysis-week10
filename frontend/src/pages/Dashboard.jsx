import { useState } from "react";

import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";
import Filters from "../components/Filters";
import PriceChart from "../components/PriceChart";
import EventTable from "../components/EventTable";
import EventSelector from "../components/EventSelector";

function Dashboard() {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedEvent, setSelectedEvent] = useState("");

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
            <EventSelector
                selectedEvent={selectedEvent}
                setSelectedEvent={setSelectedEvent}
            />

            <PriceChart
                startDate={startDate}
                endDate={endDate}
                selectedEvent={selectedEvent}
            />

            <EventTable />

        </div>
    );
}

export default Dashboard;