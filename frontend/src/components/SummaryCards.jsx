function SummaryCards() {
    return (
        <div
            style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px",
            }}
        >
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    flex: 1,
                    borderRadius: "8px",
                }}
            >
                <h3>Average Price</h3>
                <h2>--</h2>
            </div>

            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    flex: 1,
                    borderRadius: "8px",
                }}
            >
                <h3>Maximum Price</h3>
                <h2>--</h2>
            </div>

            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    flex: 1,
                    borderRadius: "8px",
                }}
            >
                <h3>Detected Change Point</h3>
                <h2>--</h2>
            </div>

            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    flex: 1,
                    borderRadius: "8px",
                }}
            >
                <h3>Volatility</h3>
                <h2>--</h2>
            </div>
        </div>
    );
}

export default SummaryCards;