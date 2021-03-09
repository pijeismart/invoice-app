import Link from 'next/link'
import styled from 'styled-components'
import dayjs from 'dayjs'
import InvoiceStatus from './InvoiceStatus'
import { Heading2 } from './Headings'
import { TextA } from './Typography'

const StyledLink = styled.a`
    display: grid;
    grid-template-rows: max-content 1fr;

    width: 100%;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    background: ${props => props.theme.color.invoiceItem.bg};
    
    -webkit-font-smoothing: antialiased;
    transition: border .3s, background .3s;
    cursor: pointer;

    :hover {
        border-color: #7C5DFA;
    }

    .invoice-item-status {
        grid-column: 2 / 3;
        grid-row: 2 / 4;
        margin-left: auto;
    }

    @media only screen and (min-width: 768px) {
        grid-template-columns: 5rem 9rem 1fr min-content min-content min-content;
        grid-template-rows: min-content;
        align-items: center;

        .invoice-item-status {
            grid-column: 5 / 6;
            grid-row: 1 / 2;
            margin-left: 2.5rem;
            margin-right: 1.25rem;
        }
    }
`

const Id = styled(Heading2)`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-bottom: 1.5rem;
    font-size: .75rem;

    span {
        color: #7E88C3;
    }

    @media only screen and (min-width: 768px) {
        margin-bottom: initial;
    }
`

const PaymentDue = styled.div`
    ${TextA}

    @media only screen and (min-width: 768px) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
`

const ClientName = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    ${TextA}
    color: ${props => props.theme.color.text.bodyB};
    text-align: end;

    @media only screen and (min-width: 768px) {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
        margin-right: 2.5rem;
        text-align: initial;
    }
`

const Total = styled(Heading2)`
    font-size: 1rem;

    @media only screen and (min-width: 768px) {
        grid-column: 4 / 5;
        grid-row: 1 / 2;
    }
`

const Arrow = styled.img`
    display: none;

    @media only screen and (min-width: 768px) {
        display: initial;
        grid-column: 6 / 7;
        grid-row: 1 / 2;
    }
`

export default function InvoiceItem({ id, paymentDue, clientName, total, status }) {
    return (
        <Link href="/">
            <StyledLink>
                <Id><span>#</span>{id}</Id>
                <PaymentDue>Due {dayjs(paymentDue).format('DD MMM YYYY')}</PaymentDue>
                <ClientName>{clientName}</ClientName>
                <Total as="div">£{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Total>
                <InvoiceStatus className="invoice-item-status" status={status}/>
                <Arrow src="/images/icon-arrow-right.svg" alt=""/>
            </StyledLink>
        </Link>
    )
}