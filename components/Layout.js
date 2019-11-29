import React from 'react'
import Head from 'next/head'
import Nav from './Nav'

const Layout = ({ children, pageTitle }) => {
	return (
		<div>
			<Head>
				<title>{ pageTitle }</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Nav />
			<main>{ children }</main>
		</div>
	)
}

export default Layout