import { createBrowserRouter } from 'react-router-dom'
import App from '../pages/App'
import MantenimientoPage from '../pages/mantenimiento'
import DashboardPage from '../pages/dashboard'
import ProductOverview from '../pages/dashboard/producto'
import BrandsPage from '../pages/dashboard/marcas'
import AddBrandPage from '../pages/dashboard/marcas/nueva'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/mantenimiento',
		element: <MantenimientoPage />
	},
	{
		path: '/dashboard',
		element: <DashboardPage />
	},
	{
		path: '/dashboard/producto/:id',
		element: <ProductOverview />
	},
	{
		path: '/dashboard/marcas',
		element: <BrandsPage />
	},
	{
		path: '/dashboard/marcas/nueva',
		element: <AddBrandPage />
	}
	/*{
		path: '/tercera-pregunta',
		element: <ThirdQ />
	},
	{
		path: '/cuarta-pregunta',
		element: <FourthQ />
	},
	{
		path: '/quinta-pregunta',
		element: <FifthQ />
	},

	{
		path: '/fin-del-proceso',
		element: <Confirmation />
	},
	{
		path: '/contacto',
		element: <Contact />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/cuestionario-resultados',
		element: <SurveyResults />
	} */
])
