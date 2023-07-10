import { useFavorites } from '../../favorites/useFavorites'
import styles from './FavoriteButton.module.scss'
import HeartImage from './heart-animation.png'
import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { userService } from 'services/user.service'
import { toastError } from 'utils/toast-Error'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState(false)

	const { favoritesMovies, refetch } = useFavorites()

	useEffect(() => {
		if (favoritesMovies) {
			const isHasMovie = favoritesMovies.some((f) => f._id === movieId)
			if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
		}
	}, [favoritesMovies, isSmashed, movieId])

	const { mutateAsync } = useMutation(
		'update actor',
		() => userService.toggleFavorite(movieId),
		{
			onError(error) {
				toastError(error, 'Update favorite list')
			},
			onSuccess() {
				setIsSmashed(!isSmashed)
				refetch()
			},
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.animate]: isSmashed,
			})}
			style={{ backgroundImage: `url(/heart-animation.png)` }}
		/>
	)
}

export default FavoriteButton
