import logoImage from '../../../assets/images/cinema.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
	return (
		<Link href="/" legacyBehavior>
			<a className="px-layout mb-10 block">
				<Image
					src={logoImage}
					width={50}
					height={34}
					alt="Online Cinema"
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default Logo
