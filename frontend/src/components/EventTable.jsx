import { useEffect, useState } from "react";
import { getEvents, getPrices, getChangePoint } from "../services/api";

function EventTable() {

    const [rows, setRows] = useState([]);

    useEffect(() => {

        const loadData = async () => {

            try {

                const events = await getEvents();
                const prices = await getPrices();
                const changePoint = await getChangePoint();

                const cpDate = new Date(changePoint.date);

                const tableData = events.map(event => {

                    const eventDate = new Date(event.Date);

                    // Find matching Brent price for the event date
                    const priceRecord = prices.find(
                        price => price.Date.substring(0, 10) === event.Date.substring(0, 10)
                    );

                    return {
                        date: event.Date.substring(0, 10),
                        event: event.Event,
                        price: priceRecord
                            ? Number(priceRecord.Price).toFixed(2)
                            : "N/A",
                        impact: eventDate >= cpDate
                            ? "After Change Point"
                            : "Before Change Point"
                    };

                });

                setRows(tableData);

            } catch (error) {

                console.error("Error loading event table:", error);

            }

        };

        loadData();

    }, []);

    return (

        <div
            style={{
                marginTop: "30px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px"
            }}
        >

            <h2>Geopolitical Events Summary</h2>

            <div className="table-container">

            <table>

                <thead>

                    <tr
                        style={{
                            backgroundColor: "#1976d2",
                            color: "white"
                        }}
                    >
                        <th style={{ padding: "10px" }}>Date</th>
                        <th style={{ padding: "10px" }}>Event</th>
                        <th style={{ padding: "10px" }}>Price (USD)</th>
                        <th style={{ padding: "10px" }}>Detected Impact</th>
                    </tr>

                </thead>

                <tbody>

                    {rows.map((row, index) => (

                        <tr key={index}>

                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {row.date}
                            </td>

                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {row.event}
                            </td>

                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {row.price}
                            </td>

                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                {row.impact}
                            </td>

                        </tr>

                    ))}

                </tbody>

           </table>

        </div>

    </div>

    );

}

export default EventTable;