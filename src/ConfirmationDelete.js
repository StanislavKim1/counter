import React, {useState} from "react";
import {Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export default function ConfirmationDelete(props) {

    const modalConfirmationUserInputChange = (e) => {
        const inputText = e.target.value;
        setIsDisabledDeleteConfirmationButton(inputText.trim().toLowerCase() !== props.name.trim().toLowerCase());
    };
    const [isDisabledDeleteConfirmationButton, setIsDisabledDeleteConfirmationButton] = useState(true);

    const deleteButtonClick = () => {
        setIsDisabledDeleteConfirmationButton(true);
        props.onSuccess();
    };

    const cancelButtonClick = () => {
        setIsDisabledDeleteConfirmationButton(true);
        props.onCancel();
    };
    return (
        <Modal isOpen={props.name} toggle={props.onCancel}>
            <ModalHeader>Delete confirmation</ModalHeader>
            <ModalBody>
                <p>
                    Enter counter name <strong>{props.name} </strong>to delete it
                </p>
                <Form>
                    <FormGroup>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            onChange={modalConfirmationUserInputChange}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger"
                        onClick={deleteButtonClick}
                        disabled={isDisabledDeleteConfirmationButton}>Delete
                </Button>{' '}
                <Button
                    color="secondary"
                    onClick={cancelButtonClick}>Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}