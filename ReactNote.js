/*

npm i react react-dom --save
npm i webpack -g

react-router - for page routing
Redux, Flux

JSX - syntaxis

use functions withean class
*/

import React, { Component, PropTypes } from 'react';


import './styles.css' //all styles in all documents will import in html header - will global	

export default class App extends Component{
	constructor(props){
		super(props);
		this.func.bind(this);
		this.state = {

		};
	};

	//input data validator
	static propTypes = {
		items: PropTypes.array.isRequired,
		isLoading: PropTypes.bool,
		submit: PropTypes.func,
		title: PropTypes.string.isRequired,
		type: PropTypes.oneOf(['news', 'photos']),
		user: PropTypes.shape({
			name: PropTypes.string,
			age: PropTypes.number
		}),
		users: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				age: PropTypes.number
			})
		)
	};
	componentDidMount = function(){
        this.button.focus();
    };
	func = () => {console.log('func is call')};

	render(){
		let some = "test string"
		return (
			<div className='root'> {/*it is 'class' - for styles*/}
				Some is: {some}
				<button ref={(button) => this.button = button}>Test</button> {/*wihin render "button" will available form 'this'*/}
			</div>
		)
	}

};