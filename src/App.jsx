import './App.css'
import { useState } from 'react'
import EngineeringServices from './components/engineeringServicesPage'
import PlaceholderPage from './components/PlaceholderPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const changePage = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PlaceholderPage title="Home" changePage={changePage} />
      case 'about':
        return <PlaceholderPage title="About Us" changePage={changePage} />
      case 'team':
        return <PlaceholderPage title="Our Team" changePage={changePage} />
      case 'values':
        return <PlaceholderPage title="Our Values" changePage={changePage} />
      case 'engineering-services':
        return <EngineeringServices changePage={changePage} />
      case 'consulting':
        return <PlaceholderPage title="Consulting" changePage={changePage} />
      case 'projects':
        return <PlaceholderPage title="Projects" changePage={changePage} />
      case 'contact':
        return <PlaceholderPage title="Contact Us" changePage={changePage} />
      case 'sustainability':
        return <PlaceholderPage title="Sustainability" changePage={changePage} />
      case 'join':
        return <PlaceholderPage title="Join" changePage={changePage} />
      case 'news':
        return <PlaceholderPage title="News & Notification" changePage={changePage} />
      case 'investors':
        return <PlaceholderPage title="Investors" changePage={changePage} />
      default:
        return <PlaceholderPage title="Home" changePage={changePage} />
    }
  }

  return renderPage()
}

export default App
