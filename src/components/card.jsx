import React from 'react'
import './style.css'

const Card = props => (
	<div className='proj mx-auto' value={props.id}>
		<h5>{props.name}</h5>
		<a href={props.url} target="blank">
		<img id="tester" alt={props.image.replace(".png", "")} src={require("../images/" + props.image)} href={props.url} />
		</a>
		<p>{props.summary}</p>
	</div>
)

export default Card

// onClick={() => props.handleClick(props.id)}