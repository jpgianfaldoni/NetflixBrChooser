import React from 'react'
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



class Actor extends React.Component {
	constructor(){
		super()
		this.state = {
            option : ""
        }
    }


    render(){
		return(
            <div>
                <h1>Algum <code>ator </code> específico?</h1>
                <form onSubmit = {this.props.handleSubmitActor}>
                    <input type="text" id="input" class="Input-text" placeholder="e.g. Brad Pitt" value = {this.props.topText} onChange={(e) => this.props.handleChange(e, "topText")} ></input>
                    <button class = "hoverable" onClick = {(e) => this.props.handleChange(e, "actor")}>&#10004;</button>
                </form>
                <button class="hoverable" value ="" onClick = {this.props.handleSubmitActor}>Tanto faz</button>

            </div>
		)

	}
}



export default Actor;