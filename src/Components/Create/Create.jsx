import React, { useState } from "react";
import { createBatchPost } from "../../ApiService/api";

function Create() {

  // Define state variables to store form input values
  // @dev refference
  // const formValues = {
  //   batchName: "",
  //   mentorName: "",
  //   totalIncome: 0,
  //   numOfstudents: 0,
  // }
  // // @dev formData is obj collect userinput
  // const [formData,setFormData] = useState(formValues)
  // // @dev function of onChange
  // const handleChange = (e) => {
  //   setFormData({...formData,[e.target.name]: e.target.value });
  // }


  const [batchName, setBatchName] = useState('');
  const [numStudents, setNumStudents] = useState('');
  const [faculty, setFaculty] = useState('');
  const [totalIncome, setTotalIcome] = useState('');
  const [totalExpense, setTotalExpense] = useState('');

  const [submittedBatchData,setsubmittedBatchData] = useState(null)

  const handleCreateBatch = (e)=>{
    e.preventDefault()
    const formData = {
      batch_name : batchName,
      num_students : numStudents,
      faculty : faculty,
      total_income : totalIncome,
      total_expense : totalExpense
    }
    createBatchPost(formData)
    alert("succesfully logged")
    setsubmittedBatchData(formData)
    
  }


  return (
    <div className="p-3">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Create Batch</h2>
        {/* user form to collect information */}
        <div>
        <form action="" onSubmit={handleCreateBatch}>
          <div className="mb-4">
            
            <label htmlFor="batchName" className="block text-gray-700">
              Batch Name
            </label>
            <input
              type="text"
              id="batchName"
              name="batchName"
              placeholder="Enter Batch Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={batchName}
              onChange={(e)=>setBatchName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mentorName" className="block text-gray-700">
             Faculty
            </label>
            <input
              type="text"
              id="mentorName"
              name="mentorName"
              placeholder="Enter Mentor Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={faculty}
              onChange={(e)=>setFaculty(e.target.value)}
            />
          </div>
          <div className="flex space-x-3">
            <div className="mb-4">
              <label htmlFor="totalIncome" className="block text-gray-700">
                Total Income
              </label>
              <input
                type="text"
                id="totalIncome"
                name="totalIncome"
                placeholder="Enter Total Income"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={totalIncome}
                onChange={(e)=>setTotalIcome(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numOfstudents" className="block text-gray-700">
                Number of Students
              </label>
              <input
                type="text"
                id="numOfstudents"
                name="numOfstudents"
                placeholder="No.of of Students"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={numStudents}
                onChange={(e)=>setNumStudents(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numOfstudents" className="block text-gray-700">
                Total Expense
              </label>
              <input
                type="text"
                id="numOfstudents"
                name="numOfstudents"
                placeholder="No.of of Students"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={totalExpense}
                onChange={(e)=>setTotalExpense(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Create
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
