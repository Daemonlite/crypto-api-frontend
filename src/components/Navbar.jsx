import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import { Data } from "../../Context";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const { setData } = useContext(Data);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const token = user?.access_token; // Use optional chaining to avoid errors if user is null

  const { decodedToken } = useJwt(token);
  // save the decoded token to context

  if (decodedToken) {
    setData(decodedToken);
  }

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-dark">
        <h1 className="w-full text-3xl font-bold text-[bg-[#ddd]]">
          Daemonlite
        </h1>

        {user && (
          <ul className="hidden md:flex">
            <li className="p-4 hover:cursor-pointer" onClick={()=>navigate('/dashboard')}>Home</li>
            <li className="p-4 hover:cursor-pointer">Cryptos</li>
            <li className="p-4 hover:cursor-pointer">Market </li>
          </ul>
        )}
        {user && (
          <button
            onClick={handleLogout}
            className="bg-[#ddd] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hidden lg:block md:block"
          >
            Logout
          </button>
        )}
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fff] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold bg-[text-[#ddd]] m-4 mr-1">
            Daemonlite.
          </h1>

          <ol className="uppercase p-4">
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              Home
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              Cryptos
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              Market{" "}
            </li>
          </ol>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-[#ddd] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black ml-3"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/")}
              className="bg-[#ddd] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black "
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
