import { Carousel } from "../ui";
import { Layout } from "../common";

export default function HomePage() {
  
  return (
    <Layout pageTitle="">
      <div className="w-full flex flex-col">
        {/* First Section with Image Carousel */}
        <Carousel />

        {/* Second Section */}
        <div className="w-full h-[700px] flex justify-center">
          <div className="text-center py-15 px-4 max-w-4xl">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              TRY OUR TEAM OF EXPERTS IN <span className="text-blue-600">ENGINEERING</span>
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              We provide comprehensive engineering solutions with innovative approaches
              and cutting-edge technology to meet your project needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-xl">
              <div className="text-left">
                <ul className="space-y-2">
                  <li className="flex items-center">✔️ Every Project Is Guaranteed</li>
                  <li className="flex items-center">✔️ Only High Quality Materials</li>
                  <li className="flex items-center">✔️ Free Estimates For Any Project</li>
                </ul>
              </div>
              <div className="text-left">
                <ul className="space-y-2">
                  <li className="flex items-center">✔️ Professional Engineering Team</li>
                  <li className="flex items-center">✔️ Trusted 5 Star Rated Company</li>
                  <li className="flex items-center">✔️ Sustainable Solutions</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="text-left py-5">
                <img className="w-[400px] h-[500px] rounded-2xl" src="https://picsum.photos/800/1300?random=1"/>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="w-full py-16 bg-blue-100">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">Contact us today for a free consultation</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
