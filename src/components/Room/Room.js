import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Room.css';

const Room = ({ room }) => {
    const navigate = useNavigate();
    const { discription, name, img } = room;

    const handleNavigate = () => {
        navigate('/checkout');
    }

    return (
        <div className='room-container'>
            <img width={"400px"} height={"300px"} src={img} alt="" />
            <h2>{name}</h2>
            <p>{discription}</p>
            <button onClick={handleNavigate}>Book</button>
        </div>
    );
};

export default Room;