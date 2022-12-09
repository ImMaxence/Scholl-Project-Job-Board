import Add_adver from "../components/Add_adver";
import Card_ad from "../components/Card_ad";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Order from "../components/Order";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Particular = () => {
    // let navigate = useNavigate();
    const location = useLocation();
    try {
        if (location.state.id != null) {
            var id = location.state.id
            console.log('Home id = ' + id)
        }

    }
    catch (error) {
        console.log(error)
        window.location.href = '/';
    }


    return (
        <div>
            <Header id={id} />
            <Navigation />
            <Add_adver id={id} />
            <Order />
            <Card_ad id={id} />
            <Footer />
        </div>
    );
};

export default Particular;