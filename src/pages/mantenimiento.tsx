import React from 'react'
import { Link } from 'react-router-dom'

export default function MantenimientoPage() {
	return (
		<main className='h-screen flex justify-center items-center'>
			<div className='flex flex-col items-center gap-y-5 '>
				<img src='/icono.png' alt='Koala Icono' className='w-40' />
				<div className='flex flex-col text-center justify-center gap-y-10 px-3'>
					<h1 className='text-4xl lg:text-5xl font-semibold max-w-[1000px]'>
						Estamos preparando algo especial para ti en nuestro catálogo.
					</h1>

					<div className='flex gap-x-10 justify-center'>
						<Link
							to='/'
							className='flex items-center hover:text-primary font-medium'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-5 h-5'
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M5 12l14 0'></path>
								<path d='M5 12l4 4'></path>
								<path d='M5 12l4 -4'></path>
							</svg>
							Regresar al inicio
						</Link>

						<a
							href='https://walink.co/ec6148'
							target='_blank'
							className='text-white font-medium flex justify-center gap-x-1 py-2 px-4 bg-primary active:bg-purple-500 lg:hover:bg-purple-500 rounded'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
								<path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
							</svg>
							<span>Whatsapp</span>
						</a>
					</div>
				</div>
			</div>
		</main>
	)
}
