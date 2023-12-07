import { SideMenu } from './side-menu'
import { ShoppingCart } from './shopping-cart'

export function Navbar() {
	return (
		<nav className='flex justify-between py-3 px-5 bg-white shadow sticky top-0'>
			<div className='flex items-center gap-x-2'>
				<SideMenu />
				<img src='/logo-simple.png' alt='logo koala' className='w-32' />
			</div>
			<div className='flex items-center divide-x-2 divide-secondary text-xl font-bold'>
				<ShoppingCart />
				<div className='pl-2'>
					<span>$20</span> USD
				</div>
			</div>
		</nav>
	)
}
