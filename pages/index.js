import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import Layout from '../components/Layout'
import HabitList from '../components/HabitList'
import HabitForm from '../components/HabitForm'

const HELLO_QUERY = gql`
	query HelloQuery {
		sayHello
	}`

const Home = () => {
	const { data, loading, error } = useQuery(HELLO_QUERY)
	console.log("Date in index: " + data)

	if (loading) return <div />
	
	return (
	<Layout pageTitle="Home">
		<div className='hero'>
			<h1 className='title'>Level Up Your Life</h1>
			<div className="list">
				<HabitForm />
				<HabitList />
			</div>
		</div>

		<style jsx>{`
		.hero {
			width: 100%;
			color: #333;
		}
		.title {
			margin-top: 0;
			width: 100%;
			padding-top: 60px;
			line-height: 1.15;
			font-size: 48px;
		}
		.title,
		.description {
			text-align: center;
		}
		.row {
			max-width: 880px;
			margin: 80px auto 40px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
		}
		.card {
			padding: 18px 18px 24px;
			width: 220px;
			text-align: left;
			text-decoration: none;
			color: #434343;
			border: 1px solid #9b9b9b;
		}
		.card:hover {
			border-color: #067df7;
		}
		.card h3 {
			margin: 0;
			color: #067df7;
			font-size: 18px;
		}
		.card p {
			margin: 0;
			padding: 12px 0 0;
			font-size: 13px;
			color: #333;
		}
		.list {
			padding: 20px 40px;
			max-width: 600px;
			margin: 0 auto;
		}
		`}</style>
	</Layout>
)}

export default withApollo(Home)
