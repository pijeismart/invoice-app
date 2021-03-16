import { useState, useEffect } from 'react'
import Head from 'next/head'

import HomeMain from '../components/home/HomeMain'
import Wrapper from '../components/home/Wrapper'
import Header from '../components/home/Header'
import NoInvoices from '../components/home/NoInvoices'
import InvoicesList from '../components/home/InvoicesList'

import CreateInvoiceForm from '../components/form/CreateInvoiceForm'

export default function Home({ invoices }) {
	const [filter, setFilter] = useState(null)
	const [filteredInvoices, setFilteredInvoices] = useState(null)
	
	useEffect(() => {
		setFilteredInvoices(invoices)

		if (invoices && filter) {
			setFilteredInvoices(invoices.filter((invoice) => {
				return invoice.status === filter
			}))
		}
	}, [invoices, filter])

	return (
		<>
			<Head>
				<title>Invoices {filteredInvoices && filteredInvoices.length !== 0 && `(${filteredInvoices.length})` || ''} | Frontend Mentor</title>
			</Head>
			<HomeMain>
				<CreateInvoiceForm/>
				<Wrapper>
					<Header invoices={filteredInvoices} filter={filter} setFilter={setFilter}/>
					{filteredInvoices && filteredInvoices.length === 0 ? <NoInvoices/> : <InvoicesList invoices={filteredInvoices}/>}
				</Wrapper>
			</HomeMain>
		</>
	)
}