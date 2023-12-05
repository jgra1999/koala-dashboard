import { supabase } from '../supabase/client'

export const deleteData = async (tableName: string, id: number | undefined) => {
	try {
		const { error } = await supabase.from(tableName).delete().eq('id', id)

		if (error !== null) console.log(error)

		window.location.reload()
	} catch (error) {
		console.log('🚀 ~ file: db.ts:17 ~ deleteData ~ error:', error)
	}
}
