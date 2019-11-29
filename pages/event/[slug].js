import { useRouter } from 'next/router'

import Layout from '../../components/Layout'

const Slug = () => {
	const router = useRouter()
	const { slug } = router.query

	return (
		<Layout pageTitle={ slug }>
			<h1>{ slug }</h1>
		</Layout>
	)
}

export default Slug