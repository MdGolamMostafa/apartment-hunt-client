import React from 'react';
import Header from '../../common/Header/Header';
import FindPlacePart from './FindPlacePart/FindPlacePart';
import Footer from './Footer/Footer';
import HouseRentPart from './HouseRentPart/HouseRentPart';
import ServiceList from './ServiceList/ServiceList';

const Home = () => {
    return (
        <div>
            <Header />
            <FindPlacePart/>
            <HouseRentPart/>
            <ServiceList/>
            <Footer/>
        </div>
    );
};

export default Home;