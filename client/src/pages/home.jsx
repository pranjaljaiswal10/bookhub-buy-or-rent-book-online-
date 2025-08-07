import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[url(/book-bg.png)] relative bg-cover opacity-90 flex justify-center items-center h-screen ">
      <div className="bg-purple-100 max-w-xl  px-16 py-22 ">
        <h1 className="flex gap-4 justify-center  text-2xl pb-5 mb-5 text-purple-600 font-bold">
          {" "}
          <Sparkles /> LitLoop
        </h1>
        <div className="text-white flex gap-4">
          <Link
            to="/store"
            className="bg-purple-600 rounded px-3 uppercase hover:bg-purple-700 transition duration-200 py-2"
          >
            Take to the store
          </Link>
          <Link
            to="/auth"
            className="bg-purple-700 hover:bg-purple-800 transition duration-200 rounded px-3 uppercase py-2"
          >
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
