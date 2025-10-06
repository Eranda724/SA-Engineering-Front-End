import React from 'react'
import { Layout } from '../common'

const InvestorsPage = () => {
  return (
    <Layout pageTitle="Investors">
      <div className="w-full flex items-center justify-center">
        <div className="w-full text-center">
          <img className='w-full h-[570px] rounded-b-xl object-cover' src='/src/assets/Investors main.jpg'/>
        </div>
      </div>
    </Layout>
  )
}

export default InvestorsPage
