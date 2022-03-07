import "./NewEventForm.css";
import { useState } from "react";

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("manchester");

    const resetForm = () => {
        setTitle("");
        setDate("");
        setLocation("manchester");
    };

    const handleSubmit = e => {
        e.preventDefault();

        const newEvent = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 100000),
        };
        console.log(newEvent);
        addEvent(newEvent);
        resetForm();
    };

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input
                    type='text'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input
                    type='date'
                    onChange={e => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <label>
                <span>Event location:</span>
                <select onChange={e => setLocation(e.target.value)}>
                    <option value='manchester'>Manchester</option>
                    <option value='london'>London</option>
                    <option value='cardiff'>Cardiff</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    );
}
