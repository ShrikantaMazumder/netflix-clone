import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqContainer } from '../containers/faqs';
import FooterContainer from '../containers/footer';


const Home = () => {
    
    return (
        <>
            <JumbotronContainer />
            <FaqContainer />
            <FooterContainer />
        </>
    );
};

export default Home;