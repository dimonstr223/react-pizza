import { Pizza, SearchPizzaParams } from './types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
	'pizza/fetchPizzasStatus',
	async params => {
		const { category, search, currentPage, sortBy } = params
		const { data } = await axios.get<Pizza[]>(
			`https://6343a65f2dadea1175aabe1b.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=desc${search}`
		)
		return data
	}
)
