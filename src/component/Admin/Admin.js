import React from 'react';
import fakeData from '../../fakeData';

const Admin = () => {
    const handleEventsAll = () => {
        fetch("http://localhost:5000/addEvent", 
        { 
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)

    
    })

    }
    return (
        <div>
            <p>admin</p>
            <button onClick={handleEventsAll}>add all events</button>
        </div>
    );
};

export default Admin;