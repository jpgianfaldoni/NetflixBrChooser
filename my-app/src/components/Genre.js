import React from 'react'
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



class Genre extends React.Component {
	constructor(){
		super()
    }


    render(){
		return(
            <div>
                <header>
                  <element onClick = {this.props.backButton}>&#x21e6;</element>
                </header>
                <h1>Escolha o <code>gênero</code> que quer assistir</h1>
                <div className = "outerbuttons">
                  <div className = "buttons">
                      <button class="hoverable" value ="" onClick = {(e) => this.props.handleChange(e, "genre")}>Tanto faz</button>
                      <button class="hoverable" value ="Action" onClick = {(e) => this.props.handleChange(e, "genre")}>Ação</button>
                      <button class="hoverable" value ="Animation" onClick = {(e) => this.props.handleChange(e, "genre")}>Animação</button>
                      <button class="hoverable" value ="Adventure" onClick = {(e) => this.props.handleChange(e, "genre")}>Aventura</button>
                      <button class="hoverable" value ="Comedy" onClick = {(e) => this.props.handleChange(e, "genre")}>Comédia</button>
                      <button class="hoverable" value ="Crime" onClick = {(e) => this.props.handleChange(e, "genre")}>Crime</button>
                      <button class="hoverable" value ="Documentary" onClick = {(e) => this.props.handleChange(e, "genre")}>Documentário</button>
                      <button class="hoverable" value ="Drama" onClick = {(e) => this.props.handleChange(e, "genre")}>Drama</button>
                      <button class="hoverable" value ="Fantasy" onClick = {(e) => this.props.handleChange(e, "genre")}>Fantasia</button>
                      <button class="hoverable" value ="Horror" onClick = {(e) => this.props.handleChange(e, "genre")}>Horror</button>
                      <button class="hoverable" value ="Romance" onClick = {(e) => this.props.handleChange(e, "genre")}>Romance</button>
                      <button class="hoverable" value ="Thriller" onClick = {(e) => this.props.handleChange(e, "genre")}>Suspense</button>
                  </div>
                </div>
            </div>
		)

	}
}



export default Genre;