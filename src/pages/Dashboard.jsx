import  { useContext } from "react";
// Correct import statement
import { Data } from "../../Context";


const Dashboard = () => {
  const { data } = useContext(Data);

  return (
    <div className="mx-auto mt-12">
      <p className="text-[black] py-6 mx-auto my-auto">Welcome {data.username}</p>
    </div>
  );
};

export default Dashboard;
