import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = props => (
	<ContentLoader
		className='pizza-block'
		speed={2}
		width={280}
		height={466}
		viewBox='0 0 280 466'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<circle cx='130' cy='130' r='130' />
		<rect x='0' y='310' rx='10' ry='10' width='280' height='88' />
		<rect x='0' y='428' rx='10' ry='10' width='91' height='27' />
		<rect x='124' y='420' rx='23' ry='23' width='153' height='45' />
		<rect x='0' y='270' rx='10' ry='10' width='280' height='20' />
	</ContentLoader>
)

export default Skeleton
