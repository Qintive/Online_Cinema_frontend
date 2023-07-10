import Catalog from 'components/ui/catalog-movies/Catalog'
import { GetStaticProps, NextPage } from 'next'
import { useQuery } from 'react-query'
import { MovieService } from 'services/movie.service'

const TrendingPage: NextPage = () => {
	const { data: popularMovies } = useQuery('Popular movies', () =>
		MovieService.getMostPopularMovies()
	)

	return (
		<Catalog
			movies={popularMovies || []}
			title="Trending movies"
			description="Trending movies in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies()

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

export default TrendingPage
