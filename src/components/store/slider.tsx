import { useEffect, useState } from 'react'
import { supabase } from '../../supabase/client'
import { Banner } from '../../types/database'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function Slider() {
	const [banners, setBanners] = useState<Banner[]>([])

	const fetchBanners = async () => {
		const { data: banners, error } = await supabase.from('banners').select('*')

		if (error) console.log(error)
		if (banners) {
			setBanners(banners)
		}
	}

	useEffect(() => {
		fetchBanners()
	}, [])

	return (
		<Swiper
			slidesPerView={1}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false
			}}
			pagination={{
				clickable: true
			}}
			navigation={false}
			modules={[Autoplay, Pagination, Navigation]}
		>
			{banners.map((banner) => (
				<SwiperSlide key={banner.id}>
					<img src={banner.banner_url} alt='' className='w-full' />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
