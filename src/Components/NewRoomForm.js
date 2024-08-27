import React, { useState } from 'react';

// function for room form which takes props as argument and defines state of room name and area
export const NewRoomForm = (props) => {
    const [name, setName] = useState('');
    const [area, setArea] = useState('');

    // method which takes in the event and parses the input value to set area
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setArea(int >= 0 ? int : '');
    }

    // submit method which takes event, if area and name aren't empty, addNewRoom and reset states
    const onSubmit = (e) => {
        e.preventDefault();
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('Invalid input');
        }
    };

    return (
        <div>
            <h4>Add a new room</h4>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <input
                type='text'
                placeholder='area'
                onChange={handleAreaInput}
                value={area}
                />
                <button type='submit'>Add room</button>
            </form>
        </div>
    )
}