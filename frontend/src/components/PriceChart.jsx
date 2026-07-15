import { useEffect, useState } from "react";
import { getPrices } from "../services/api";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function PriceChart() {

    const [prices, setPrices] = useState([]);

    useEffect(() => {

        const fetchPrices = async () => {
            try {
                const data = await getPrices();
                setPrices(data);
            } catch (error) {
                console.error("Error loading Brent prices:", error);
            }
        };

        fetchPrices();

    }, []);

    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                marginTop: "20px",
            }}
        >
            <h2>Historical Brent Oil Prices</h2>

            <ResponsiveContainer width="100%" height={500}>
                <LineChart data={prices}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="Date"
                        tick={{ fontSize: 12 }}
                    />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="Price"
                        stroke="#1976d2"
                        dot={false}
                    />

                </LineChart>
            </ResponsiveContainer>

        </div>
    );
}

export default PriceChart;