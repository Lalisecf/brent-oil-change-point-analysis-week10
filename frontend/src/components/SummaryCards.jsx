import { useEffect, useState } from "react";
import { getPrices, getChangePoint } from "../services/api";

function SummaryCards() {

    const [summary, setSummary] = useState({
        average: 0,
        maximum: 0,
        volatility: 0,
        changePoint: "-"
    });

    useEffect(() => {

        const loadSummary = async () => {

            try {

                const prices = await getPrices();
                const changePoint = await getChangePoint();

                const values = prices.map(item => Number(item.Price));

                const average =
                    values.reduce((sum, value) => sum + value, 0) /
                    values.length;

                const maximum = Math.max(...values);

                // Standard deviation (volatility)
                const variance =
                    values.reduce(
                        (sum, value) => sum + Math.pow(value - average, 2),
                        0
                    ) / values.length;

                const volatility = Math.sqrt(variance);

                setSummary({
                    average: average.toFixed(2),
                    maximum: maximum.toFixed(2),
                    volatility: volatility.toFixed(2),
                    changePoint: changePoint.date
                });

            } catch (error) {

                console.error("Error loading dashboard summary:", error);

            }

        };

        loadSummary();

    }, []);


    return (

        <div className="summary-container">
            

            <div className="summary-card">
                <h3>Average Price</h3>
                <h2>${summary.average}</h2>
            </div>

           <div className="summary-card">
                <h3>Maximum Price</h3>
                <h2>${summary.maximum}</h2>
            </div>

           <div className="summary-card">
                <h3>Detected Change Point</h3>
                <h2>{summary.changePoint}</h2>
            </div>

            <div className="summary-card">
                <h3>Volatility</h3>
                <h2>{summary.volatility}</h2>
            </div>

        </div>

    );

}

export default SummaryCards;