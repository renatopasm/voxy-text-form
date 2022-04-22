import React from 'react';
import './App.css'
import RPTextForm from '../RPTextForm/RPTextForm'

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
			<div className='App'>
				<header>
					<div className='App-header'>
						<label>
							<b>VOXY - Text Form</b>
						</label>
					</div>
				</header>
				<body>
					<RPTextForm 
						onSuccessCallback = {this.handleSuccessCallback}
						onErrorCallback = {this.handleErrorCallback}/>
					<div className='App-Message'>						
						<b>{successMessage ? successMessage : errorMessage}</b>
					</div>
				</body>
			</div>
		)
	}
}
export default App
