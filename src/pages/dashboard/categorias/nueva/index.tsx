import ItemForm from '../../../../components/forms/item-form'
import Layout from '../../../../ui/layout'

export default function AddCategoriesPage() {
	return (
		<Layout>
			<ItemForm table='categories' name='categorias' />
		</Layout>
	)
}
