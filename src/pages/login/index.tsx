import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase/client'

export default function LoginPage() {
	const [sending, setSending] = useState(false)
	const [error, setError] = useState(false)

	const navigate = useNavigate()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleSubmit = async (e: any) => {
		e.preventDefault()

		const email = e.target.elements[0].value
		const password = e.target.elements[1].value

		try {
			setSending(true)
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password
			})
			if (error) setError(true)

			navigate('/dashboard')
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error)
		} finally {
			setSending(false)
		}
	}

	useEffect(() => {
		supabase.auth.onAuthStateChange((_event, session) => {
			if (!session) {
				navigate('/')
			} else {
				navigate('/dashboard')
			}
		})

		const redirect = async () => {
			const {
				data: { user }
			} = await supabase.auth.getUser()

			if (user) {
				navigate('/dashboard')
			}
		}

		redirect()
	}, [navigate])

	return (
		<div className='container w-11/12 mx-auto flex flex-col items-center justify-center gap-y-10 mt-40'>
			<Link to='/'>
				<img src='/icono.png' alt='E-Konexium logo' className='w-40' />
			</Link>
			<form onSubmit={handleSubmit} className='w-96 space-y-4'>
				<input
					type='email'
					name='email'
					placeholder='ejemplo@email.com'
					className='border-2 border-secondary rounded-lg py-3 px-4 outline-none focus:outline-none w-full'
					required
				/>

				<input
					type='password'
					name='password'
					placeholder='ingresa tu contraseña'
					className='border-2 border-secondary rounded-lg py-3 px-4 outline-none focus:outline-none w-full'
					required
				/>

				<button className='bg-secondary text-white font-semibold py-3 rounded shadow mt-5 w-full'>
					{sending ? 'Enviando...' : 'Enviar'}
				</button>

				{error && (
					<div className='text-red-500 text-center font-semibold'>
						Correo electrónico o contraseña incorrectos
					</div>
				)}
			</form>
		</div>
	)
}
