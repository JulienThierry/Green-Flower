import React from 'react';
import MainImageDisplay from '../components/MainImageDisplay';
import Menu from '../components/Menu';

const Home = () => {
    return (
        <div>
            <Menu />
            <MainImageDisplay imgPath="./haloween.jpg" text="Offre spéciale Haloween" />*
            <MainImageDisplay imgPath="./box.jpg" text="Nouveau ! Découvrez les box de fleurs" />
        </div>
    );
};

export default Home;