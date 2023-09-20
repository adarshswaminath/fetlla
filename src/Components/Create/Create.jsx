import React, { useState } from 'react';

function Create() {
  // Define state variables to store form input values
  const [batchName, setBatchName] = useState('');
  const [numStudents, setNumStudents] = useState('');
  const [mentorName, setMentorName] = useState('');
  const [totalIncome, setTotalIncome] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    // For now, let's log the form input values
    console.log({
      batchName,
      numStudents,
      mentorName,
      totalIncome,
    });
  };

  return (
    <div className='p-3'>
      <div className='max-w-md mx-auto'>
        <h2 className='text-2xl font-semibold mb-4'>Create Batch</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='batchName' className='block text-gray-700'>
              Batch Name
            </label>
            <input
              type='text'
              id='batchName'
              name='batchName'
              placeholder='Enter Batch Name'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              value={batchName}
              onChange={(e) => setBatchName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='numStudents' className='block text-gray-700'>
              Number of Students
            </label>
            <input
              type='text'
              id='numStudents'
              name='numStudents'
              placeholder='Enter Number of Students'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              value={numStudents}
              onChange={(e) => setNumStudents(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='mentorName' className='block text-gray-700'>
              Mentor Name
            </label>
            <input
              type='text'
              id='mentorName'
              name='mentorName'
              placeholder='Enter Mentor Name'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              value={mentorName}
              onChange={(e) => setMentorName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='totalIncome' className='block text-gray-700'>
              Total Income
            </label>
            <input
              type='text'
              id='totalIncome'
              name='totalIncome'
              placeholder='Enter Total Income'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500'
              value={totalIncome}
              onChange={(e) => setTotalIncome(e.target.value)}
            />
          </div>
          <button
            type='submit'
            className='w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600'
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
