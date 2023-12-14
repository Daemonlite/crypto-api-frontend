import { TypeAnimation } from "react-type-animation";
const Header = () => {
  return (
    <div className="text-dark">
      <div className="max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-gray-600 font-bold p-2">
          MANAGE YOUR CRYPTO ASSETS AT ONE PLACE
        </p>
        {/* <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"></h1> */}
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            We provide support for
          </p>
          <TypeAnimation
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            sequence={["Ethereum", 2000, "Bitcoin", 2000, "Litecoin", 2000]}
            wrapper="span"
            speed={20}
            //   style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <p
          className="md:text-2xl text-xl font-bold text-gray-500
     "
        >
          Enhance financial prudence by implementing comprehensive transaction
          monitoring across multiple wallet platforms to effectively manage and
          mitigate expenditures..
        </p>

        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Add Coin
        </button>
      </div>
    </div>
  );
};

export default Header;
