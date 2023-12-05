import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductOverview() {
	const { id } = useParams()
	return (
		<div>
			<span>Producto id = {id}</span>
		</div>
	)
}
