import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const Profile = (id) => {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:8080/api/people/?id=" + id.id)
            .then((response) => setData(response.data));
    }, []);

    return (
        <>
            <div className="d-flex gap-3 flex-wrap-reverse justify-content-evenly">
                {data.map((card_data, index) => (
                    <div className="card">
                        <div className="card-horizontal">
                            <div className="img-square-wrapper">
                                <img
                                    className=""
                                    src=""
                                    alt="IMAGE NOT LOAD"
                                />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Your Profile</h4>
                                <p className="card-text" key={index}>
                                    @{card_data.username}<br></br>
                                    {card_data.lastname} {card_data.firstname}<br></br>
                                    {card_data.email}<br></br>
                                    Born on {card_data.birthDate.substring(0, 10)}
                                </p>

                            </div>
                        </div>
                    </div>
                ))
                }
            </div >
        </>
    );
};

export default Profile;