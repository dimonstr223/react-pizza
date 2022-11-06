import { createSlice } from '@reduxjs/toolkit'
import { fetchPizzas } from './asyncActions'
import { PizzaSliceState } from './types'
import { Status } from './types'

const initialState: PizzaSliceState = {
	items: [],
	status: Status.LOADING,
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPizzas.pending, state => {
				state.status = Status.LOADING
				state.items = []
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.status = Status.SUCCESS
				state.items = action.payload
			})
			.addCase(fetchPizzas.rejected, state => {
				state.status = Status.ERROR
				state.items = []
			})
	},
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
