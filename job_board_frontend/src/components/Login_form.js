import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login_form = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    let navigate = useNavigate();

    const [active, setActive] = useState(0);


    const handlePeople = () => {
        axios.post('http://localhost:8080/api/people/login', {
            email: email
        }).then(response => {

            if (response.data[0].password === password) {
                navigate('/home', { state: { id: response.data[0].id, isAdmin: response.data[0].isAdmin } });
            }
        })
            .catch(error => {

                if (password.length == 0 || email.length == 0) {
                    setErrMsg('Miss password or email')
                }
                else if (!error.response) {
                    setErrMsg('Email or Password are wrong');
                }
            })

    }

    const handleCompanie = () => {
        axios.post('http://localhost:8080/api/companie/login', {
            email: email
        }).then(response => {

            if (response.data[0].password === password) {

                navigate('/home', { state: { id: response.data[0].id } });
            }
        })
            .catch(error => {

                if (password.length == 0 || email.length == 0) {
                    setErrMsg('Miss password or email')
                }
                else if (!error.response) {
                    setErrMsg('Email or Password are wrong');
                }
            })

    }

    return (
        <>
            <section className="sec1">
                <div className="aa">
                    <img src="./mini_logo.png" alt="logo" />
                    <h1>Maxence²</h1>
                    <h5>The NEW recruitment platform²</h5>
                </div>
                <div className="bb">
                    <div className="div1">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='error'>{errMsg}</Form.Label><br></br>
                                <Form.Label className='title_form'>Login Page</Form.Label><br></br>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required onChange={handleEmail} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required onChange={handlePassword} />
                            </Form.Group>


                            <Form.Check
                                type="radio"
                                label="Particular"
                                checked={active == 0}
                                onClick={() => setActive(0)}

                                id="radio1"
                            />
                            <Form.Check
                                type="radio"
                                label="Companie"
                                checked={active == 1}
                                onClick={() => setActive(1)}
                                id="radio2"
                            />

                            <div className="flex_button">
                                <div>
                                    <Button variant="secondary" type='submit' onClick={(event) => {
                                        event.preventDefault()

                                        if (document.getElementById('radio1').checked) {

                                            handlePeople()

                                        }
                                        else if (document.getElementById('radio2').checked) {

                                            handleCompanie()

                                        }
                                    }}>Login</Button>
                                </div>
                                <div className='margin_button'>
                                    <Button variant="dark" href="/register">or Register</Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>

        </>

    );
};

export default Login_form;