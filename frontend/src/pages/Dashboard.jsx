import Header from "../components/Header";
import SummaryCards from "../components/SummaryCards";
import PriceChart from "../components/PriceChart";
import EventTable from "../components/EventTable";

function Dashboard() {
    return (
        <div style={{ padding: "20px" }}>
            <Header />

            <SummaryCards />

            <div style={{ marginTop: "30px" }}>
                <PriceChart />
            </div>

            <div style={{ marginTop: "30px" }}>
                <EventTable />
            </div>
        </div>
    );
}

export default Dashboard;