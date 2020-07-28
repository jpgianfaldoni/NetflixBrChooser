import React from 'react'
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



class Language extends React.Component {
	constructor(){
		super()
		this.state = {
            option : ""
        }
    }


    render(){
		return(
            <div>
                <header>
                    <element onClick = {this.props.backButton}>&#x21e6;</element>
                </header>
                <h1>Escolha o <code>idioma</code> que quer assistir</h1>
                <div className = "buttons">
                    <button class="hoverable" value ="" onClick = {(e) => this.props.handleChange(e, "language")}>Tanto faz</button>
                    <button class="hoverable" value ="Portuguese" onClick = {(e) => this.props.handleChange(e, "language")}>Português</button>
                    <button class="hoverable" value ="English" onClick = {(e) => this.props.handleChange(e, "language")}>Inglês</button>
                    <button class="hoverable" value ="German" onClick = {(e) => this.props.handleChange(e, "language")}>Alemão</button>
                    <button class="hoverable" value ="Spanish" onClick = {(e) => this.props.handleChange(e, "language")}>Espanhol</button>
                    <button class="hoverable" value ="French" onClick = {(e) => this.props.handleChange(e, "language")}>Francês</button>
                    <button class="hoverable" value ="Japanese" onClick = {(e) => this.props.handleChange(e, "language")}>Japones</button>
                    <button class="hoverable" value ="Korean" onClick = {(e) => this.props.handleChange(e, "language")}>Coreano</button>
                    <button class="hoverable" value ="Italian" onClick = {(e) => this.props.handleChange(e, "language")}>Italiano</button>

                </div>
            </div>
		)

	}
}



export default Language;