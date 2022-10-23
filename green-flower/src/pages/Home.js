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
                <ImageDisplay imgPath="./box.jpg" text="titre" />
                <ImageDisplay imgPath="./box.jpg" text="titre" />
                <ImageDisplay imgPath="./box.jpg" text="titre" />
                <ImageDisplay imgPath="./box.jpg" text="titre" />
            </div>
        </div>
    );
};

export default Home;