import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/login/", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.success == true) {
          toast.success("login successful");
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          console.log(res.data);
          navigate("/dashboard");
        } else {
            toast.error(res.data.info);
        }
        setPassword("");
        setEmail("");
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4 max-w-md mx-auto">
        Log into account
      </h2>
      <form method="post" className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          className="bg-[blue]  ml-1  w-[450px] rounded-md font-medium my-6 mx-auto py-3 text-white"
          type="submit"
        >
          Login
        </button>
        <p>
          don`t have an account?{" "}
          <a href="/register" className="text-[blue]">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
