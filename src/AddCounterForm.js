import React, {useState} from 'react';
import './App.css'

function AddCounterForm(props) {
    const [name, setName] = useState('Enter name');
    const [count, setCount] = useState('Enter value');
    const onSubmit = () => {
        props.onSubmit(name, count);
        setName('');
        setCount('');
    };

    return (

        <div className='form form-group'>
            <h3> Add new counter </h3>
            <div className='row-cols-6'>
                <div className="row-cols-1">
                    <input type='text' name='name' value={name} onChange={e => setName(e.target.value)}
                           className='form-control card text-center alert alert-secondary'/>
                </div>
                <div className="row-cols-1">
                    <input type='text' name='count' value={count} onChange={e => setCount(e.target.value)}
                           className='form-control card text-center alert alert-secondary'/>
                </div>
                <button onClick={() => onSubmit(name, count)}
                        className='btn btn-success'>Add counter
                </button>
            </div>
        </div>

    );
}

export default AddCounterForm;
