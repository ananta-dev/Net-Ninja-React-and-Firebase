export default function EventList({ events, handleClick }) {
    return (
        <div>
            {events.map(event => (
                <div key={event.id}>
                    <h2>{event.title}</h2>
                    <button onClick={() => handleClick(event.id)}>
                        delete event
                    </button>
                </div>
            ))}
        </div>
    );
}
