import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({
  bgGradient = 'from-brand-purple-dark via-brand-purple-medium to-brand-purple-light',
  textColor = 'text-text-light',
  pageTitle = 'Engineering Services',
  changePage,
}) => {
  const navigate = useNavigate()
  const [showWhoWeAre, setShowWhoWeAre] = useState(false)
  const [showWhatWeDo, setShowWhatWeDo] = useState(false)

  const whoWeAreRef = useRef(null)
  const whatWeDoRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInWhoWeAre =
        whoWeAreRef.current && whoWeAreRef.current.contains(event.target)
      const clickedInWhatWeDo =
        whatWeDoRef.current && whatWeDoRef.current.contains(event.target)

      if (!clickedInWhoWeAre && !clickedInWhatWeDo) {
        setShowWhoWeAre(false)
        setShowWhatWeDo(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`w-full bg-gradient-to-b ${bgGradient} ${textColor} rounded-t-xl overflow-hidden`}
      style={{
        background:
          'linear-gradient(180deg, #110C4D 0%, #311DA1 50%, #8FABFF 100%)',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 py-6 header-hero-container"
        style={{ height: '239px' }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <img src="src/assets/icon.png" alt="Icon" />
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">
                SA Engineers
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => navigate('/investors')}
              className="hover:text-brand-cyan transition-colors"
            >
              Investors
            </button>
            <button
              onClick={() => navigate('/sustainability')}
              className="hover:text-brand-cyan transition-colors"
            >
              Sustainability
            </button>
            <button
              onClick={() => navigate('/news')}
              className="hover:text-brand-cyan transition-colors"
            >
              News & Notification
            </button>
            <button
              onClick={() => navigate('/join')}
              className="hover:text-brand-cyan transition-colors"
            >
              Join
            </button>
            <a href="#facebook" className="hover:opacity-80 transition-opacity">
              <img src="src\assets\fb.png" alt="Facebook" className="w-6 h-4" />
            </a>
            <a href="#linkedin" className="hover:opacity-80 transition-opacity">
              <img
                src="src\assets\linked.png"
                alt="LinkedIn"
                className="w-4 h-4"
              />
            </a>
            <a href="#youtube" className="hover:opacity-80 transition-opacity">
              <img
                src="src\assets\youtube.png"
                alt="YouTube"
                className="w-4 h-4"
              />
            </a>
            <button className="hover:opacity-80 transition-opacity">
              <img
                src="src\assets\search.png"
                alt="Search"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="flex justify-center border-t border-white/20 pt-4">
          <nav className="flex items-center gap-8">
            <div className="relative" ref={whoWeAreRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowWhoWeAre(!showWhoWeAre)
                  if (showWhatWeDo) setShowWhatWeDo(false)
                }}
                className="flex items-center gap-2 hover:text-brand-cyan transition-colors text-lg font-medium"
              >
                <span>Who We Are</span>
                <span className="text-sm">▼</span>
              </button>
              {showWhoWeAre && (
                <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg py-2 min-w-[150px] z-50">
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/about')
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/team')
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Our Team
                  </button>
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/values')
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Our Values
                  </button>
                </div>
              )}
            </div>

            <div className="relative" ref={whatWeDoRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowWhatWeDo(!showWhatWeDo)
                  if (showWhoWeAre) setShowWhoWeAre(false)
                }}
                className="flex items-center gap-2 hover:text-brand-cyan transition-colors text-lg font-medium"
              >
                <span>What We Do</span>
                <span className="text-sm">▼</span>
              </button>
              {showWhatWeDo && (
                <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded shadow-lg py-2 min-w-[180px] z-50">
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/engineering-services')
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Engineering Services
                  </button>
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/consulting')
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Consulting
                  </button>
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/projects')
                    }}
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  >
                    Projects
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setShowWhoWeAre(false)
                setShowWhatWeDo(false)
                navigate('/contact')
              }}
              className="hover:text-brand-cyan transition-colors text-lg font-medium"
            >
              Contact Us
            </button>
          </nav>
        </div>
        <h1 className="header-title">{pageTitle}</h1>
      </div>
    </header>
  )
}

export default Header
