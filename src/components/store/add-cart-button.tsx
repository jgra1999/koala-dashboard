import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '../../store'
import { CartItem } from '../../types/cart'
import toast, { Toaster } from 'react-hot-toast'

export default function AddCartButton({
	id,
	name,
	image_url,
	brand,
	price,
	qty
}: CartItem) {
	const { addToShoppingCart } = useCartStore()

	const handleAddToCart = () => {
		addToShoppingCart({
			id,
			name,
			image_url,
			brand,
			price,
			qty
		})

		toast.success('Producto Agregado')
	}
	return (
		<>
			<button
				onClick={handleAddToCart}
				className='inline-flex items-center justify-center gap-x-1.5 rounded-md border border-transparent bg-purple-500 px-4 py-2 font-medium text-white active:bg-purple-700 lg:hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
			>
				<ShoppingBagIcon className='stroke-current stroke-2 w-6 h-6' />
			</button>
			<Toaster position='top-left' />
		</>
	)
}
