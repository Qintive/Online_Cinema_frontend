import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'
import styles from './Navigation.module.scss'
import React, { FC } from 'react'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
