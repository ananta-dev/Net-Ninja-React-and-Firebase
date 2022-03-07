import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";
import { useState } from "react";

function App() {
    const [events, setEvents] = useState([
        // { title: "mario's birthday bash", id: 1 },
        // { title: "bowser's live stream", id: 2 },
        // { title: "race on moo moo farm", id: 3 },
    ]);
    const [showEvents, setShowEvents] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const addEvent = event => {
        setEvents(prevEvents => {
            return [...prevEvents, event];
        });
        setShowModal(false);
    };

    const deleteEvent = id => {
        setEvents(
            events.filter(event => {
                return event.id !== id;
            })
        );
    };

    const subtitle = "All the latest events in Marioland";

    return (
        <div className='App'>
            <Title title='Events in Your Area' subtitle={subtitle} />
            {showEvents && (
                <div>
                    <button onClick={() => setShowEvents(false)}>
                        Hide Events
                    </button>
                </div>
            )}
            {!showEvents && (
                <div>
                    <button onClick={() => setShowEvents(true)}>
                        Show Events
                    </button>
                </div>
            )}
            {showEvents && (
                <EventList events={events} handleClick={deleteEvent} />
            )}
            <button onClick={() => setShowModal(true)}>Add New Event</button>

            {showModal && (
                <Modal isSalesModal={true}>
                    <NewEventForm addEvent={addEvent} />
                </Modal>
            )}
        </div>
    );
}

export default App;
