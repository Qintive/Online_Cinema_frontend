import { useUsers } from './useUsers'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import AdminHeader from 'components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from 'components/ui/admin-table/AdminTable/AdminTable'
import Heading from 'components/ui/heading/Heading'
import { FC } from 'react'
import { Meta } from 'utils/meta/Meta'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				headerItems={['Email', 'Date register']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default UserList
