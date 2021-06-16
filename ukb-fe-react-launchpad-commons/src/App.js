import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import UkbTextbox from './components/atoms/UkbTextbox/UkbTextbox';
import UkbButton from './components/atoms/UkbButton/UkbButton';

function App() {

  const [offerId, setOfferId] = useState('');
  const [postCode, setPostCode] = useState('');

  const onChangeOfferId = (value) => {
      console.log('offer Id', value);
  }
  const onChangePostcode = (value) => {
    console.log('Post code', value);
  }
  const onClickNext = (value) => {
    console.log('value+++++++', value);
    return new Promise((resolve) => setTimeout(resolve, 2000));
    // setOfferId(value);
    // setPostCode(value);
  }

  return (
    <div className="container">
      <header className='text-center'>
          <h1> Launchpad commons </h1>
      </header>
      <UkbTextbox onChange={onChangeOfferId} labelTxt='<strong>OfferId</strong>' placeholder='Please enter the Offer ID'/>
      <UkbTextbox onChange={onChangePostcode} labelTxt='<strong>Postcode</strong>' placeholder='Please enter the Post Code'/>
      <center><UkbButton onClick={onClickNext}>Next</UkbButton></center>
    </div>
  );
}

export default App;
