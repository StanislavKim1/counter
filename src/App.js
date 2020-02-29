import React, {useState} from 'react';
import Counter from "./Counter";
import AddCounterForm from "./AddCounterForm";
import 'bootstrap/dist/css/bootstrap.css';
import ConfirmationDelete from "./ConfirmationDelete";


function App() {
    const InitialCountersState = [
        {id: 1, name: 'Counter 1', count: 2},
        {id: 2, name: 'Counter 2', count: 5},
        {id: 3, name: 'Counter 3', count: 8},
        {id: 4, name: 'Counter 4', count: 9},
    ];

    const [counters, setCounters] = useState(InitialCountersState);
    const [confirmCounter, setConfirmCounter] = useState({});

    const resetTotalCount = () => {
        const newCounters = counters.map(el => ({...el, count: 0}));
        setCounters(newCounters);
    };

    const incrementCounter = (id) => {
        console.log('INC ' + id);
        const index = counters.findIndex(el => el.id === id);
        const newCounters = [...counters];
        newCounters[index].count = counters[index].count + 1;
        setCounters(newCounters);
    };

    const decrementCounter = (id) => {
        console.log('DECR ' + id);
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, count: el.count - 1};
            return el;
        });
        setCounters(newCounters);
    };

    const confirmRemoveCounter = counter => {
        setConfirmCounter(counter);

    };

    const removeConfirm = id => {
        const newCounters = counters.filter(el => el.id !== confirmCounter.id);
        setCounters(newCounters);
        setConfirmCounter({})
    };

    const confirmDeleteCancel = () => {
        setConfirmCounter({});
    };

    const addCounter = (name, count) => {
        const newCounters = [...counters, {
            id: Math.ceil(Math.random()) * 10,
            name,
            count: Number(count)
        }];
        setCounters(newCounters);
    };

    return (
        <div className='container'>
            <h1 className=''>Total: {counters.reduce((a, c) => a + c.count, 0)}</h1>
            <hr/>
            <h2 className='page-header'>Counters</h2>
            <button onClick={resetTotalCount} className='btn btn-primary'>Reset total count</button>
            <hr/>
            {
                counters.map(el => <Counter key={el.id}
                                            counter={el}
                                            increment={incrementCounter}
                                            decrement={decrementCounter}
                                            purify={confirmRemoveCounter}
                />)
            }
            <hr/>
            <AddCounterForm onSubmit={addCounter}/>
            <ConfirmationDelete
                name={confirmCounter.name}
                onSuccess={removeConfirm}
                onCancel={confirmDeleteCancel}
            />

        </div>
    );
}

export default App;
