import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
import Form from 'react-bootstrap/Form';

const Delete = (props) => {

    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else if (form.checkValidity() === true) {
            event.preventDefault();
            const url_del = 'http://localhost:8080/api/advertisement/' + props.prop.cardId
            const options = {
                method: 'DELETE',
                url: url_del,
            };
            axios(options)
                .then(response => {
                    console.log(response)
                    handleClose()
                    window.location.href = '/home'
                })
                .catch(error => {
                    console.log(error);
                })
        }

        setValidated(true);
    };

    return (
        <>

            <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>You want to delete ?</Modal.Title>
                </Modal.Header>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>No</Button>
                        <Button variant="primary" type='submit'>Yes</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default Delete;