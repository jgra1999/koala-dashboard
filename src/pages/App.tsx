import { Link } from 'react-router-dom'

export default function App() {
	return (
		<main className='w-screen lg:w-full'>
			<div className='container w-11/12 pt-40 pb-16'>
				<div className='flex flex-col justify-center items-center gap-y-5'>
					<img
						src='/logo-morado.png'
						alt='logo koala'
						loading='lazy'
						className='w-80 sm:w-96 lg:w-98'
					/>
					<span className='font-bold text-xl'>
						Asesoría • Atención • Experiencia
					</span>

					<div className='flex flex-col items-center gap-y-4 w-full'>
						<Link
							to='/catalogo'
							className='w-full sm:w-2/4 lg:w-1/3 max-w-[430px] sm:max-w-none'
						>
							<button className='py-2 w-full bg-primary active:bg-orange-400 lg:hover:bg-orange-400 text-white font-bold text-xl rounded'>
								Catálogo
							</button>
						</Link>

						<a
							href='https://walink.co/ec6148'
							target='_blank'
							className='w-full sm:w-2/4 lg:w-1/3 max-w-[430px] sm:max-w-none'
						>
							<button className='py-2 w-full bg-primary active:bg-orange-400 lg:hover:bg-orange-400 text-white font-bold text-xl rounded'>
								Whatsapp
							</button>
						</a>

						<a
							href='https://www.google.com/maps/dir/10.1951873,-68.0130979/koala+fitness+store/@10.2066618,-68.0250259,15z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e805de3f3f5f8cf:0x63c21d96aee4c1d2!2m2!1d-68.0141488!2d10.2196854'
							target='_blank'
							className='w-full sm:w-2/4 lg:w-1/3 max-w-[430px] sm:max-w-none'
						>
							<button className='py-2 w-full bg-primary active:bg-orange-400 lg:hover:bg-orange-400 text-white font-bold text-xl rounded'>
								Ubicación
							</button>
						</a>
					</div>
				</div>
			</div>
		</main>
	)
}
