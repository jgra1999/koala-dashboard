import React, { useEffect, useRef, useState } from 'react'
import { Button } from './button'
import { Item } from '../../types/database'
import { supabase } from '../../supabase/client.js'
import { useNavigate } from 'react-router-dom'

export default function ItemForm({ table }: { table: string }) {
	console.log('🚀 ~ file: item-form.tsx:9 ~ ItemForm ~ table:', table)
	const [item, setItem] = useState<Item>({
		name: '',
		link: ''
	})
	const form = useRef<HTMLFormElement>(null)
	const navigate = useNavigate()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setItem({ ...item, [name]: value })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			const { data, error } = await supabase.from('brands').insert([item])

			if (data) console.log(data)
			if (error) console.log(error)

			navigate('/dashboard/marcas')
		} catch (error) {
			console.log('🚀 ~ file: item-form.tsx:29 ~ handleSubmit ~ error:', error)

			return Response.json(
				{
					message: error
				},
				{
					status: 500
				}
			)
		}

		// if (!params.id) {
		// 	const res = await axios.post(`/api/${table}`, data)
		// } else {
		// 	const res = await axios.put(`/api/${table}/${params.id}`, data)
		// }

		// form.current?.reset()
		// if (table === 'brands') {
		// 	router.push('/dashboard/marcas')
		// } else {
		// 	router.push('/dashboard/categorias')
		// }
		// router.refresh()
	}

	useEffect(() => {
		// if (params.id) {
		// 	axios.get(`http://localhost:3000/api/${table}/${params.id}`).then((res) => {
		// 		setData(res.data)
		// 	})
		// }
		// fetchProducts()
	}, [])

	return (
		<form
			className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-5 px-5 md:px-10'
			ref={form}
			onSubmit={handleSubmit}
		>
			<div className='flex flex-col gap-y-2'>
				<label htmlFor='name' className='text-sm font-medium text-gray-900'>
					Nombre
				</label>
				<input
					type='text'
					name='name'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mt-2'
					onChange={handleChange}
					value={item.name}
				/>
			</div>
			<div className='flex flex-col gap-y-2'>
				<label htmlFor='name' className='text-sm font-medium text-gray-900'>
					link
				</label>
				<input
					type='text'
					name='link'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mt-2'
					onChange={handleChange}
					value={item.link}
				/>
			</div>
			<Button text='Guardar' />
		</form>
	)
}
