import { createHashRouter } from 'react-router-dom'

import App from '../pages/App'
import MantenimientoPage from '../pages/mantenimiento'
import DashboardPage from '../pages/dashboard'
import ProductOverview from '../pages/dashboard/productos'
import BrandsPage from '../pages/dashboard/marcas'
import AddBrandPage from '../pages/dashboard/marcas/nueva'
import EditBrandPage from '../pages/dashboard/marcas/editar'
import CategoriesPage from '../pages/dashboard/categorias'
import AddCategoriesPage from '../pages/dashboard/categorias/nueva'
import AddProductPage from '../pages/dashboard/productos/nuevo'
import CatalogoPage from '../pages/catalogo'

export const router = createHashRouter([
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
		path: '/dashboard/productos/nuevo',
		element: <AddProductPage />
	},
	{
		path: '/dashboard/productos/editar/:id',
		element: <AddProductPage />
	},
	{
		path: '/dashboard/productos/:id',
		element: <ProductOverview />
	},
	{
		path: '/dashboard/marcas',
		element: <BrandsPage />
	},
	{
		path: '/dashboard/marcas/nueva',
		element: <AddBrandPage />
	},
	{
		path: '/dashboard/marcas/editar/:id',
		element: <EditBrandPage />
	},
	{
		path: '/dashboard/categorias',
		element: <CategoriesPage />
	},
	{
		path: '/dashboard/categorias/nueva',
		element: <AddCategoriesPage />
	},
	{
		path: '/dashboard/categorias/editar/:id',
		element: <AddCategoriesPage />
	},
	{
		path: '/catalogo',
		element: <CatalogoPage />
	}
])
