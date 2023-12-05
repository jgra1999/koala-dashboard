export function ProductsTable() {
	return (
		<table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
			<thead className='text-xs text-white uppercase bg-primary'>
				<tr>
					<th scope='col' className='px-6 py-3'>
						Productos
					</th>
					<th scope='col' className='px-6 py-3'>
						imagen
					</th>
					<th scope='col' className='px-6 py-3'>
						stock
					</th>
					<th scope='col' className='px-6 py-3'>
						Categoría
					</th>
					<th scope='col' className='px-6 py-3'>
						Precio
					</th>
					<th scope='col' className='px-6 py-3'>
						<span className='sr-only'>Edit</span>
					</th>
				</tr>
			</thead>
			<tbody>
				{/* {products.map((product: Product) => (
								<TableProduct product={product} key={product.id} />
							))} */}
			</tbody>
		</table>
	)
}
