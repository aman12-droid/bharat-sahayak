export default function Farmer() {

  return (

    <div className="min-h-screen bg-green-100 p-10">

      <h1 className="text-5xl font-bold text-green-800 text-center">
        Farmer Support
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Weather Updates
          </h2>

          <p className="mt-4">
            Real-time weather information for farmers.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Crop Suggestions
          </h2>

          <p className="mt-4">
            AI-based crop recommendations.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Disease Detection
          </h2>

          <p className="mt-4">
            Identify crop diseases using AI.
          </p>

        </div>

      </div>

    </div>
  );
}