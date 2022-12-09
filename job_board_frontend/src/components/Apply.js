import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import qs from 'qs';

const Apply = (props) => {

    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [motivationLetter, setMotivationLetter] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleMotivationLetter = (event) => {
        setMotivationLetter(event.target.value)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else if (form.checkValidity() === true) {
            event.preventDefault();
            var date = new Date();
            var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1);
            const data = { 'motivationLetter': motivationLetter, "createdDate": current_date, "peopleId": props.prop.id, "advertisementId": props.prop.cardId };
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs.stringify(data),
                url: 'http://localhost:8080/api/jobapplication/',
            };
            axios(options)
                .then(response => {
                    handleClose()
                })
                .catch(error => {
                    console.log(error);
                })
        }

        setValidated(true);
    };

    return (
        <>

            <Button variant="outline-success" onClick={handleShow}>Apply</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Apply to a job</Modal.Title>
                </Modal.Header>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <div className='apply'>
                            <Form.Group as={Col} md="4" className='w-75'>
                                <Form.Control
                                    as="textarea"
                                    type="text"
                                    placeholder="Your motivation letter"
                                    maxLength={250}
                                    rows={10}
                                    required
                                    onChange={handleMotivationLetter}
                                />
                                <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
                                <Form.Control.Feedback>Valid</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" type='submit'>Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default Apply;