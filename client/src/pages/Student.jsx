export default function Student() {

  return (

    <div className="min-h-screen bg-blue-100 p-10">

      <h1 className="text-5xl font-bold text-blue-800 text-center">
        AI Tutor
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Doubt Solving
          </h2>

          <p className="mt-4">
            Ask academic questions instantly.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Personalized Learning
          </h2>

          <p className="mt-4">
            AI adapts to student learning style.
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold">
            Multi-language Support
          </h2>

          <p className="mt-4">
            Learn in Hindi and regional languages.
          </p>

        </div>

      </div>

    </div>
  );
}