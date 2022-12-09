import React from 'react';
import Register_people from '../components/Register_people';
import Register_companie from '../components/Register_companie';

const Register = () => {
    return (
        <>
            <div className="img_re">
                <img src="./mini_" alt="" />
            </div>
            <section className="re">
                <Register_companie />
                <Register_people />
            </section>

        </>
    );
};

export default Register;