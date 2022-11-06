import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterSliceState, Sort } from './types'

const initialState: FilterSliceState = {
	categoryId: 0,
	searchValue: '',
	sort: {
		name: 'популярности',
		sortProperty: 'rating',
	},
	currentPage: 1,
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		},
		setSort(state, action: PayloadAction<Sort>) {
			state.sort = action.payload
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		},
	},
})

export const { setCategoryId, setSort, setCurrentPage, setSearchValue } =
	filterSlice.actions

export default filterSlice.reducer
