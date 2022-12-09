import { useLocation } from 'react-router-dom';
import React from 'react';

const StayLog = () => {
    const location = useLocation();
    var id = ''
    var isAdmin = ''
    if (location.state.id != null && location.state.isAdmin != null) {
        id = location.state.id
        isAdmin = location.state.isAdmin
    }

    return (
        <div>
            <h1>rrrrrr</h1>
        </div>
    );
};

export default StayLog;