import MovieList from 'components/screens/admin/movies/MovieList'
import { NextPageAuth } from 'shared/types/auth.types'

const MovieListPage: NextPageAuth = () => {
	return <MovieList />
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage

/*import MovieList from 'components/layout/Sidebar/MoviesContainer/MovieList'
import { IMovieList } from 'components/layout/Sidebar/MoviesContainer/movie-list.interface'
import { NextPageAuth } from 'shared/types/auth.types'


const MovieListPage: NextPageAuth = () => {
	const list: IMovieList = {
	  link: '/movies',
	  movies: [],
	  title: 'Movies',
	}
  
	return <MovieList list={list} />
  }

MovieListPage.isOnlyAdmin = true

export default MovieListPage
*/
