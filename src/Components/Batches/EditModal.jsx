import React, { useState } from "react";
/**
 * EditModal component for editing batch details.
 *
 * @param {Object} props - Component props.
 * @param {string} props.batchName - The name of the batch being edited.
 * @param {function} props.onClose - Callback function to close the modal.
 * @param {function} props.onUpdate - Callback function to update batch data.
 */
const EditModal = ({id, batchName, onClose, onUpdate }) => {
  console.log(id);
    // State for form input fields
  const [newMentor, setNewMentor] = useState("");
  const [newTotalStudents, setNewTotalStudents] = useState("");
  const [newIsCompleted, setNewIsCompleted] = useState(false);
  const [newIncome, setNewIncome] = useState("");
  /**
   * Handle the update action for the batch.
   * Constructs the updated batch object and calls the onUpdate and onClose functions.
   */
  const handleUpdate = () => {
    const updatedBatch = {
      name: batchName,
      mentor: newMentor,
      totalStudents: newTotalStudents,
      isCompleted: newIsCompleted,
      income: newIncome,
    };
    console.log(updatedBatch);

    onUpdate(updatedBatch); // Call the onUpdate function to update batch data
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-70">
      <div className="bg-white w-96 rounded-lg shadow-xl">
        <div className="p-12">
          <h2 className="text-xl font-semibold mb-4">Edit Batch: {batchName}</h2>
          <div className="mb-4">
            <label className="block text-gray-600">Mentor:</label>
            <input
              type="text"
              className="input bg-gray-300"
              value={newMentor}
              onChange={(e) => setNewMentor(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Total Students:</label>
            <input
              type="number"
              className="input bg-gray-300"
              value={newTotalStudents}
              onChange={(e) => setNewTotalStudents(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center space-x-5">
            <label className="block text-gray-600">Is Completed:</label>
            <input
              type="checkbox"
              className="checkbox h-5 w-5 text-green-500"
              checked={newIsCompleted}
              onChange={() => setNewIsCompleted(!newIsCompleted)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Income:</label>
            <input
              type="number"
              className="input bg-slate-300"
              value={newIncome}
              onChange={(e) => setNewIncome(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
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
