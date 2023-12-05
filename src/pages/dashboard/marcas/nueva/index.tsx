import React from 'react'
import ItemForm from '../../../../components/forms/item-form'
import Layout from '../../../../ui/layout'

export default function AddBrandPage() {
	return (
		<Layout>
			<h1 className='text-4xl md:text-5xl font-medium'>Agregar Nueva Marca</h1>
			<ItemForm table='brands' />
		</Layout>
	)
}
