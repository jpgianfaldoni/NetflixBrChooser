import React from 'react';
import 'fontsource-roboto';



class Movies extends React.Component {

	constructor(){
	super()
	this.state = {
		loading: true,
		completeData: {}
		}
	this.handleChange = this.handleChange.bind(this)

	}

	componentDidMount() {
		const id = this.props.id
		this.setState({
			completeData : this.props.movieDataSent[id] 
		})
	}

	componentDidUpdate(){
	}

	
	handleChange(event){
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	render(){
		const id = this.props.id
		return(
			<div>
			{
				this.props.loading ? <h1>Loading</h1> :
				<div className = "moviesComponent">
					<h3>
						{this.props.movieDataSent[id].name}
					</h3>
					<div>
						<img src = {this.props.movieDataSent[id].poster} width = "300" height = "430"/>
					</div>
					<h3>
						Release Year: {this.props.movieDataSent[id].release_year}
					</h3>
					<h3>
						Genre: {this.props.movieDataSent[id].genre}
					</h3>
					<h3>
						Imdb Rating: {this.props.movieDataSent[id].imdb_rating}
					</h3>
				</div>
			}
			</div>	
	)

}
}


export default Movies;
