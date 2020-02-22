import React, {useState} from 'react';
import './App.css'

function AddCounterForm(props) {
    const [name, setName] = useState('Name');
    const [count, setCount] = useState('Initial value');
    const onSubmit = () => {
        props.onSubmit(name, count);
        setName('');
        setCount('');
    };

    return (
        <div className='row'>
            <div className="col">
            <strong> Add new counter </strong>
            <input type='text' name='name' value={name} onChange={e => setName(e.target.value)}
                   className='form-control'/>
            <input type='text' name='count' value={count} onChange={e => setCount(e.target.value)}
                   className='form-control '/>
            <button onClick={() => onSubmit(name, count)}>Add counter</button>
            </div>
        </div>
    );
}

export default AddCounterForm;
