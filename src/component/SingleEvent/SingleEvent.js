import React, { useContext } from 'react';
import { EventContext } from '../../App';
// import EventContext from '../App';

const SingleEvent = () => {
    const [loggedInUser, setLoggedInUser, eventdetails, setEventdetails] = useContext(EventContext)
    console.log("single theke ashce",eventdetails)


    const handleAddToDatabase = () => {
        console.log("clicked");
        const newBooking = { ...eventdetails, ...loggedInUser }
        fetch('http://localhost:5000/addUserEvent', 
        { 
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
        


    }

    return (
        <div>
        
            <p>Name: {eventdetails.name}</p>
            <input type="text" value={eventdetails.title}/><br></br>
            <input type="text" value={loggedInUser.name}/><br></br>
            <input type="text" value={loggedInUser.email}/><br></br>
            <input type="text" />

            <button onClick={handleAddToDatabase}>Register</button>

        </div>
    );
};

export default SingleEvent;