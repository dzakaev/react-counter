import React from 'react';
import Number from './Number';
import Buttons from './Buttons';

function MainContent() {
  return (
    <>
      <div className="border"/>
      <div className="main">
        <Number />
        <Buttons />
      </div>
    </>

  );
}

export default MainContent;