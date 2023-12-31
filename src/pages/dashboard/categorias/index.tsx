import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../ui/layout'
import type { Item } from '../../../types/database'
import { ItemTable } from '../../../components/dashboard/tables/items-table'
import { supabase } from '../../../supabase/client'

export default function CategoriesPage() {
	const [data, setData] = useState<Item[]>([])
	const thead = ['Nombre', 'Link', 'Acciones']

	const fetchCategories = async () => {
		try {
			const { data: brands, error } = await supabase.from('categories').select('*')

			if (error) console.log(error)
			if (brands) setData(brands)
		} catch (error) {
			console.log('🚀 ~ file: index.tsx:19 ~ fetchBrands ~ error:', error)
			return Response.json(
				{
					message: error
				},
				{
					status: 500
				}
			)
		}
	}
	useEffect(() => {
		fetchCategories()
	}, [])

	return (
		<Layout>
			<h1 className='text-4xl md:text-5xl font-medium'>Tabla de Categorías</h1>
			<div className='mt-20'>
				<Link
					to='/dashboard/categorias/nueva'
					className='text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none'
				>
					Agregar Categoría
				</Link>
				<div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-8'>
					<ItemTable data={data} header={thead} tableName='categories' />
					{data.length === 0 && (
						<div className='text-center py-5'>
							<h5 className='text-xl font-semibold'>No hay productos registrados</h5>
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}
