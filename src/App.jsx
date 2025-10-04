import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import EngineeringServices from './components/engineeringServicesPage'
import PlaceholderPage from './components/PlaceholderPage'
import HomePage from './components/homePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<PlaceholderPage title="About Us" />} />
      <Route path="/team" element={<PlaceholderPage title="Our Team" />} />
      <Route path="/values" element={<PlaceholderPage title="Our Values" />} />
      <Route path="/engineering-services" element={<EngineeringServices />} />
      <Route path="/consulting" element={<PlaceholderPage title="Consulting" />} />
      <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
      <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
      <Route path="/sustainability" element={<PlaceholderPage title="Sustainability" />} />
      <Route path="/join" element={<PlaceholderPage title="Join" />} />
      <Route path="/news" element={<PlaceholderPage title="News & Notification" />} />
      <Route path="/investors" element={<PlaceholderPage title="Investors" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
