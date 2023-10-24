import { AiFillDelete } from "react-icons/ai";
import { headers } from "../Utils";

export const StudentDetils = ({ id, name, batch, fee, contactNumber }) => {
  // fucntion to delete student from the batch
  const deleteStudent = async () => {
    try {
        const res = await fetch(
          `https://fetlla.pythonanywhere.com/students/${id}/`,
          {
            method: "DELETE",
            headers: headers,
          }
        );
        alert(`${name}  Sucessfully deleted`);
      } catch (error) {
        console.log(error.message);
      }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold mb-2">{name}</h1>
        <button onClick={deleteStudent}>
          <AiFillDelete className="text-xl text-red-500" />
        </button>
      </div>
      <p className="text-gray-600">Batch: {batch}</p>
      <p className="text-gray-600">Fee Paid: {fee}</p>
      <p className="text-gray-600">Contact Number: {contactNumber}</p>
    </div>
  );
};
