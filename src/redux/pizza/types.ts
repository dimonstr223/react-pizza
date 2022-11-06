import { SortBy } from '../filter/types'

export type SearchPizzaParams = {
	category: string
	search: string
	currentPage: number
	sortBy: SortBy
}
//or
// type FetchPizzasArgs = Record<string, string>

export type Pizza = {
	id: string
	title: string
	price: number
	imageUrl: string
	types: number[]
	sizes: number[]
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export interface PizzaSliceState {
	items: Pizza[]
	status: Status
}
