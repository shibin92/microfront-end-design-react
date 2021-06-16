import logo from '../../images/menu-bg-logo.20170320.svg';
import React from 'react';

const Header = () => {
	return (
		<div className="row px-2 background-white">
			<div className="col-6 col-lg-2 col-md-3 pt-3">
			<img alt="British Gas" src={logo} />
			</div>
			<div className="col-6 col-lg-10 col-md-9 p-0 pl-md-2 mt-md-5 pt-md-1 mb-2 dark-blue d-flex align-items-end onboarding-header-text font-weight-normal">
				<h4>Onboarding</h4>
			</div>
		</div>
	);
}

export default Header;