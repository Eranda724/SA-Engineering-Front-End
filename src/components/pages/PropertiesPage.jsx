import React from 'react'
import { Layout } from '../common'

const PropertiesPage = () => {
  return (
    <Layout pageTitle="Properties">
      {/* Banner Section */}
      <div className="flex items-center justify-center h-64 bg-gradient-to-r from-green-700 to-emerald-500 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">Properties</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Available Properties
        </h2>

        {/* Property Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Property Card 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
                alt="Luxury Villa"
                className="rounded-xl w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Luxury Villa, Colombo
            </h3>
            <p className="text-sm text-gray-500 mb-2">Location: Colombo 07</p>
            <p className="text-gray-600 text-justify mb-3">
              A modern 3-bedroom luxury villa with pool, garden, and smart home
              features. Perfect for high-end living.
            </p>
            <p className="text-green-700 font-bold">LKR 120 Million</p>
          </div>

          {/* Property Card 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60"
                alt="Beachside Apartment"
                className="rounded-xl w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Beachside Apartment, Galle
            </h3>
            <p className="text-sm text-gray-500 mb-2">Location: Galle Fort</p>
            <p className="text-gray-600 text-justify mb-3">
              Enjoy stunning ocean views from this fully furnished apartment,
              located minutes from Galle Fort.
            </p>
            <p className="text-green-700 font-bold">LKR 85 Million</p>
          </div>

          {/* Property Card 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
            <div className="mb-4">
              <img
                src="https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=60"
                alt="Modern Office Building"
                className="rounded-xl w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              Modern Office Space, Kandy
            </h3>
            <p className="text-sm text-gray-500 mb-2">Location: Kandy City</p>
            <p className="text-gray-600 text-justify mb-3">
              A newly built commercial property with modern facilities and
              parking space in the heart of Kandy.
            </p>
            <p className="text-green-700 font-bold">LKR 60 Million</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PropertiesPage
