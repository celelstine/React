import React from 'react';

class Archives extends React.Component {
	render () {
		const {params} = this.props;
		const {article} = params;
		const { query} = this.props.location;
		const { date, filter } = query;
		console.log(this.props);
		//console.log(params);
		//console.log(article);
		return (
		<div>
			<h2> Archives </h2>
			<p> This is the warehouse of history </p>
			<h4>Article : ({article}) </h4>
			<h3> On {date} , about {filter} </h3>
		</div>
		);
	}
}
export default Archives;