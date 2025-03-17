import React from 'react';
import Banner from '../../Components/HomeBanner/Banner';
import DisCoverBrands from '../../Components/Brand/DisCoverBrands';
import DiscoverStyle from '../../Components/DiscoverStyle/DiscoverStyle';
import OurService from '../../Components/OurService/OurService';
import KnowAbout from '../../Components/KnowAbout/KnowAbout';
import RentCar from '../../Components/RentCar/RentCar';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <DisCoverBrands></DisCoverBrands>
            <DiscoverStyle></DiscoverStyle>
            <RentCar></RentCar>
            <OurService></OurService>
          
            <KnowAbout></KnowAbout>
          
        </div>
    );
};

export default Home;