import React from 'react';
import Title from  './Header/Title';

class Header extends React.Component {
	handleChange(e) {
		const name = e.target.value;
		this.props.changeName(name);
	}
	render () {
		console.log(this.props);
		return (
		<div>
			<Title name={this.props.name} />
			<input onChange={this.handleChange.bind(this)} />
		</div>
		);
	}
}
export default Header;