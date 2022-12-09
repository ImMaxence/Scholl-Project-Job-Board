import React, { useState } from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import axios from 'axios';
import Card_ad from './Card_ad';

const Order = () => {

    var data = '';
    var request = '';

    const items_order = ["Lastest Date", "Oldest Date", "Upper Salarie", "Lower Salarie"];
    const items_type = ["CDD", "CDI", "Alternance", "Stage"]
    var selectedItem = '';



    var handleFilter = (event) => {
        event.preventDefault()
        switch (selectedItem) {
            case 'Lastest Date':
                request = 'orderBy=infcreatedDate';
                break;
            case 'Oldest Date':
                request = 'orderBy=supcreatedDate';
                break;
            case 'Upper Salarie':
                request = 'orderBy=infsalarie';
                break;
            case 'Lower Salarie':
                request = 'orderBy=infsalarie';
                break;
        }

        var requestApi = "http://localhost:8080/api/advertisement/?" + request

        axios
            .get(requestApi)
            .then((response) => {
                data = response.data;

            })
    }

    var handleRequest = (item) => {
        selectedItem = item
    }

    return (
        <>
            <Form>
                <div className="flex_order">
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-info" id="dropdown-basic">Order by...</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {items_order.map((item) => (
                                <Dropdown.Item onClick={() => { handleRequest(item) }}>
                                    {item}

                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <div className="type">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-info" id="dropdown-basic">Type...</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {items_type.map((item) => (
                                    <Dropdown.Item onClick={() => { handleRequest(item) }}>
                                        {item}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="check">
                        <Form.Check
                            type='checkbox'
                            label='Remotely'
                        />
                    </div>
                    <Button variant="secondary" type='submit' onClick={handleFilter}>Search !</Button>
                </div>
            </Form >
        </>

    );
};

export default Order;