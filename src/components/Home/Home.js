import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';
import './Home.css';

const Home = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, []);

    return (
        <div>
            <h2>This is Home Page</h2>
            <div className='rooms-container'>
                {
                    rooms.map(room => <Room room={room} key={room._id} />)
                }
            </div>
        </div>
    );
};

export default Home;