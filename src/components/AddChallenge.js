import React, { useState } from 'react';
import axios from 'axios'
const AddChallenge = ({onChallengeAdd}) => {
    const [month, setMonth] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:8080/challenges', {
            month,
            description
        });
        setMonth('');
        setDescription('');
        onChallengeAdd();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='month'>Month</label>
                    <input type='text' id='month' value={month} onChange={e => setMonth(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea type='text' id='description' value={description} onChange={e => setDescription(e.target.value)} required></textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddChallenge;