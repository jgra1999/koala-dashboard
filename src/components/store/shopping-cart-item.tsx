import { useCartStore } from '../../store'
import { CartItem } from '../../types/cart'

export default function ShoppingCartItem({ product }: { product: CartItem }) {
	const { removeToShoppingCart } = useCartStore()
	return (
		<li className='flex py-6'>
			<div className='w-16 flex-shrink-0'>
				<img src={product.image_url} alt='imagen del producto' className='w-full' />
			</div>

			<div className='ml-4 flex flex-1 flex-col'>
				<div>
					<div className='flex justify-between text-base font-medium text-gray-900'>
						<h3>{product.name}</h3>
						<p className='ml-4'>${product.price}</p>
					</div>
					<p className='mt-1 text-sm text-gray-500'>{product.brand}</p>
				</div>
				<div className='flex flex-1 items-end justify-between text-sm'>
					<p className='text-gray-500'>Qty {product.qty}</p>

					<div className='flex'>
						<button
							onClick={() => removeToShoppingCart(product)}
							className='font-medium text-red-600 hover:text-red-500'
						>
							Eliminar
						</button>
					</div>
				</div>
			</div>
		</li>
	)
}
