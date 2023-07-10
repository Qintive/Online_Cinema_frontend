import { useQuery } from 'react-query'
import { userService } from 'services/user.service'

export const useFavorites = () => {
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('Favorite movies', () => userService.getFavorites(), {
		select: ({ data }) => data,
	})

	return { isLoading, favoritesMovies, refetch }
}
