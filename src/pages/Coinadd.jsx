import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Data } from "../../Context";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
const Coinadd = () => {
  const [coin, setCoin] = useState("");
  const [address, setAddress] = useState("");
  const [platform, setPlatform] = useState("");
  const { data } = useContext(Data);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const user_id = data.user_id;


  const handleAddress = (e) => {
    e.preventDefault();
    handleCoin();
    axios.post(
      "http://127.0.0.1:8000/add_wallet_address/",
      {
        user_id: user_id,
        address: address,
        name: coin,
        identifier: platform,
      },
      {
        headers: {
          Authorization: user.access_token,
        },
      }
    )
    .then(
      (res) => {
       if (res.data.succes == true){
         toast.success(res.data.info)
         console.log(res.data)
         navigate('/dashboard')
       }else{
        toast.error(res.data.info)
       }
        
      }
    )
    .catch(err=>console.log(err))
  };

  const handleCoin = () => {
    axios.post(
      "http://127.0.0.1:8000/add_coin/",
      {
        user_id: user_id,
        coin: coin,
      },
      {
        headers: {
          Authorization: user.access_token,
        },
      }
    )
    .then((res)=>{
      if (res.data.status == true){
        toast.success(res.data.info)
        console.log(res.data)
        
      }else{
        toast.error(res.data.info)
        console.log(res.data)
      } 
    })
    .catch((err)=>console.log(err))
  };
  return (
    <div>
      <div className="container mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4 max-w-md mx-auto">
          Select Coin To Add to Your Portfolio NB: a coin can be added at a time
        </h2>
      
        <form
          method="post"
          className="max-w-md mx-auto"
          onSubmit={handleAddress}
        >
          <div className="mb-6">
          <label
            htmlFor="coin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-30 max-w-md mx-auto"
          >
            Select Coin
          </label>
          <select
            type="coin"
            id="coin"
            name="coin"
            value={coin}
            onChange={(e) => {
              setCoin(e.target.value);
              
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mx-auto w-[450px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="select">Select a coin</option>
            <option value="bitcoin" className="w-full font-bold">
              Bitcoin
            </option>
            <option value="litecoin" className="w-full font-bold">
              Litecoin
            </option>
            <option value="ethereum" className="w-full font-bold">
              Ethereum
            </option>
            <option value="ripple" className="w-full font-bold">
              Ripple
            </option>
          </select>
        </div>
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Paste address here"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="platform"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Platform
            </label>
            <input
              type="text"
              id="platform"
              name="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter platform here"
              required
            />
          </div>
          <button
            className="bg-[blue]  ml-1  w-[450px] rounded-md font-medium my-6 mx-auto py-3 text-white"
            type="submit"
          >
            Save Coin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Coinadd;
