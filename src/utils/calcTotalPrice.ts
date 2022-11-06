import { CartItem } from '../redux/cart/types'

export const calcTotalPrice = (items: CartItem[]) => {
	return items.reduce((acc, obj) => obj.price * obj.count + acc, 0)
}
