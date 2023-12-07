import { useEffect, useState } from 'react'
import { BannersTable } from '../../../components/dashboard/tables/banners-table'
import { supabase } from '../../../supabase/client'
import Layout from '../../../ui/layout'
import { Banner } from '../../../types/database'

export default function BannersPage() {
	const [data, setData] = useState<Banner[]>([])

	const fetchBanners = async () => {
		const { data: banners, error } = await supabase.from('banners').select('*')

		if (error) console.log(error)
		if (banners) setData(banners)
	}

	useEffect(() => {
		fetchBanners()
	}, [])

	return (
		<Layout>
			<h1 className='text-4xl md:text-5xl font-medium'>Tabla de Banners</h1>
			<div className='mt-20'>
				<div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-8'>
					<BannersTable data={data} />
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
