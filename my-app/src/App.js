import React from 'react';
import Genre from "./components/Genre"
import Type from "./components/Type"
import Actor from "./components/Actor"
import Language from "./components/Language"
import ChosenMovie from "./components/ChosenMovie"
import Grid from '@material-ui/core/Grid';




class App extends React.Component {

	constructor(){
		super()
		this.state = {
			loading: true,
			movieData: {},
			topText: "",
			genre: "",
			type: "",
			actor:"",
			language:"",
			page: 0,
		}
		this.handleChange = this.handleChange.bind(this)
		this.backButton = this.backButton.bind(this)
		this.handleSubmitActor = this.handleSubmitActor.bind(this)
	}

	componentDidMount() {
		this.setState({
			loading : false
		})
	}

	handleChange(event, state){
		const {value} = event.target
		this.setState({
			[state]: value,
			page: this.state.page + 1
		})
	}
	handleSubmitActor(event){
		event.preventDefault()
		this.setState({
			actor: this.state.topText.replace(/\s/g, '+'),
			page: "actor"
		})
	}

	backButton(event){
		event.preventDefault()
		this.setState({
			page: this.state.page - 1
		})
	}




	
	render(){
			return(
			<div>
				{
					this.state.loading ? <h1>Loading</h1> :
					this.state.page == 0 ?
				<div >
                    <Type handleChange = {this.handleChange}/>
				</div>: this.state.page == 1 ?
				<div >
					<Genre genreList = {this.state.genreList} handleChange = {this.handleChange} backButton = {this.backButton}/>
				</div>: this.state.page == 2?
				<div>
					<Language handleChange = {this.handleChange} backButton = {this.backButton}/>
				</div>:this.state.page != "actor"?
				<div>
					<Actor topText = {this.state.topText} handleSubmitActor = {this.handleSubmitActor} handleChange = {this.handleChange}/>
				</div>:
				<div>
					<ChosenMovie genre = {this.state.genre} type = {this.state.type} actor = {this.state.actor} language = {this.state.language}/>
				</div>

				

				}
			</div>	
	)

}
}


export default App;
