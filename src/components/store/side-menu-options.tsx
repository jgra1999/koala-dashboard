import React from 'react'

type Props = {
	link: string
	name: string
}

export default function SideMenuOptions({ link, name }: Props) {
	return (
		<a
			href={link}
			className='flex items-center p-2 font-medium active:text-primary lg:hover:text-primary'
			data-drawer-hide='drawer-navigation'
		>
			<span className='ml-3'>{name}</span>
		</a>
	)
}
