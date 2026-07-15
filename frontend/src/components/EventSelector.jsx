import { useEffect, useState } from "react";
import { getEvents } from "../services/api";

function EventSelector({ selectedEvent, setSelectedEvent }) {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        const loadEvents = async () => {

            try {

                const data = await getEvents();
                setEvents(data);

            } catch (error) {

                console.error(error);

            }

        };

        loadEvents();

    }, []);

    return (

        <div style={{ marginBottom: "20px" }}>

            <label>
                <strong>Highlight Event</strong>
            </label>

            <br />

            <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                style={{
                    padding: "8px",
                    width: "300px",
                    marginTop: "8px"
                }}
            >

                <option value="">All Events</option>

                {events.map((event, index) => (

                    <option
                        key={index}
                        value={event.Event}
                    >
                        {event.Event}
                    </option>

                ))}

            </select>

        </div>

    );

}

export default EventSelector;