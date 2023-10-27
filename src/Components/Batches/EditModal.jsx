import axios from "axios";
import React, { useState } from "react";
import { headers } from "../Utils";
/**
 * EditModal component for editing batch details.
 *
 * @param {Object} props - Component props.
 * @param {string} props.batchName - The name of the batch being edited.
 * @param {function} props.onClose - Callback function to close the modal.
 * @param {function} props.onUpdate - Callback function to update batch data.
 */
const EditModal = ({id, batchName, onClose, onUpdate }) => {
    // State for form input fields
  const formvalue = {
    batch_name: "",
    num_students: 0,
    faculty: "",
    total_income: 0,
    total_expense: 0
  }
  const [formData,setFormData] = useState(formvalue)
  // @dev handle form inoputs on change
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  /**
   * Handle the update action for the batch API call
   */
  const handleUpdate = async() => {
    console.log(formData);
    let url = `https://fetlla.pythonanywhere.com/batch/${id}/`
    try {
      const res = await axios.put(url,formData);
      if(res.status === 200){
        alert("Batch Sucessfully Updated")
        window.location.reload(false)
      } else {
        alert("Error While Updating Batch try again")
      }
    } catch (error) {
      alert(error.message)
    }
    onClose(); // Close the modal
  };
  const inputFields = [
    { name: 'batch_name', label: 'Batch Name' },
    {name: 'num_students',label: "Number Of Students"},
    { name: 'faculty', label: 'Faculty' },
    { name: 'total_income', label: 'Total Income' },
    { name: 'total_expense', label: 'Total Expense' },
  ];
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-70">
      <div className="bg-white w-96 rounded-lg shadow-xl">
        <div className="p-12">
          <h2 className="text-xl font-semibold mb-4">Edit Batch: {batchName}</h2>
          {/* input section */}
          {inputFields.map((field) => (
             <input
             key={field.name} 
             placeholder={field.label}
             type="text" 
             name={field.name}
             // value={formData.batch_name}
             onChange={handleChange}
             className="p-2 bg-gray-200 rounded-lg input mt-2"
             />
          ))}

          <div className="flex justify-end py-3">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg mr-2"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
