export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 border rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}