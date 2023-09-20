import React from "react";
import Card from "./Card";
import money from "../../assets/images/money.jpg";
import client from "../../assets/images/client.jpg";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineBatchPrediction } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";

function Home() {
  return (
    <div className="p-3">
      {/* hero section */}
      <div className="bg-green-500 rounded-lg shadow-lg p-12">
        <h3 className="text-xl font-bold text-white">
          Fetlla Community Management
        </h3>
        <div className="flex justify-start p-2">
          <button className="bg-white text-green-500 btn hover:bg-gray-200">
            Connect
          </button>
        </div>
      </div>
      {/* cards section */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Card bg="bg-red-500" icon={<GiTeacher />} count="10" title="Mentors" />
        <Card
          bg="bg-green-500"
          icon={<PiStudentBold />}
          count="350"
          title="Students"
        />
        <Card
          bg="bg-purple-500"
          icon={<MdOutlineBatchPrediction />}
          count="28"
          title="Batches"
        />
        <Card
          bg="bg-orange-500"
          icon={<AiOutlineTeam />}
          count="30"
          title="Members"
        />
      </div>
      {/* two card section */}
      <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* first card */}
        <div className="p-12 bg-white rounded-lg shadow-md flex  space-x-5">
          <img src={money} className="h-32 w-32 rounded-lg" alt="money" />
          <div>
            <h3 className="text-2xl font-bold">$ 1000</h3>
            <p>Profit from workshops</p>
            <button className="btn bg-green-500 hover:bg-green-400 text-white">
              Check out
            </button>
          </div>
        </div>

        {/* second card */}
        <div className="p-12 bg-white rounded-lg shadow-md flex space-x-5">
          <img src={client} className="h-32 w-32 rounded-lg" alt="client" />

          <div>
            <h3 className="text-2xl font-bold">$ 12000</h3>
            <p>Profit Client Based Works</p>
            <button className="btn bg-green-500 hover:bg-green-400 text-white">Check out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
