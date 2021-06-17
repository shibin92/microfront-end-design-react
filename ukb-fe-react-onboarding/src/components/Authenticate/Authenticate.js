import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
const UkbButton = React.lazy(() => import('commons/UkbButton'));
const UkbTextbox = React.lazy(() => import('commons/UkbTextbox'));
const Authenticate = () => {
	let history = useHistory();
	const [offerId, setOfferId] = useState('');
	const [postCode, setPostCode] = useState('');

	const onChangeOfferId = (value) => {
		console.log('offer Id', value);
	}
	const onChangePostcode = (value) => {
		console.log('Post code', value);
	}
	const onClickNext = (value) => {	
		history.push('/meter-points');
		// return new Promise((resolve) =>{
		// 	setTimeout(resolve, 2000);
		// }).then(() => {
		// 	console.log('print click next');
		// 	history.push('/meter-points');
		// });
	}
	return (
		<div className="row">
			<div className="col">
				<div className="row">
					<div className="col-12">
						<h4 className="dark-blue text-center m-4 font-weight-normal">Check your onboarding status</h4>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col content-form">
						<React.Suspense fallback='Loading Button'>
							<UkbTextbox onChange={onChangeOfferId} labelTxt="<strong>OfferId</strong>" placeholder="Please enter the Offer ID"/>
							<UkbTextbox onChange={onChangePostcode} labelTxt="<strong>Postcode</strong>" placeholder="Please enter the Post Code"/>
							<center><UkbButton className="btn btn-primary col-4" onClick={onClickNext}>Next</UkbButton></center>
						</React.Suspense>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Authenticate;