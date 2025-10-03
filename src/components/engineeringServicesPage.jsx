import React from 'react'
import Layout from './Layout'

const EngineeringServices = ({ changePage }) => {
  return (
    <Layout pageTitle="Engineering Services" changePage={changePage}>
      <div className="flex items-center justify-center py-32">
        <div className="text-center px-4">
          <h1 className="text-7xl font-bold text-gray-800 mb-4">
            Engineering Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional engineering solutions for your business needs
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default EngineeringServices
