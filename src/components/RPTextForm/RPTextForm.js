import React from 'react'
import './RPTextForm.css'
class RPTextForm extends React.Component{
	
	onSubmit = (e) => {
		e.preventDefault();
		this.textValidation(e);
	}
	
	textValidation(e){
		try{
			let textReplaced = e.target.rpTextArea.value.replace(/[^a-zA-Z ]/g, " ");
			let regTextIsNotEmpty = /[a-zA-Z]/g;	

			if(regTextIsNotEmpty.test(textReplaced)) 
				return this.props.onSuccessCallback(textReplaced.match(/\S+/g).length + ' words witten.');
			else 
				throw new SyntaxError('This component need to be filled with valid words.');
		}
		catch(error)
		{
			return this.props.onErrorCallback(error.toString());
		}   
		
	};

	render(){
		return(
		<div className='RPTextForm'>
			<form onSubmit = {this.onSubmit}>
				<div className='RPTextForm-Area'>
					<textarea 
						className='RPTextForm-TextArea'
						name = "rpTextArea" 
						placeholder = "Enter Text"
					/>
					<input className='RPTextForm-Submit' type = "submit" value = "Submit"/>
				</div>
			</form>
		</div>
		)
	}
}
export default RPTextForm
