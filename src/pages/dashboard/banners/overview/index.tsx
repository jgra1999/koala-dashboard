import { useEffect, useState } from 'react'
import { Banner } from '../../../../types/database'
import { supabase } from '../../../../supabase/client'
import { useParams } from 'react-router-dom'
import Layout from '../../../../ui/layout'

export default function BannerViewPage() {
	const [banner, setBanner] = useState<Banner>({
		name: '',
		banner_url: ''
	})

	const { id } = useParams()

	const getBanner = async () => {
		const { data, error } = await supabase.from('banners').select('*').eq('id', id)

		if (error) console.log(error)
		if (data) setBanner(data[0])
	}

	useEffect(() => {
		getBanner()
	}, [])

	return (
		<Layout>
			<main className='my-5'>
				<div className='bg-white p-8 shadow-lg rounded-lg'>
					<div className='px-4 sm:px-0'>
						<h3 className='text-2xl font-semibold leading-7 text-gray-900'>
							{banner.name}
						</h3>
						<p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>
							{banner.banner_url}
						</p>
					</div>
					<div className='mt-6 border-t border-gray-100'>
						<img src={banner.banner_url} alt='' className='w-full' />
					</div>
				</div>
			</main>
		</Layout>
	)
}
