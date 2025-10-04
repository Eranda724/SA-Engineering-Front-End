import React from 'react'
import { Layout } from '../common'

const PlaceholderPage = ({ title, children }) => {
  return (
    <Layout pageTitle={title}>
      <div className="flex items-center justify-center py-24">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-gray-600">This page is under construction.</p>
          {children}
        </div>
      </div>
    </Layout>
  )
}

export default PlaceholderPage


