import styles from '../Admin.module.scss'
import CountUsers from './CountUsers'
import PopularMovie from './PopularMovie'
import { FC } from 'react'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovie />
		</div>
	)
}

export default Statistics
