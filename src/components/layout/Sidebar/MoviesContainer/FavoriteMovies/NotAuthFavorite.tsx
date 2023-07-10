import { FC } from 'react'

const NotAuthFavorite: FC = () => {
	return (
		<div className="mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-wite text-opacity-80">
			For viewing favorites plz authorize!
		</div>
	)
}

export default NotAuthFavorite