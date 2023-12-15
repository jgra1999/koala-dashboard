import { SideMenu } from './side-menu'
import { ShoppingCart } from './shopping-cart'

export function Navbar() {
	return (
		<nav className='flex justify-between items-center py-3 px-5 bg-white shadow sticky top-0 z-20'>
			<div className='flex items-center gap-x-2'>
				<SideMenu />
				<img src='/logo-simple.png' alt='logo koala' className='w-32' />
			</div>
			<div className='text-xl font-bold'>
				<ShoppingCart />
			</div>
		</nav>
	)
}
