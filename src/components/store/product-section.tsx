import React from 'react'

type Props = {
	title: string
	children: React.ReactNode
}

export function ProductSection({ title, children }: Props) {
	return (
		<section className='lg:container border-b-2 border-secondary px-5 md:px-10 pb-14 mt-14'>
			<h2 className='font-bold text-4xl mb-10'>{title}</h2>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{children}
			</div>
		</section>
	)
}
