import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from "axios";

const Register_form = () => {

    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else if (form.checkValidity() === true) {
            axios.post('http://localhost:8080/api/companie/register', {

                email: email,
                username: username,
                password: password

            }).then(response => {
                console.log(response);
            })
                .catch(error => {
                    console.log(error);
                })
        }

        setValidated(true);
    };

    return (

        <>
            <div className="re1">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>

                        <Form.Group as={Col} md="4" className='w-100'>
                            <Form.Label id='label_register'>Companie register</Form.Label><br></br>

                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    onChange={handleUsername}
                                />
                                <Form.Control.Feedback type="invalid">Please choose a username</Form.Control.Feedback>
                                <Form.Control.Feedback>Nice username</Form.Control.Feedback>
                            </InputGroup>

                        </Form.Group>

                        <Form.Group as={Col} md="4" className='w-100'>
                            <Form.Label>Your picture</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className='w-100'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                                placeholder="Email"
                                required
                                onChange={handleEmail} />
                            <Form.Control.Feedback type="invalid">Please enter a correct email</Form.Control.Feedback>
                            <Form.Control.Feedback>Nice email</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" className='w-100'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                placeholder="Password"
                                required
                                onChange={handlePassword} />
                            <Form.Control.Feedback type="invalid">Enter a valid password</Form.Control.Feedback>
                            <Form.Control.Feedback>Your password are so strong</Form.Control.Feedback>
                        </Form.Group>
                        <div className="buttpeo">
                            <Button variant="secondary" type="submit">Submit form</Button>
                            <div className="log">
                                <Button variant="outline-secondary" href="/">Login</Button>
                            </div>
                        </div>
                    </Row>
                </Form>
            </div>
        </>

    );
};

export default Register_form;