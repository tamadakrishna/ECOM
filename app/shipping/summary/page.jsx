import React from 'react'
import Summary from '@/components/shipping/Summary'

function SummaryPage({searchParams}) {
  return (
    <>
    <Summary address={searchParams.address} mobile={searchParams.mobile} name={searchParams.name}/>
    </>
  )
}

export default SummaryPage