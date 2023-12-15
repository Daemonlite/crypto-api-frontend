import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";



const Register = () => {
    const [username,setUsername] = useState("")
    const [full_name,setFullname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [phonenumber,setPhonenumber] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        axios
          .post("http://127.0.0.1:8000/register/", {
            username:username,
            email:email,
            full_name:full_name,
            phone_number:phonenumber,
            password:password,
          })
          .then((res) => {
            if (res.data.success == true) {
              toast.success("register successful");
              navigate("/confirm_email");
              localStorage.setItem("mail",JSON.stringify(email))
            } else {
              toast.error(res.data.info);
            }
          })
    
          .catch((err) => console.log(err))
          .finally(() => {
            setLoading(false); 
          });

        }
    return (
      <div className="container mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4 max-w-md mx-auto">Create An Account</h2>
        <form
          method="post"
          action=""
          className="max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-dark dark:text-gray-300"
            >
              Full Name
            </label>
  
            <input
              type="text"
              value={full_name}
              onChange={(e)=>setFullname(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Full Name"
              required
            />
          </div>
  
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              value = {username}
              onChange={(e)=>setUsername(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter username"
              required
            />
          </div>
  
  
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              value = {email}
              onChange={(e)=>setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter email"
              required
            />
          </div>
  
          <div className="mb-6">
            <label
              htmlFor="phonenumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Phonenumber
            </label>
            <input
              type="number"
              value={phonenumber}
              onChange={(e)=>setPhonenumber(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Phonenumber"
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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter password"
              required
            />
          </div>
  
          <button
          className="bg-[blue]  ml-1  w-[450px] rounded-md font-medium my-6 mx-auto py-3 text-white relative"
          type="submit"
        >
          {loading && (
            <FaSpinner className="animate-spin absolute left-1/2 -ml-4 top-1/2" />
          )}
          Login
        </button>
          <p className="mb-3">already have an account? <a href="/" className="text-[blue]">Register</a></p>
        </form>
      </div>
    );
  };
  
  export default Register;
  