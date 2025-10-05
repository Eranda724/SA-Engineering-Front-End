import React from 'react'
import { Layout } from '../common'

const BoardOfDirectorsPage = () => {
  return (
    <Layout pageTitle="Board of Directors">
      <div className="w-full h-[570px]">
        <img
          className="w-full h-full object-cover rounded-b-xl"
          src="/src/assets/Bord Directors.jpg"
          alt="Board of Directors"
        />
      </div>

      {/* Directors Section */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Meet Our Board of Directors
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {/* Director 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
            <img
              src="/src/assets/Sample_director.png"
              alt="Director 1"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Mr. John Smith</h3>
            <p className="text-gray-500">Chairman</p>
            <p className="mt-3 text-gray-600 text-sm">
              With over 20 years of leadership experience, John guides the company’s strategic vision.
            </p>
          </div>

          {/* Director 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
            <img
              src="/src/assets/Sample_director.png"
              alt="Director 2"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Ms. Jane Doe</h3>
            <p className="text-gray-500">Managing Director</p>
            <p className="mt-3 text-gray-600 text-sm">
              Jane oversees day-to-day operations and ensures organizational excellence.
            </p>
          </div>

          {/* Director 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition">
            <img
              src="/src/assets/Sample_director.png"
              alt="Director 3"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Mr. Alex Johnson</h3>
            <p className="text-gray-500">Finance Director</p>
            <p className="mt-3 text-gray-600 text-sm">
              Alex manages the company’s financial planning and risk management.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BoardOfDirectorsPage
