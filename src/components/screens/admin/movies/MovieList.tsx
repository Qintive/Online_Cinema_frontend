import { useMovies } from './useMovies'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import AdminHeader from 'components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from 'components/ui/admin-table/AdminTable/AdminTable'
import Heading from 'components/ui/heading/Heading'
import { FC } from 'react'
import { Meta } from 'utils/meta/Meta'

const MovieList: FC = () => {
	const {
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
		createAsync,
	} = useMovies()

	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['Title', 'Genres', 'Rating']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default MovieList
