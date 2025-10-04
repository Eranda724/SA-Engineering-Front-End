import Layout from "./Layout";
import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function HomePage() {
  return (
    <Layout pageTitle="Home">
      <div className="w-full h-screen flex flex-col">
        {/* First Section with Image Carousel */}
        <div className="w-full h-[50%] bg-gray-200"></div>
        {/* Second Section */}
        <div className="w-full h-[50%] bg-amber-100 flex justify-center items-center">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              TRY OUR TEAM OF EXPERTS IN <span className="text-blue-600">LIVERPOOL</span>
            </h1>
            <p className="text-lg mb-6">
              Aliquam rhoncus ut urna ac vulputate. Aenean sit amet mauris tellus. Suspendisse a condimentum est.
              Nulla fringilla interdum velit quis vulputate.
            </p>
            <div className="flex justify-center space-x-6">
              <ul>
                <li>✔️ Every Job Is Guaranteed</li>
                <li>✔️ Only High Quality Materials</li>
                <li>✔️ Free Estimates For Any Job</li>
              </ul>
              <ul>
                <li>✔️ Locally Based, Family Run Firm</li>
                <li>✔️ Trusted 5 Star Rated Company</li>
                <li>✔️ Insurance Work Undertaken</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="w-full h-[50%] bg-blue-300"></div>
      </div>
    </Layout>
  );
}
