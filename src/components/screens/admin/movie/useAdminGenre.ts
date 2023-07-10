import { useQuery } from 'react-query'


import { toastError } from 'utils/toast-Error'
import { GenreService } from 'services/genre.service'
import { IOption } from 'components/ui/select/select.interface'


export const useAdminGenres = () => {
	const queryData = useQuery('list of genre', () => GenreService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre): IOption => ({
					label: genre.name,
					value: genre._id,
				})
			),
		onError(error) {
			toastError(error, 'genre list')
		},
	})

	return queryData
}
