import { useEffect, useState } from 'react'
import { Navbar } from '../../components/store/navbar'
import { ProductSection } from '../../components/store/product-section'
import { Item } from '../../types/database'
import { supabase } from '../../supabase/client'

export default function CatalogoPage() {
	const [categories, setCategories] = useState<Item[]>([])
	const fetchCategories = async () => {
		const { data: categories, error } = await supabase.from('categories').select('*')

		if (error) console.log(error)
		if (categories) setCategories(categories)
	}

	useEffect(() => {
		fetchCategories()
	}, [])
	return (
		<main>
			<header>
				<img src='/banner.png' alt='' loading='lazy' className='aspect-[1519/728]' />
			</header>
			<Navbar />
			{categories.map((category) => (
				<ProductSection
					key={category.id}
					title={category.name}
					link={category.link}
				/>
			))}
		</main>
	)
}
