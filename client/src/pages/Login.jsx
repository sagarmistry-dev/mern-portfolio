import { useState, useContext } from "react";
import { loginUserApi } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ Toggle state
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { status, data } = await loginUserApi(email, password);

      if (status === 200) {
        login(data.token);
        toast.success("Login successful!");
        window.location.href = "/admin";
      } else {
        toast.error(data.error || "Invalid credentials");
      }
    } catch (error) {
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-black px-6">
      <div className="w-full max-w-md bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 animate-fadeIn">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-300 text-gray-900 dark:text-black focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-300 text-gray-900 dark:text-black focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow-sm transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Portfolio Admin
        </p>
      </div>
    </div>
  );
};

export default Login;
