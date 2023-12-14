import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Confirm = () => {
    const [otp, setOtp] = useState(0);
    const navigate = useNavigate();
  
    const mail = JSON.parse(localStorage.getItem('mail'));
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post('http://127.0.0.1:8000/verify/', {
          email: mail,
          otp_code: otp,
        })
        .then((res) => {
          if (res.data.success === true) {
            toast.success('Email verified ');
            localStorage.setItem('userInfo', JSON.stringify(res.data));
            console.log(res.data);
            localStorage.removeItem("mail")
            navigate('/dashboard');
            
          } else {
            toast.error(res.data.info);
          }
        })
        .catch((err) => console.log(err));
    };
  
    const resendOtp = () => {
      axios.post('http://127.0.0.1:8000/resend_otp/',{
           email:mail
      })
      .then((res)=>{
        if (res.data.success === true){
          toast.warning('Otp sent')
        }else{
          toast.error(res.data.info)
        }
      })

    }

  return (
    <div className="container mx-auto mt-12 w-[400px]">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Confirm Email</h2>
        <p className='l'>An otp verification code was sent to {mail} kindly check and input the code below</p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
            OTP Code:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="otp"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <div className="flex items-center  justify-evenly">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Confirm
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={resendOtp}
          >
            resend otp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Confirm;
