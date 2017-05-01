import React from 'react';
class Footer extends React.Component {
	render () { 
		var date = new Date();
		return (
			<footer> c-  {date.getFullYear()} </footer>
		);
	}
}
export default Footer;