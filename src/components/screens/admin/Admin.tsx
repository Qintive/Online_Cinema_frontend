import Statistics from './Statistics/Statistics'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation'
import Heading from 'components/ui/heading/Heading'
import { FC } from 'react'
import { Meta } from 'utils/meta/Meta'

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistics" />

			<Statistics />
		</Meta>
	)
}

export default Admin
