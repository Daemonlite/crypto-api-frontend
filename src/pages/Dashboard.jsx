// import  { useContext } from "react";
// // Correct import statement
// import { Data } from "../../Context";
import Header from "../components/Header";
import Analytics from "../components/Analytics";

// import back from '../assets/back.jpg';
// import astr from '../assets/astr.webp';
import Footer from "../components/Footer";

const Dashboard = () => {
//   const { data } = useContext(Data);

  return (
   <div >
   <Header/>
   <Analytics/>
   <Footer/>
   </div>
  );
};

export default Dashboard;

