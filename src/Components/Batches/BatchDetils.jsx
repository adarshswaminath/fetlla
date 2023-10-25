import { useNavigate } from "react-router-dom";
import { AiFillDelete,AiFillPlusCircle } from "react-icons/ai";
import { headers } from "../Utils";
import { StudentDetils } from "./StudentDetils";
import { useState,useEffect } from "react";
import AddStudentModal from "./AddStudentModal";

export const BatchDetils = ({
  id,
  name,
  mentor,
  num_students,
  income,
}) => {
  const navigate = useNavigate();
   // get student detils
   const [students,setStudents] = useState([])
   useEffect(() => {
     const RequestStudents = async () => {
       try {
         const res = await fetch(`https://fetlla.pythonanywhere.com/students/`, {
           method: "GET",
           headers: headers
         })
         const data = await res.json()
         setStudents(data)
       } catch (error) {
         console.log(error.message);
       }
     }
     RequestStudents()
   },[])
  // delete the batch
  async function deleteBatch() {
    try {
      const res = await fetch(
        `https://fetlla.pythonanywhere.com/batch/${id}/`,
        {
          method: "DELETE",
          headers: headers,
        }
      );
      alert("Batch Sucess fully deleted");
      navigate("/batches");
    } catch (error) {
      console.log(error.message);
    }
  }
  const [showModal,isModalOpen] = useState(false)
  // modal Component
  function AddStudentModal() {
    return (
      <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-70'>
          <div className="flex flex-col items-center justify-center h-96 w-96 bg-white rounded-lg">
            <h2 className="text-xl">{name}</h2>
              <button className='px-5 py-2 bg-black text-white'
                  onClick={() => isModalOpen(!showModal)}
              >Close</button>
          </div>
      </div>
    )
  }
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 mx-auto my-4 w-72">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">Name: {name}</p>
          <button className="text-xl text-red-500" onClick={deleteBatch}>
            <AiFillDelete />
          </button>
        </div>
        <p className="mt-2 text-gray-600">Mentor: {mentor}</p>

        <p className="mt-2 text-gray-600">Total Students: {num_students}</p>
        <p className="mt-2 text-gray-600">Total Income: {income}</p>
      </div>

      <div className="flex items-center gap-5">
      <h3 className="text-center text-2xl mt-3 font-semibold underline decoration-green-500">
        Student detils
      </h3>
      <button className="bg-green-500 text-white rounded-lg mt-3" onClick={() => isModalOpen(!showModal)}>
        <AiFillPlusCircle className="text-2xl"/>
      </button>
      </div>
      {showModal ? (
        <AddStudentModal/>
      ) : (null)}
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* display the student detils  */}
        {students.map((student) => 
          student.batch_name == name ? (
            <StudentDetils
            key={student.id}
            id={student.id}
            name={student.student_name}
            batch={student.batch_name}
            fee={student.fee_paid}
            contactNumber={student.contact_number}
          />
          ) : null
        )}
      </div>
    </div>
  );
};
