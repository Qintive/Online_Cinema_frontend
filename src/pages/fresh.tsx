import Catalog from 'components/ui/catalog-movies/Catalog'
import { GetStaticProps, NextPage } from 'next'
import { MovieService } from 'services/movie.service'
import { IMovie } from 'shared/types/movie.types'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Fresh movies"
			description="New movies and series in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movies } = await MovieService.getAll()

		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default FreshPage
