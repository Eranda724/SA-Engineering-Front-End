import React from 'react'

const Footer = () => {
  return (
    <footer
      className="w-full mt-auto"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF 40%, #C8C8C8 60%, #2F2F2F 100%)',
        height: '282px',
      }}
    >
      <div className="max-w-9xl mx-auto px-15 py-8 h-full relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-full">
          {/* Left Column - Logo & Contact */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-red-600 leading-tight">
                SA
              </span>
              <span className="text-xl font-bold text-red-600 leading-tight">
                Engineering
              </span>
            </div>

            <div className="flex gap-4">
              <a
                href="#twitter"
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src="src\assets\twitter.png"
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#instagram"
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src="src\assets\insta.png"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#discord"
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src="src\assets\discord.png"
                  alt="Discord"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#facebook"
                className="hover:opacity-70 transition-opacity"
              >
                <img
                  src="src\assets\face.png"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
            </div>

            <div className="text-sm text-gray-800">
              <p className="font-medium">(+94) 713-286-345</p>
            </div>
          </div>

          {/* Middle-Left Column - Menu */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Menu</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>
                <a href="/" className="hover:text-red-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="hover:text-red-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/customers"
                  className="hover:text-red-600 transition-colors"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-red-600 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/setting"
                  className="hover:text-red-600 transition-colors"
                >
                  Setting
                </a>
              </li>
            </ul>
          </div>

          {/* Middle-Right Column - Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">Company</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>
                <a
                  href="/login"
                  className="hover:text-red-600 transition-colors"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="hover:text-red-600 transition-colors"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-red-600 transition-colors"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Column */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              Subscribe Our News Letter
            </h3>
            <p className="text-sm text-gray-800">
              Sure, please provide your email address to subscribe to our
              newsletter
            </p>

            <form
              className="mt-4 flex items-center"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Fixed-size text field to match design ~310x40 */}
              <input
                aria-label="Email address"
                type="email"
                placeholder="Enter your mail..."
                className="w-[510px] h-[40px] border border-black rounded-l-[2px] px-4 text-sm placeholder:text-sm focus:outline-none"
              />

              <button
                type="submit"
                className="h-[40px] ml-2 bg-[#2CD9E9] text-black font-semibold px-5 rounded-r-[2px] shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 align-center">
          <p
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontWeight: 800,
              fontSize: '9.17px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'rgba(0,0,0,0.8)',
            }}
          ></p>
        </div>
        {/* Bottom - Copyright (centered) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p
            style={{
              fontFamily: '"Abhaya Libre", serif',
              fontWeight: 800,
              fontSize: '15px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'rgba(0,0,0,0.8)',
            }}
          >
            @ 2023 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
