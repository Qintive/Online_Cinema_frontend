import styles from './AuthPlaceholder.module.scss'
import { getMovieUrl } from 'config/url.config'
import Link from 'next/link'
import { FC } from 'react'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
			<a className={styles.btn}>Sign in</a>
		</Link>
	)
}

export default AuthButton
