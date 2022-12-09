import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button, ListGroup, Modal } from 'react-bootstrap';
import { BiBeenHere, BiUserCircle } from "react-icons/bi";
import ShowMore from 'react-show-more-button';
import Apply from './Apply';
import Delete from './Delete';
import Edit from './Edit';

const Card_ad = (id) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/advertisement")
            .then((response) => setData(response.data));

    }, []);

    return (
        <>
            <div className='container_card'>
                <div className="d-flex flex-wrap gap-3 justify-content-evenly">
                    {data.map((card_data, advertisement) => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./default.png" alt="image_not_load" />
                            <Card.Body >
                                <Card.Title key={advertisement.id}>{card_data.title}</Card.Title>
                                <Card.Text key={advertisement.id}><BiBeenHere /> {card_data.location} | <BiUserCircle /> {card_data.username}<br></br>
                                    Published {Math.round(((new Date()) - (new Date(card_data.createdDate.substring(0, 10)).getTime())) / (1000 * 3600 * 24))} days ago</Card.Text>
                            </Card.Body >
                            <ListGroup className="list-group-flush"></ListGroup>
                            <Card.Body>
                                <ShowMore maxHeight={100}>
                                    <Card.Text key={advertisement.id}>Salary : {card_data.salarie}<br></br>
                                        Type : {card_data.type}<br></br>
                                        Min Level : {card_data.qualificationRequired}</Card.Text>
                                    <Card.Text key={advertisement.id}>{card_data.description}</Card.Text>
                                    <div className="button_card2">
                                        <Apply prop={{ id: id.id, cardId: card_data.id }} />
                                        <Delete prop={{ id: id.id, cardId: card_data.id }} />
                                        <Edit prop={{ id: id.id, cardId: card_data.id }} />
                                    </div>
                                </ShowMore>
                            </Card.Body>
                        </Card >))
                    }
                </div >
            </div>
        </>
    );

};

export default Card_ad;