import React from 'react';

function Counter(props) {
    return (
        <table className='.table-borderless'>
            <thead>
            <tr>
                <th scope="col">
                    <th scope="row">
                        <th scope="row">
                            <th scope="col">
                                <td colSpan="3">
                                    <strong className='col-sm'> {props.id} </strong>
                                    <strong className='col-sm'> {props.name} </strong>
                                    <button onClick={() => props.decrement(props.id)}
                                            className='btn btn-primary row-cols-1'>-
                                    </button>
                                    <strong className='col-sm'> {props.count} </strong>
                                    <button onClick={() => props.increment(props.id)}
                                            className='btn btn-primary btn-group mr-2'>+
                                    </button>
                                    <button onClick={() => props.purify(props.id)}
                                            className='btn btn-danger btn-secondary'>Purify
                                    </button>
                                </td>
                            </th>
                        </th>
                    </th>
                </th>
            </tr>
            </thead>
        </table>
    );
}


export default Counter;


