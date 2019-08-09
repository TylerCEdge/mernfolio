import React from 'react'
import './style.css'

const Card = props => (
	<div className='proj mx-auto' value={props.id} onClick={() => props.handleClick(props.id)}>
		<img alt={props.image.replace(".png", "")} src={require("../images/" + props.image)} />
	</div>
)

export default Card