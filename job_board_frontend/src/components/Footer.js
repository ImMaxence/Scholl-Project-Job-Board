import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <>
            <MDBFooter className='light text-center text-white'>
                <div className='text-center p-3' width='10px' heigth='10px' style={{ backgroundColor: 'rgba(0, 0, 0.5, 0.2)' }}>
                    © 2022 Maxence²
                </div>
            </MDBFooter>

        </>
    );
}
export default Footer;