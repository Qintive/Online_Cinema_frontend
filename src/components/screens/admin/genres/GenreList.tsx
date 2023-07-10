import { useGenres } from './useGenres'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import AdminHeader from 'components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from 'components/ui/admin-table/AdminTable/AdminTable'
import Heading from 'components/ui/heading/Heading'
import { FC } from 'react'
import {Meta} from 'utils/meta/Meta'

const GenreList: FC = () => {
	const {
		data,
		isLoading,
		deleteAsync,
		createAsync,
		searchTerm,
		handleSearch,
	} = useGenres()

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />
			<AdminHeader
				searchTerm={searchTerm}
				handleSearch={handleSearch}
				onClick={createAsync}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['Name', 'Slug']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default GenreList
