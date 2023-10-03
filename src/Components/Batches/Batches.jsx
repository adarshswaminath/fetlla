import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import EditModal from "./EditModal";
import axios from 'axios'
import { getBatchData } from "../../ApiService/api";
// Card component for displaying batch details
const Card = ({ name, mentor, isCompleted, totalStudents, income }) => {
  const navigate = useNavigate()
  const passClick = () => {
    console.log(name)
    navigate("/details/",{state: name})
  }

  const [isEditing, setIsEditing] = useState(false);
  const [updatedBatch, setUpdatedBatch] = useState({
    mentor,
    totalStudents,
    isCompleted,
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
    setUpdatedBatch(updatedData);  // Update batch data
    setIsEditing(false); // Close the modal
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg border-l-4 border-green-500 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Batch: {name}</h2>
        <p className="text-gray-500">Mentor: {mentor}</p>
        <p className="text-gray-500">Students: {totalStudents}</p>
        <div className="flex items-center space-x-5">
          <p className={`text-${isCompleted ? "green" : "red"}-500 font-semibold`}>
            {isCompleted ? (
              <span className="text-green-500">Completed</span>
            ) : (
              <span className="text-red-500">Not Completed</span>
            )}
          </p>
          <button onClick={handleEditClick}>
            <AiFillEdit className="text-2xl text-green-500" />
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-xl">Total Income</h3>
        <p className="text-green-500 text-3xl font-bold">${updatedBatch.income}</p>
        
        <Link to={`/details/${id}`}>
        <button
          className="px-4 py-1.5 bg-green-500 rounded-lg text-white mt-3"
          
        >
          More Details
        </button>
        </Link>
      </div>
      {isEditing && (
        <EditModal
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
  const [batchDetails,setBatchDetails] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBatchData()
      setBatchDetails(data)
    }
    fetchData()
  },[]);
  
  

  return (
    <div className="p-3">
      <div className="flex gap-2 items-center mb-3">
        <Link to={`/details/${id}`}>
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
        {
          
          batchDetails.map((batch)=>(
            <Card 
              key={batch.id}
              id={batch.id}
              name={batch.batch_name}
              mentor={batch.faculty} 
              totalStudents={batch.num_students} 
              isCompleted={false} 
              income={batch.total_income} 
            />
          ))
        }
        
      </div>
    </div>
  );
}

export default Batches;
