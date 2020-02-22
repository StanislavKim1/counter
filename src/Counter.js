import React from 'react';

function Counter(props) {
    return (
        <div className='card mb-2'>
            <div className='card-body'>
                <div className="row">
                    <div className="col">
                        ID <strong> {props.id} </strong>
                        Counter name<strong> {props.name} </strong>
                        Counter value<strong> {props.count} </strong>
                        <button onClick={() => props.decrement(props.id)} className='bt btn-primary'>-</button>
                        <button onClick={() => props.increment(props.id)} className='bt btn-primary'>+</button>
                        <button onClick={() => props.purify(props.id)} className='bt btn-danger'>Purify</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Counter;
