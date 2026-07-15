import { useEffect, useState } from "react";
import { getPrices, getEvents } from "../services/api";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine
} from "recharts";

function PriceChart({ startDate, endDate }) {

    const [prices, setPrices] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {

        const loadData = async () => {

            try {

                const priceData = await getPrices();
                const eventData = await getEvents();

                setPrices(priceData);
                setEvents(eventData);

            } catch (error) {

                console.error(error);

            }

        };

        loadData();

    }, []);
    const filteredPrices = prices.filter((item) => {

    if (!startDate && !endDate) return true;

    const date = item.Date.substring(0, 10);

    if (startDate && date < startDate) return false;

    if (endDate && date > endDate) return false;

    return true;

    });

    return (

        <div
            style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "8px",
                marginTop: "20px"
            }}
        >

            <h2>Historical Brent Oil Prices</h2>

            <ResponsiveContainer width="100%" height={500}>

                <LineChart data={filteredPrices}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="Date"
                        interval={500}
                    />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="Price"
                        stroke="#1976d2"
                        dot={false}
                    />

                    {
                        events.map((event, index) => (

                            <ReferenceLine
                                key={index}
                                x={event.Date}
                                stroke="red"
                                strokeDasharray="5 5"
                                label={{
                                    value: event.Event,
                                    angle: -90,
                                    position: "insideTop",
                                    fontSize: 10
                                }}
                            />

                        ))
                    }

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default PriceChart;