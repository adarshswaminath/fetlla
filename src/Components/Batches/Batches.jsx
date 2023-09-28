import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link ,useNavigate} from "react-router-dom";

const Card = ({ name, mentor, isCompleted, totalStudents, income }) => {
  // pass data from here to details
  const navigate = useNavigate()
  // send the clicked batch name to details
  const passClick = () => {
    console.log(name)
    navigate("/details",{state: name})
  }
  return (
    <div className="bg-white p-4 shadow-md rounded-lg border-l-4 border-green-500 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Batch: {name}</h2>
        <p className="text-gray-500">Mentor: {mentor}</p>
        <p className="text-gray-500">Students: {totalStudents}</p>
        <p
          className={`text-${isCompleted ? "green" : "red"}-500 font-semibold`}
        >
          {isCompleted ? (
            <span className="text-green-500">Completed</span>
          ) : (
            <span className="text-red-500">Not Completed</span>
          )}
        </p>
      </div>
      <div>
        <h3 className="text-xl">Total Income</h3>
        <p className="text-green-500 text-3xl font-bold">${income}</p>
      
        <button className="px-4 py-1.5 bg-green-500 rounded-lg text-white mt-3"
          onClick={passClick}
        >More Details</button>
      </div>
    </div>
  );
};

function Batches() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="p-3">
      <div className="flex gap-2 items-center mb-3">
        <Link to="/create">
          <button className="px-4 py-4 rounded-full bg-green-500 text-white hover:bg-green-500 font-semibold group">
            <AiOutlinePlus className="group-hover:rotate-90 transition ease-in delay-200 duration-100 text-xl" />
          </button>
        </Link>
        <input
          type="text"
          placeholder="Type Batch Name..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input bg-gray-300"
        />
      </div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card
              name="B1"
              mentor="Mentor name"
              totalStudents={10}
              isCompleted={false}
              income={1200}
            />
      </div>
    </div>
  );
}

export default Batches;
