import { IMovie } from 'shared/types/movie.types'

export interface IMovieList {
	link: string
	movies: IMovie[]
	title: string
}
