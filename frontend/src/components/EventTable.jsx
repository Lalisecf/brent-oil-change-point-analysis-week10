function EventTable() {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "8px",
            }}
        >
            <h2>Geopolitical Events</h2>

            <table
                border="1"
                cellPadding="10"
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                }}
            >
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Event</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>--</td>
                        <td>Data will appear here</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EventTable;