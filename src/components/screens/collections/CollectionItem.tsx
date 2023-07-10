import styles from './Collections.module.scss'
import CollectionImage from './CollectionsImage'
import { ICollection } from './collection.interface'
import { getGenreUrl } from 'config/url.config'
import Link from 'next/link'
import { FC } from 'react'

const CollectionItem: FC<{ collection: ICollection }> = ({ collection }) => {
	return (
		<Link href={getGenreUrl(collection.slug)} legacyBehavior>
			<a className={styles.collection}>
				<CollectionImage collection={collection} />

				<div className={styles.content}>
					<div className={styles.title}>{collection.title}</div>
				</div>

				<div className={`${styles.behind} ${styles.second}`}>
					<CollectionImage collection={collection} />
				</div>

				<div className={`${styles.behind} ${styles.third}`}>
					<CollectionImage collection={collection} />
				</div>
			</a>
		</Link>
	)
}

export default CollectionItem
