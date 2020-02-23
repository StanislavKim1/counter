import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

function ModalWindow(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('Enter name');
    const onSubmit = () => {
        props.onSubmit(name);
        setName('');
    };

    return (
        <>
            <button className='btn btn-primary' onClick={handleShow}> Show modal window</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Enter counter name {props.name} to delete it
                    </Modal.Title>
                </Modal.Header>
                <input type='text' name='name' value={props.name} onChange={e => setName(e.target.value)}
                       className='form-control from'/>
                <Modal.Footer>
                    <button className='btn btn-primary' onClick={handleClose}>
                        Cancel
                    </button>
                    <button className='btn btn-danger' onSubmit={handleClose}>
                        Delete Counter
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalWindow;

