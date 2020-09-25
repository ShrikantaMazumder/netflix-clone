import React from 'react';
import FooterContainer from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';
import { FaqContainer } from './containers/faqs';



export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}


