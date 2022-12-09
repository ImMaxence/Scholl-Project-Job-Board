import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
import { Col, Form, Row, Dropdown } from 'react-bootstrap';
import qs from 'qs';
import Edit from './Edit';

const Add_adver = (id) => {



    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [salarie, setSalarie] = useState(0);
    const [qualificationRequired, setQualificationRequired] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [isRemote, setIsRemote] = useState(0);
    const [isActive, setIsActive] = useState(0);
    const [companieId, setCompanieId] = useState('');
    const pictureDataAdvertisement = '';

    const createdDate = new Date();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleLocation = (event) => {
        setLocation(event.target.value)
    }

    const handleSalarie = (event) => {
        setSalarie(event.target.value)
    }

    const handleType = (event) => {
        setType(event.target.value)
    }


    const handleIsRemote = (event) => {
        setIsRemote(event.target.value)
    }

    const handleQualificationRequired = (event) => {
        setQualificationRequired(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const [active, setActive] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault()
        setCompanieId(id)
        setIsActive(1)


        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else if (form.checkValidity() === true) {
            event.preventDefault();
            var date = new Date();
            var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1);
            const data = {
                "title": title,
                "createdDate": current_date,
                "location": location,
                "salarie": salarie,
                "type": type,
                "isActive": 1,
                "isRemote": isRemote,
                "qualificationRequired": qualificationRequired,
                "description": description,
                "companieId": id.id
            };
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                data: qs.stringify(data),
                url: 'http://localhost:8080/api/advertisement/',
            };
            axios(options)
                .then(response => {
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
            <div className="flexplus">
                <Button variant="primary" onClick={handleShow} id='addad'>+ Add an advertissement</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add an advertisement</Modal.Title>
                </Modal.Header>
                <div className='add'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" className='w-100'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="title"
                                    required
                                    onChange={handleTitle}
                                />
                                <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
                                <Form.Control.Feedback>Valid</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" className='w-100'>
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Your location"
                                    required
                                    onChange={handleLocation} />
                                <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
                                <Form.Control.Feedback>Valid</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" className='w-100'>
                                <Form.Label>Salarie</Form.Label>
                                <Form.Control type="number"
                                    placeholder="Salarie"
                                    required
                                    onChange={handleSalarie} />
                                <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
                                <Form.Control.Feedback>Valid</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" className='w-100'>
                                <Form.Label>Type</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Type"
                                    required
                                    onChange={handleType} />
                                <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
                                <Form.Control.Feedback>Valid</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" className='w-100'>
                                <Form.Label>Remote</Form.Label>
                                <Form.Check
                                    type="radio"
                                    label="Yes"

                                    checked={active == 0}
                                    onClick={() => setActive(0)}
                                    value={0}
                                    onChange={handleIsRemote}
                                    id="radio1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="No"
                                    checked={active == 1}
                                    onClick={() => setActive(1)}
                                    value={1}
                                    onChange={handleIsRemote}
                                    id="radio2"

                                />
                                <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
                                <Form.Control.Feedback>Valid</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" className='w-100'>
                                <Form.Label>Qualification</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Qualifacation"
                                    required
                                    onChange={handleQualificationRequired} />
                                <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
                                <Form.Control.Feedback>Valid</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" className='w-100'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Description"
                                    required
                                    onChange={handleDescription} />
                                <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
                                <Form.Control.Feedback>Valid</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" className='w-100'>
                                <Form.Label>Your picture</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Row>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" type='submit'>Submit real</Button>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">Are you a bypass hacker ?</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
                                    <Dropdown.Item href="">No</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Modal.Footer>
                    </Form>
                </div>
            </Modal>



        </>
    );
};

export default Add_adver;