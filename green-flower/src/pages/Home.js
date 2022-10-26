import React from 'react';
import Footer from '../components/Footer';
import ImageDisplay from '../components/ImageDisplay';
import Infos from '../components/Infos';
import MainImageDisplay from '../components/MainImageDisplay';
import Menu from '../components/Menu';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Menu />
            <MainImageDisplay imgPath="./halloween.jpg" text="Offre spéciale Halloween" />
            <MainImageDisplay imgPath="./box.jpg" text="Nouveau ! Découvrez les box de fleurs" />

            <div className="img-home">
                <NavLink to="/products" state={{ myState: "bouquets" }}>
                    <ImageDisplay imgPath="./bouquet.jpg" text="BOUQUETS" state="bouquets" />
                </NavLink>
                <NavLink to="/products" state={{ myState: "myStateValue" }}>
                    <ImageDisplay imgPath="./graines.jpg" text="GRAINES" />

                </NavLink>
                <NavLink to="/products" state={{ myState: "myStateValue" }}>
                    <ImageDisplay imgPath="./fleurs.jpg" text="FLEURS" />

                </NavLink>
                <NavLink to="/products" state={{ myState: "myStateValue" }}>
                    <ImageDisplay imgPath="./offre.jpg" text="OFFRES" />

                </NavLink>
                <NavLink to="/products" state={{ myState: "myStateValue" }}>
                    <ImageDisplay imgPath="./cadeaux.jpg" text="CADEAUX" />

                </NavLink>
                <NavLink to="/" state={{ myState: "myStateValue" }}>
                    <ImageDisplay imgPath="./contact.jpg" text="CONTACT" />

                </NavLink>
            </div>
            <Infos />
            <Footer />
        </div>
    );
};

export default Home;