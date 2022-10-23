import React from 'react';
import ImageDisplay from '../components/ImageDisplay';
import MainImageDisplay from '../components/MainImageDisplay';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div>
            <Menu />
            <MainImageDisplay imgPath="./halloween.jpg" text="Offre spéciale Halloween" />
            <MainImageDisplay imgPath="./box.jpg" text="Nouveau ! Découvrez les box de fleurs" />
            <div className="img-home">
                <ImageDisplay imgPath="./bouquet.jpg" text="BOUQUETS" />
                <ImageDisplay imgPath="./graines.jpg" text="GRAINES" />
                <ImageDisplay imgPath="./fleurs.jpg" text="FLEURS" />
                <ImageDisplay imgPath="./offre.jpg" text="OFFRES" />
                <ImageDisplay imgPath="./cadeaux.jpg" text="CADEAUX" />
                <ImageDisplay imgPath="./contact.jpg" text="CONTACT" />
            </div>
        </div>
    );
};

export default Home;