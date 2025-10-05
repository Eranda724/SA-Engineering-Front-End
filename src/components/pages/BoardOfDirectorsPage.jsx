import React from 'react'
import { Layout } from '../common'

const BoardOfDirectorsPage = () => {
  return (
    <Layout pageTitle="Board of Directors">
      <div className="w-full h-screen">
        <img
          className="w-full h-full object-cover rounded-b-xl"
          src="/src/assets/Bord Directors.jpg"
          alt="Board of Directors"
        />
      </div>
    </Layout>
  )
}

export default BoardOfDirectorsPage
