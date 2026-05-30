export default function Healthcare() {

  return (

    <div className="min-h-screen bg-red-100 p-10">

      <h1 className="text-5xl font-bold text-red-800 text-center">
        Healthcare Assistance
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Symptom Checker
          </h2>

          <p className="mt-4">
            AI-based primary health guidance.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Nearby Hospitals
          </h2>

          <p className="mt-4">
            Find healthcare centers quickly.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Emergency Help
          </h2>

          <p className="mt-4">
            Fast emergency assistance support.
          </p>

        </div>

      </div>

    </div>
  );
}