function Filters({
    startDate,
    endDate,
    setStartDate,
    setEndDate,
}) {
    return (
        <div
            style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px",
                marginBottom: "20px",
                alignItems: "center",
            }}
        >
            <div>
                <label><strong>Start Date</strong></label>
                <br />
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>

            <div>
                <label><strong>End Date</strong></label>
                <br />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Filters;