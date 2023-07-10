import PopularMovies from './PopularMovies'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'

const DynamicFavoriteMovies = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{
		ssr: false,
	}
)

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavoriteMovies />
		</div>
	)
}

export default MoviesContainer
