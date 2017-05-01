import React from 'react';
class Title extends React.Component {
	render () { 
		return (
		<div>
			<h1> learn React, welcome {this.props.name}</h1>
		</div>
		);
	}
}
export default Title;