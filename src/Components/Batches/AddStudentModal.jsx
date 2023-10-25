import React from 'react'

function AddStudentModal() {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-70'>
        <div className="flex items-center justify-center h-96 w-96 bg-white rounded-lg">
            <button className='px-5 py-2 bg-black text-white'
                onClick={() => isModalOpen(!showModal)}
            >Close</button>
        </div>
    </div>
  )
}

export default AddStudentModal