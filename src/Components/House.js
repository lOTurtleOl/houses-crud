import React from "react";
import { NewRoomForm } from './NewRoomForm';

// functional component which takes props, destructures house and updateHouse props
export const House = (props) => {
    const { house, updateHouse } = props;

    // method which takes id and deletes room- updated house is current house minus the room with the specified id
    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house, 
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    }

    // method which takes room argument and updates house with the new room added to rooms array
    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});

    // method which maps over rooms array and creates a list item for each room and a delete button
    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label>
                    <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    
    return (
        <div>
            <h1>{house.name}</h1>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );

}