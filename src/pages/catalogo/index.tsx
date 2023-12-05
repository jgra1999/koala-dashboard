import { useEffect, useState } from 'react'
import { ItemCard } from '../../components/store/item-card'
import { Navbar } from '../../components/store/navbar'
import { ProductSection } from '../../components/store/product-section'
import { Item } from '../../types/database'
import { supabase } from '../../supabase/client'

const products = [
	{
		id: 1,
		image: './example/7.png',
		name: 'Nitro Tech 100% Whey Gold | 28 Serv',
		brand: 'muscletech',
		price: 45
	},
	{
		id: 2,
		image: './example/1.jpg',
		name: 'Creatina Platinum Muscletech | 80 Serv',
		brand: 'Muscletech',
		price: 40
	},
	{
		id: 3,
		image: './example/8.png',
		name: 'Colágeno Orgain | 45 Serv',
		brand: 'Orgain',
		price: 35
	}
]
const aminos = [
	{
		id: 1,
		image: './example/5.png',
		name: 'Nitro Tech 100% Whey Gold | 28 Serv',
		brand: 'muscletech',
		price: 45
	},
	{
		id: 2,
		image: './example/7.png',
		name: 'Creatina Platinum Muscletech | 80 Serv',
		brand: 'Muscletech',
		price: 40
	},
	{
		id: 3,
		image: './example/6.png',
		name: 'Colágeno Orgain | 45 Serv',
		brand: 'Orgain',
		price: 35
	},
	{
		id: 4,
		image: './example/6.png',
		name: 'Colágeno Orgain | 45 Serv',
		brand: 'Orgain',
		price: 35
	},
	{
		id: 5,
		image: './example/8.png',
		name: 'Colágeno Orgain | 45 Serv',
		brand: 'Orgain',
		price: 35
	},
	{
		id: 6,
		image: './example/4.png',
		name: 'Colágeno Orgain | 45 Serv',
		brand: 'Orgain',
		price: 35
	}
]
const creatinas = [
	{
		id: 1,
		image: './example/5.png',
		name: 'Nitro Tech 100% Whey Gold | 28 Serv',
		brand: 'muscletech',
		price: 45
	},
	{
		id: 2,
		image: './example/4.png',
		name: 'Creatina Platinum Muscletech | 80 Serv',
		brand: 'Muscletech',
		price: 40
	},
	{
		id: 3,
		image: './example/3.jpg',
		name: 'Colágeno Orgain | 45 Serv',
		brand: 'Orgain',
		price: 35
	}
]

/* async function fetchProducts() {
	const res = await axios.get('http://localhost:3000/api/products')
	console.log('🚀 ~ file: page.tsx:32 ~ fetchProducts ~ res:', res)
}
 */
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
				<Navbar />
			</header>
			<ProductSection title='Proteínas'>
				{products.map((product) => (
					<ItemCard key={product.id} product={product} />
				))}
			</ProductSection>
			<ProductSection title='Aminoácidos'>
				{aminos.map((product) => (
					<ItemCard key={product.id} product={product} />
				))}
			</ProductSection>
			<ProductSection title='Creatinas'>
				{creatinas.map((product) => (
					<ItemCard key={product.id} product={product} />
				))}
			</ProductSection>
		</main>
	)
}
