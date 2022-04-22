import React from 'react'
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
				return this.props.successCallback(textReplaced.match(/\S+/g).length + ' words witten.');
			else 
				throw new SyntaxError('This component need to be filled with valid words.');
		}
		catch(error)
		{
			return this.props.errorCallback(error.toString());
		}   
		
	};

	render(){
		return(
		<div>
			<form onSubmit = {this.onSubmit}>
				<textarea 
					name = "rpTextArea" 
					placeholder = "Enter Text"
				/>
				<br/>
				<br/>
				<input type = "submit" value = "Submit"/>
				<br/>
				<br/>
			</form>
		</div>
		)
	}
}
export default RPTextForm
