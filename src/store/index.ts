import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from '../types/cart'

interface State {
	cart: CartItem[]
}

interface Actions {
	addToShoppingCart: (item: CartItem) => void
	removeToShoppingCart: (item: CartItem) => void
}

export const useCartStore = create<State & Actions>()(
	persist(
		(set) => ({
			cart: [],
			addToShoppingCart: (item: CartItem) =>
				set((state) => ({
					cart: [...state.cart, item]
				})),
			removeToShoppingCart: (item: CartItem) =>
				set((state) => ({
					cart: state.cart.filter((i) => i !== item)
				}))
		}),
		{ name: 'shopping-cart' }
	)
)
