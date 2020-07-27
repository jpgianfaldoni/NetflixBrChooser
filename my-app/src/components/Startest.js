import React from 'react'


class Startest extends React.Component {
	constructor(){
		super()
		this.state = {
		}
	}
	



    render(){
		var stars = 0
		if(this.props.rating <= 2){
			stars = <code>&#x2605;</code>
		}else if(this.props.rating <= 4){
			stars = <code>&#x2605; &#x2605;</code>
		}else if(this.props.rating <= 6){
			stars = <code>&#x2605; &#x2605; &#x2605;</code>
		}else if(this.props.rating <= 8){
			stars = <code>&#x2605; &#x2605; &#x2605; &#x2605;</code>
		}else{
			stars = <code>&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;</code>
		}

			

		return(
            <div>
                <h1>{stars}</h1>
            </div>
		)

	}
}


export default Startest;