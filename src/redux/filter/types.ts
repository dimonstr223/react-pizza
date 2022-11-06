export type SortBy = 'rating' | 'title' | 'price'

export type Sort = {
	name: string
	sortProperty: SortBy
}

export interface FilterSliceState {
	categoryId: number
	searchValue: string
	sort: Sort
	currentPage: number
}
