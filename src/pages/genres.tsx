import Collections from 'components/screens/collections/Collectoins'
import { ICollection } from 'components/screens/collections/collection.interface'
import { GetStaticProps, NextPage } from 'next'
import { GenreService } from 'services/genre.service'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return <Collections collections={collections || []} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		return {
			props: { collections },
            revalidate: 60,

		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default GenresPage
