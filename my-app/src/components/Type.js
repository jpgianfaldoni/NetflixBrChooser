import React from 'react'




class Type extends React.Component {
	constructor(){
		super()
		this.state = {
            option : ""
        }
    }


    render(){
		return(
            <div>
                <h1>Quer assistir um <code>filme </code> ou uma <code>série</code>?</h1>
                <button class="hoverable" value ="movie" onClick = {(e) => this.props.handleChange(e, "type")}>Filme</button>
                <button class="hoverable" value ="series" onClick = {(e) => this.props.handleChange(e, "type")}>Série</button>
            </div>
		)

	}
}



export default Type;