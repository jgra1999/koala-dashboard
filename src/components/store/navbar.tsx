import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import SideMenu from './side-menu'
import { Link } from 'react-router-dom'

export function Navbar() {
	return (
		<nav className='flex justify-between py-3 px-5 bg-white shadow sticky top-0'>
			<div className='flex items-center gap-x-2'>
				<SideMenu />
				<img src='/logo-simple.png' alt='logo koala' className='w-32' />
			</div>
			<div className='flex items-center divide-x-2 divide-secondary text-xl font-bold'>
				<Link to='/' className='flex items-start pr-2 gap-x-1'>
					<span>2</span>
					<ShoppingBagIcon className='w-6 h-6' />
				</Link>
				<div className='pl-2'>
					<span>$20</span> USD
				</div>
			</div>
		</nav>
	)
}
