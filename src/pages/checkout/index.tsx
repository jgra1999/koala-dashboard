import {
	ArrowLeftIcon,
	BanknotesIcon,
	CurrencyEuroIcon,
	DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { BinanceIcon, ZelleIcon } from '../../components/icons'
import { useCartStore } from '../../store'
import ShoppingCartItem from '../../components/store/shopping-cart-item'
import { Link } from 'react-router-dom'

export default function CheckoutPage() {
	const [paymentMethod, setPaymentMethod] = useState('')
	// const methods = ['Efectivo', 'Zelle', 'Euros', 'Binance', 'Pago Móvil']
	const { cart } = useCartStore()
	const methods = [
		{
			name: 'Efectivo',
			icon: <BanknotesIcon className='w-6 h-6' />
		},
		{
			name: 'Zelle',
			icon: <ZelleIcon />
		},
		{
			name: 'Euros',
			icon: <CurrencyEuroIcon className='w-6 h-6' />
		},
		{
			name: 'Binance',
			icon: <BinanceIcon />
		},
		{
			name: 'Pago Móvil',
			icon: <DevicePhoneMobileIcon className='w-6 h-6' />
		}
	]

	const handlePaymentMethod = (e: React.MouseEvent<HTMLButtonElement>) => {
		// console.log(e.target.innerText)
		setPaymentMethod(e.target.innerText)
	}

	return (
		<main>
			<header>
				<nav className='flex justify-between items-center py-3 px-5 bg-white shadow sticky top-0'>
					<a href='/#/catalogo'>
						<ArrowLeftIcon className='w-6 h-6 stroke-2 active:stroke-primary lg:hover:stroke-primary' />
					</a>
					<img src='/logo-simple.png' alt='logo koala' className='w-32' />
				</nav>
			</header>
			{/* <div className='text-center py-20 border-b-2 border-primary'>
				<h1 className='text-6xl font-semibold'>Finalizar Compra</h1>
			</div> */}

			<div className='mt-10 mb-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-x-5'>
				<div>
					<h2 className='text-2xl md:text-3xl font-bold'>
						Información del contacto
					</h2>

					<form className='mt-10 space-y-5'>
						<div>
							<label htmlFor='name' className='font-medium text-zinc-500'>
								Nombre
							</label>
							<input
								type='text'
								name='name'
								id='name'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mt-2'
							/>
						</div>
						<div>
							<label htmlFor='last_name' className='font-medium text-zinc-500'>
								Apellido
							</label>
							<input
								type='text'
								name='last_name'
								id='last_name'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mt-2'
							/>
						</div>
						<div>
							<label htmlFor='city' className='font-medium text-zinc-500'>
								Ciudad
							</label>
							<input
								type='text'
								name='city'
								id='city'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mt-2'
							/>
						</div>
						<div>
							<label htmlFor='address' className='font-medium text-zinc-500'>
								Dirección
							</label>
							<textarea
								name='address'
								id='address'
								rows={3}
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 mt-2 resize-none'
							></textarea>
						</div>

						<div className='space-y-5'>
							<h2 className='text-2xl md:text-3xl font-bold mb-8'>Método de pago</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
								{methods.map((method, index) => (
									<button
										key={index}
										type='button'
										onClick={handlePaymentMethod}
										className={`bg-white border border-gray-300 ${
											paymentMethod.toLowerCase() === method.name.toLowerCase()
												? 'border-primary text-primary'
												: 'border-gray-300 text-zinc-600'
										} rounded-lg  text-xl font-medium flex items-center justify-center py-4 gap-x-2`}
									>
										{method.icon}
										{method.name}
									</button>
								))}
							</div>
						</div>
					</form>
				</div>

				<div>
					<h2 className='text-2xl md:text-3xl font-bold'>Lista de productos</h2>
					<div className='bg-white rounded-lg shadow-md py-5 pl-5 mt-8'>
						<ul
							role='list'
							className='-my-6 divide-y divide-gray-200 max-h-[550px] overflow-y-auto pr-5'
						>
							{cart.map((product) => (
								<ShoppingCartItem key={product.id} product={product} />
							))}
						</ul>
						<div className='border-t border-primary px-4 py-6 sm:px-6 mt-10'>
							<div className='flex justify-between text-base font-medium'>
								<p>Subtotal</p>
								<p>
									$
									{cart.reduce((acumulado, product) => acumulado + product.price, 0)}
								</p>
							</div>
							<div className='mt-6'>
								<Link
									to='/checkout'
									className='flex items-center justify-center rounded py-3 px-4 text-white font-semibold bg-primary active:bg-orange-600 lg:hover:bg-orange-600 w-full'
								>
									Realizar Pedido
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
