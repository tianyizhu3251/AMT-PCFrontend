import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsContainer from './pc_newscontainer';

export default class PCIndex extends React.Component {
	constructor() {
		super();
		this.state = {
			current: 'general'
		};
	};

	getType(key) {

	this.setState({current:key});
	console.log( "father"+ key);
	console.log("fathe's state is"+this.state.current);


};




	render() {
		return (
			<div>
				<PCHeader getType={this.getType.bind(this)}></PCHeader>
				<PCNewsContainer type={this.state.current}></PCNewsContainer>
				<PCFooter></PCFooter>
			</div>
		);
	};
}
