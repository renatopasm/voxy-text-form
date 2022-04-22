import React from 'react';
import RPTextForm from './RPTextForm'

class App extends React.Component{
	state = {
		successMessage: '',
		errorMessage: ''
	}		

	handleSuccessCallback = (props) =>{
		this.setState({
						successMessage: props,
						errorMessage: null
					})
	}

	handleErrorCallback = (props) =>{
		this.setState({
			successMessage: null,
			errorMessage: props
		})
		throw Error(props);
	}

	render(){
		const {successMessage, errorMessage} = this.state;
		return(
			<div>
				<RPTextForm 
					successCallback = {this.handleSuccessCallback}
					errorCallback = {this.handleErrorCallback}/>
				<b>{successMessage ? successMessage : errorMessage}</b>
			</div>
		)
	}
}
export default App
