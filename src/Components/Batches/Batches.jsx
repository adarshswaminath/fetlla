import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import EditModal from "./EditModal";
import { headers, url } from "../Utils";
import apiCaller from "../apiCaller";

// Card component for displaying batch details
const Card = ({id, name, mentor,num_students, income }) => {
  const detils = {id, name, mentor, num_students, income }
  const navigate = useNavigate();
  const passClick = () => {
    navigate("/details", { 
      state: { 
        id:id,
        name:name,
        mentor:mentor,
        num_students:num_students,
        income: income
      } 
    });
  };

  const [isEditing, setIsEditing] = useState(false);
  const [updatedBatch, setUpdatedBatch] = useState({
    mentor,
    num_students,
    income,
  });
  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };
  // Function to close the modal
  const handleCloseModal = () => {
    setIsEditing(false);
  };
  // Function to update batch data and close modal
  const handleUpdateBatch = (updatedData) => {
    setUpdatedBatch(updatedData); // Update batch data
    setIsEditing(false); // Close the modal
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg border-l-4 border-green-500 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Batch: {name}</h2>
        <p className="text-gray-500">Mentor: {mentor}</p>
        <p className="text-gray-500">Students: {num_students}</p>
        <div className="flex items-center space-x-5">
          <button onClick={handleEditClick}>
            <AiFillEdit className="text-2xl text-green-500" />
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl">Total Income</h3>
        <p className="text-green-500 text-3xl font-bold">
          ${updatedBatch.income}
        </p>
        <button
          className="px-4 py-1.5 bg-green-500 rounded-lg text-white mt-3"
          onClick={passClick}
        >
          More Details
        </button>
      </div>
      {isEditing && (
        <EditModal
          id={id}
          batchName={name}
          onClose={handleCloseModal}
          onUpdate={handleUpdateBatch}
        />
      )}
    </div>
  );
};

// Batches component for displaying a list of batches
function Batches() {
  const [searchTerm, setSearchTerm] = useState("");
  const [response, setResponse] = useState([]);
  // @function of api call
  useEffect(() => {
    const funcEffect = async () => {
      let apiCall = await apiCaller("batch","GET");
      setResponse(apiCall);
    };
    funcEffect();
  }, []);
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
        {response.map((value) => (
          <div key={value.id}>
            <Card
              id={value.id}
              name={value.batch_name}
              mentor={value.faculty}
              num_students={value.num_students}
              income={value.total_income}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Batches;
