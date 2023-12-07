'use client'

import { Dialog, Transition } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'
import { DeliveryIcon, WhatsAppIcon } from '../icons'
import { Product } from '../../types/database'

type Props = {
	product: Product
}

export function ItemCard({ product }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const [image, setImage] = useState(product.image_url_1)

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className='group w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center'
			>
				<div>
					<img
						className='p-8 rounded-t-lg w-64 aspect-[350/550]'
						src={product.image_url_1}
						alt='product image'
					/>
				</div>
				<div className='px-5 pb-5 space-y-4 w-full'>
					<div className='text-start'>
						<h5 className='text-sm sm:text-base font-bold text-zinc-600 group-hover:text-primary'>
							{product.name}
						</h5>
						<span className='text-gray-400 font-medium capitalize text-xs'>
							{product.brand}
						</span>
					</div>
					<div className='flex items-center justify-between'>
						<span className='font-semibold text-gray-900 text-lg'>
							${product.price}
						</span>
					</div>
				</div>
			</button>

			{/* Modal */}

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={() => setIsOpen(false)}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black/25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='grid grid-cols-1 lg:grid-cols-2 w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all'>
									<div className='flex flex-col items-center'>
										<img
											className='w-4/5 aspect-[350/550]'
											src={image}
											alt='product image'
										/>
										<div className='flex items-center gap-x-3'>
											<button onClick={() => setImage(product.image_url_1)}>
												<img
													src={product.image_url_1}
													alt=''
													className='w-[100px]'
												/>
											</button>
											<button onClick={() => setImage(product.image_url_2)}>
												<img src={product.image_url_2} alt='' className='w-40' />
											</button>
										</div>
									</div>
									<div className='flex flex-col gap-y-4 items-start mt-4'>
										<div className='text-left'>
											<Dialog.Title
												as='h3'
												className='text-xl font-bold leading-6 text-gray-900'
											>
												{product.name}
											</Dialog.Title>
											<div className=''>
												<span className='text-sm text-gray-500 capitalize'>
													{product.brand}
												</span>
											</div>
										</div>

										<div>
											<span className='font-medium text-2xl'>${product.price}</span>
										</div>

										<Dialog.Description className='text-left text-sm'>
											Es un producto que ofrece monohidrato de creatina micronizada
											de alta pureza, de rápida y total absorción. 100% monohidrato
											de creatina micronizado con la garantía de Muscletech.
										</Dialog.Description>

										<div className='mt-4 flex items-center gap-x-5'>
											<button className='inline-flex items-center justify-center gap-x-1.5 rounded-md border border-transparent bg-green-500 px-4 py-2 font-medium text-white active:bg-green-700 lg:hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
												<WhatsAppIcon styles='w-6 h-6' />
												Escribir por WhatsApp
											</button>
											<button className='inline-flex items-center justify-center gap-x-1.5 rounded-md border border-transparent bg-purple-500 px-4 py-2 font-medium text-white active:bg-purple-700 lg:hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
												<ShoppingBagIcon className='stroke-current stroke-2 w-6 h-6' />
											</button>
										</div>

										<div className='mt-4 text-left'>
											<span className='text-sm font-medium text-zinc-400'>
												Busca tu oficina de envíos:
											</span>
											<div className='flex items-center gap-x-5 mt-4'>
												<a
													href='https://mrwve.com/'
													target='_blank'
													className='w-40 inline-flex items-center justify-center gap-x-1.5 rounded-md border border-transparent bg-red-500 px-4 py-2 font-medium text-white active:bg-red-700 lg:hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
												>
													<DeliveryIcon />
													MRW
												</a>
												<a
													href='https://zoom.red/consulta-de-oficinas-personas/'
													target='_blank'
													className='w-40 inline-flex items-center justify-center gap-x-1.5 rounded-md border border-transparent bg-sky-500 px-4 py-2 font-medium text-white active:bg-sky-700 lg:hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
												>
													<DeliveryIcon />
													Zoom
												</a>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
