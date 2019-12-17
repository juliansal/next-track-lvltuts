// import ApolloClient from 'apollo-boost'
import ApolloClient from 'apollo-client'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import fetch from 'isomorphic-unfetch'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink, HttpLink } from "apollo-link-http"

export function withApollo(PageComponent) {
	const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
		const client = apolloClient || initApolloClient(apolloState)

		return (
			<ApolloProvider client={ client }>
				<PageComponent {...pageProps} />
			</ApolloProvider>
		)
	}

	WithApollo.getInitialProps = async (context) => {
		const { AppTree } = context
		const apolloClient = (context.apolloClient = initApolloClient())

		let pageProps = {}
		if (PageComponent.getInitialProps) {
			pageProps = await PageComponent.getInitialProps(context)
		}

		if (typeof window === "undefined") {
			if (context.res && context.res.finished) {
				return pageProps
			}

			try {
				const { getDataFromTree } = await import('@apollo/react-ssr')
				await getDataFromTree(<AppTree pageProps={{...pageProps, apolloClient}} />)
			} catch (e) {
				console.error(e)
			}

			Head.rewind()
		}

		const apolloState = apolloClient.cache.extract()

		return {
			...pageProps,
			apolloState
		}
	}

	return WithApollo
}

// const isDev = process.env.NODE_ENV !== "production"
// const url = isDev ? 'http://localhost:3000' : 'https://gifted-turing-7ea2ee.netlify.com'

const initApolloClient = (initialState = {}) => {
	const cache = new InMemoryCache().restore(initialState)
	const link = new HttpLink({
		uri: "https://gifted-turing-7ea2ee.netlify.com/api/graphql",
		credentials: 'same-origin',
		fetch
	})
	const ssrMode = typeof window === 'undefined' ? true : false;

	console.log("^&^&^&^&^&^&^&^&^&^&^&^&^ Value of ssrMode is " + ssrMode)
	const client = new ApolloClient({
		ssrMode,
		link,
		cache
	})

	return client
}
