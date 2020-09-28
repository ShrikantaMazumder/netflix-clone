import React from 'react';
import HeaderContainer from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqContainer } from '../containers/faqs';
import FooterContainer from '../containers/footer';



const Home = () => {
    
    return (
        <>
            <HeaderContainer>
                <JumbotronContainer />
                <FaqContainer />
                <FooterContainer />
            </HeaderContainer>
        </>
    );
};

export default Home;