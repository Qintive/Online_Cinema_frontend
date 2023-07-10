import AuthProvider from './AuthProvider/AuthProvider'
import HeadProvider from './HeadProvider/HeadProvider'
import ReduxToast from './ReduxToast'
import Layout from 'components/layout/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { TypeComponentAuthFields } from 'shared/types/auth.types'
import { store } from 'store/store'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})



const MainProvider: React.FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
