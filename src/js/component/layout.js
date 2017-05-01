import React from 'react';
import Header from  './Header';
import Footer from  './Footer';
class Layout extends React.Component {
	constructor() { 
		super();
		this.name = "okoro";
		this.state = { words : "I believe in God", name: "Regina"}
	}
	getval() {
		return "happy val";
	}
	changeName(name) {
			this.setState({name});
	}
	render () { 
		var name = "cele";
		/**
		setTimeout(() => {
			this.setState({words : "Jesus is my banner",name :"Celestine"});
		},2000)
		**/
		
		return (
			/**
			<div>
			<Header name={this.state.name} changeName={this.changeName.bind(this)} />
		
			<quote>  {this.state.words}	</quote> 
			<p>It {this.name} {name} </p>
			<p> {this.getval()}  </p>
			<Footer />
			</div>
			**/
			<h1> KillerNews.net </h1>
		);
	}
}
export default Layout;