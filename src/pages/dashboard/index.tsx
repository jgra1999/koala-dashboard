import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../types/database'
import { supabase } from '../../supabase/client'
/* components */
import Layout from '../../ui/layout'
import { ProductsTable } from '../../components/dashboard/tables/products-table'

export default function DashboardPage() {
	const [data, setData] = useState<Product[]>([])

	const fetchProducts = async () => {
		const { data, error } = await supabase.from('products').select('*')

		if (error) console.log(error)

		if (data) setData(data)
	}

	useEffect(() => {
		fetchProducts()
	}, [])

	return (
		<Layout>
			<h1 className='text-4xl md:text-5xl font-medium'>Tabla de Productos</h1>
			<div className='mt-20'>
				<Link
					to='productos/nuevo'
					className='text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 focus:outline-none'
				>
					Agregar Producto
				</Link>
				<div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-8'>
					<ProductsTable products={data} />
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
