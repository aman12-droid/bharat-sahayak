import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-green-600 text-white">
      <div className="text-center p-10">
        <h1 className="text-6xl font-bold">
          Bharat Sahayak
        </h1>

        <p className="mt-5 text-xl">
          AI-Powered Assistant for Every Indian
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-black px-6 py-3 rounded-xl"
          >
            Get Started
          </button>

          <Link to="/chatbot">
            <button className="border border-white px-6 py-3 rounded-xl">
              Try AI Assistant
            </button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 p-10">
        <Link to="/farmer">
          <div className="bg-white text-black p-6 rounded-2xl hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold">
              Farmer Support
            </h2>

            <p className="mt-3">
              Crop advice and weather updates
            </p>
          </div>
        </Link>

        <Link to="/student">
          <div className="bg-white text-black p-6 rounded-2xl hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold">
              AI Tutor
            </h2>

            <p className="mt-3">
              Student doubt solving
            </p>
          </div>
        </Link>

        <Link to="/healthcare">
          <div className="bg-white text-black p-6 rounded-2xl hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-bold">
              Healthcare
            </h2>

            <p className="mt-3">
              AI health guidance
            </p>
          </div>
        </Link>

        <div className="bg-white text-black p-6 rounded-2xl hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold">
            Government Schemes
          </h2>

          <p className="mt-3">
            Find schemes and benefits
          </p>
        </div>
      </div>
    </div>
  );
}