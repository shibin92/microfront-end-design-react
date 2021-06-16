import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const UkbButton = React.lazy(() => import('commons/UkbButton'));
const UkbTextbox = React.lazy(() => import('commons/UkbTextbox'));

const PaymentLogin = () => {
	let history = useHistory();
	const [offerId, setOfferId] = useState('');
	const [postCode, setPostCode] = useState('');

	const onChangePaymentType = (value) => {
		console.log('offer Id', value);
	}
	const onChangeAmount = (value) => {
		console.log('Post code', value);
	}
	const onClickNext = (value) => {
		history.push('/meter-points');
		// return new Promise((resolve) => setTimeout(resolve, 2000));
		// setOfferId(value);
		// setPostCode(value);
	}
	return (
		<div className="row">
			<div className="col">
				<div className="row">
					<div className="col-12">
						<h4 className="dark-blue text-center m-4 font-weight-normal">Do online payment</h4>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col content-form">
						<React.Suspense fallback='Loading Button'>
							<UkbTextbox onChange={onChangePaymentType} labelTxt="<strong>Payment type</strong>" placeholder="Please enter the payment type"/>
							<UkbTextbox onChange={onChangeAmount} labelTxt="<strong>Amount</strong>" placeholder="Please enter the amount"/>
							<center><UkbButton className="btn btn-primary col-4" onClick={onClickNext}>Next</UkbButton></center>
							
						</React.Suspense>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaymentLogin;