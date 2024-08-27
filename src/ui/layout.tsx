import React, { useEffect } from 'react'
import SideNav from '../components/dashboard/sidenav'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'

export default function Layout({ children }: { children: React.ReactNode }) {
	const navigate = useNavigate()

	useEffect(() => {
		supabase.auth.onAuthStateChange((_event, session) => {
			if (!session) {
				navigate('/')
			}
		})

		// const redirect = async () => {
		// 	const {
		// 		data: { user }
		// 	} = await supabase.auth.getUser()

		// 	if (user) {
		// 		navigate('/dashboard')
		// 	}
		// }

		// redirect()
	}, [navigate])

	return (
		<div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
			<div className='w-full flex-none md:w-64'>
				<SideNav />
			</div>
			<div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
		</div>
	)
}
