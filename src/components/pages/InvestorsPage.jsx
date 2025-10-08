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

       {/* Logos Section */}
       <div className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Trusted Partners
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-6">
          {/* Investor 1 */}
          <div className="flex items-center justify-center">
            <img
              src='/src/assets/Partners_Logo/Vontron.png'
              alt="Investor 1"
              className="w-40 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>

          {/* Investor 2 */}
          <div className="flex items-center justify-center">
            <img
              src='/src/assets/Partners_Logo/CNP.png'
              alt="Investor 2"
              className="w-40 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>

          {/* Investor 3 */}
          <div className="flex items-center justify-center">
            <img
              src='/src/assets/Partners_Logo/siemens.jpg'
              alt="Investor 3"
              className="w-40 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>

          {/* Investor 4 */}
          <div className="flex items-center justify-center">
            <img
              src='/src/assets/sample_Logo.png'
              alt="Investor 4"
              className="w-40 h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InvestorsPage
