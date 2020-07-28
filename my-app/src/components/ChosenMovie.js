import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Startest from "./Startest"




class ChosenMovie extends React.Component {
	constructor(){
		super()
		this.state = {
            loading: true,
			movieData : {},
			page : 0
		}
	this.handleChange = this.handleChange.bind(this)
    }

	componentDidMount() {
		fetch("https://pythontojava3.herokuapp.com/Movies?movie=&order=imdb_score&page=0&orderType=DESC&genre=" + this.props.genre + "&language="
		+ this.props.language + "&actors=" + this.props.actor + "&movieType=" + this.props.type)
			.then(response => response.json())
			.then(data => {
				this.setState({
                    movieData : data.Search,
					loading: false,
					page: 0
				})
			})
	}
	handleChange(event){
		const {value} = event.target
		this.setState({
			page: this.state.page + 1
		})
	}

    render(){
		console.log(this.state)
		return(
            <div>
                    {
					this.state.loading ? <CircularProgress /> :
					this.state.page < Object.keys(this.state.movieData).length ?
                    <div>
						<div className = "moviecard">
							<div>
								<img src = {this.state.movieData[this.state.page].poster} height = "420" width = "300"/>
							</div>
							<div className = "moviecardinfo">
								<div>
									<div className = "movietitle">{this.state.movieData[this.state.page].name}</div>
									<ul>
										<li> <code>{this.state.movieData[this.state.page].release_year}</code></li>
										<li> <code> {parseFloat(this.state.movieData[this.state.page].imdb_score)}</code></li>
										<li> <code>{this.state.movieData[this.state.page].genre}</code></li>
									</ul>
									<Startest rating = {parseFloat(this.state.movieData[this.state.page].imdb_score)} />
									<div 
										className = "movieplot">{this.state.movieData[this.state.page].plot}
									</div>
								</div>
								<a href = {"https://www.imdb.com/title/" + this.state.movieData[this.state.page].imdb_id}>Mais informações</a>
							</div>
						</div>
						<button class="hoverable" onClick = {this.handleChange}>Próximo </button>
                    </div>:<h1>Não há nenhum filme ou série com essas especificações :(</h1>
                    }
            </div>
		)

	}
}



export default ChosenMovie;