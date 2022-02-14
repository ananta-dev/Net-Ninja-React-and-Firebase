import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import { useState } from "react";

function App() {
    const [events, setEvents] = useState([
        { title: "mario's birthday bash", id: 1 },
        { title: "bowser's live stream", id: 2 },
        { title: "race on moo moo farm", id: 3 },
    ]);

    const [showEvents, setShowEvents] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const deleteEvent = id => {
        setEvents(
            events.filter(event => {
                return event.id !== id;
            })
        );
    };

    const modalHandleClose = () => {
        setShowModal(false);
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
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            {showModal && (
                <Modal handleClose={modalHandleClose}>
                    <h2>Terms and Conditions</h2>
                    <p>
                        Lorem ipsum dolor sit amet, te eum eripuit admodum
                        honestatis, vim diam nibh facilisis ad. Ea assum
                        consequat democritum mea, sed ea nusquam senserit.
                        Corrumpit persecuti liberavisse et nam, ea amet eius
                        tractatos vix. Cu erant accusata deseruisse mea. Usu in
                        porro graece atomorum. Ei amet senserit conclusionemque
                        vel, ut sit amet repudiandae. Sed id tation cetero.
                        Vidit audire dissentias pri eu, ex eam omnium ornatus
                        deterruisset. Pri id ferri congue, ei eos quod offendit,
                        error debitis facilisis eu quo. Ea sit veniam vivendum
                        temporibus. Eu facete utamur equidem per, ex debitis{" "}
                    </p>
                </Modal>
            )}
        </div>
    );
}

export default App;
