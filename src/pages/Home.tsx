import React from 'react'
import { useSelector } from 'react-redux'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Pagination from '../components/Pagination/Pagination'
import { useAppDispatch } from '../redux/store'
import { selectFilters } from '../redux/filter/selectors'
import { setCategoryId, setCurrentPage } from '../redux/filter/slice'
import { fetchPizzas } from '../redux/pizza/asyncActions'
import { selectPizzaData } from '../redux/pizza/selectors'

const Home: React.FC = () => {
	const dispatch = useAppDispatch()
	const { categoryId, sort, currentPage, searchValue } =
		useSelector(selectFilters)
	const { items, status } = useSelector(selectPizzaData)

	const getPizzas = async () => {
		const sortBy = sort.sortProperty
		const category = categoryId > 0 ? `&category=${categoryId}` : ''
		const search = searchValue ? `&search=${searchValue}` : ''

		dispatch(fetchPizzas({ category, search, currentPage, sortBy }))

		window.scrollTo(0, 0)
	}

	React.useEffect(() => {
		getPizzas()
	}, [categoryId, sort.sortProperty, searchValue, currentPage])

	const pizzas = items
		.filter((obj: any) =>
			obj.title.toLowerCase().includes(searchValue.toLowerCase())
		)
		.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />)

	const skeleton = [...new Array(6)].map((_, i) => <Skeleton key={i} />)

	const onChangeCategory = React.useCallback((i: number) => {
		dispatch(setCategoryId(i))
	}, [])

	const onChangePage = (page: number) => dispatch(setCurrentPage(page))

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort value={sort} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{status === 'error' ? (
					<div>
						<h2>Произошла ошибка 😕</h2>
						<p>Не удалось загрузить пиццы. Повторите попытку позже.</p>
					</div>
				) : status === 'loading' ? (
					skeleton
				) : (
					pizzas
				)}
			</div>
			<Pagination currentPage={currentPage} onChangePage={onChangePage} />
		</div>
	)
}

export default Home
