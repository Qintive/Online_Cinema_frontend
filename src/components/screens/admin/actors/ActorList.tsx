import { useActors } from './useActors'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import AdminHeader from 'components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from 'components/ui/admin-table/AdminTable/AdminTable'
import Heading from 'components/ui/heading/Heading'
import { FC } from 'react'
import {Meta} from 'utils/meta/Meta'

const ActorList: FC = () => {
	const {
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
		createAsync,
	} = useActors()

	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['Name', 'Count movies']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default ActorList
