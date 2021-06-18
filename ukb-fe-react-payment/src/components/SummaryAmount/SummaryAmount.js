import React from 'react';
import { useHistory } from "react-router-dom";

const UkbButton = React.lazy(() => import('commons/UkbButton'));

const SummarryAmount = () => {
	let history = useHistory();

	const onClickNext = (value) => {
		history.push('/');
		// return new Promise((resolve) => setTimeout(resolve, 2000));
		// setOfferId(value);
		// setPostCode(value);
	}
	return (
		<div>
		<h1>Summary amount</h1>
		<React.Suspense fallback='Loading Button'>
			<center><UkbButton className="btn btn-primary col-4" onClick={onClickNext}>Next</UkbButton></center>
		</React.Suspense>
		</div>
	)
}

export default SummarryAmount;