import { useState } from "react";
import { loginUser } from "../api/user.api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/authSlice.js";
import { useNavigate } from "@tanstack/react-router";

const LoginForm = ({ state }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await loginUser(password, email);
      dispatch(login(data.user));
      setLoading(false);
      navigate({ to: "/dashboard" });
    } catch (error) {
      setLoading(false);
      setError(
        error.response.data.message ||
          "Login failed, Please check your Credentials."
      );
      console.log(error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Login
      </h2>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      <div className="mb-6">
        <label
          className="block text-gray-800 text-sm font-semibold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-800 text-sm font-semibold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </div>

      <div className="text-center mt-4">
        <p className="cursor-pointer text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => state(false)}
            className="text-blue-500 hover:text-blue-700"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};
export default LoginForm;
