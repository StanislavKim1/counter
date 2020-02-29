import React from 'react';

function Counter(props) {
    const {counter, increment, decrement, purify} = props;
    return (
        <table className='.table-borderless'>
            <thead>
            <tr>
                <th scope="col">
                    <th scope="row">
                        <th scope="row">
                            <th scope="col">
                                <td colSpan="3">
                                    <strong className='col-sm'> {counter.id} </strong>
                                    <strong className='col-sm'> {counter.name} </strong>
                                    <button onClick={() => decrement(counter.id)}
                                            className='btn btn-primary row-cols-1'>-
                                    </button>
                                    <strong className='col-sm'> {counter.count} </strong>
                                    <button onClick={() => increment(counter.id)}
                                            className='btn btn-primary btn-group mr-2'>+
                                    </button>
                                    <button onClick={() => purify(counter)}
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


