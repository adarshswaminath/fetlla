export const StudentDetils = ({name, batch, fee, contactNumber }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mt-4">
        <h1 className="text-xl font-semibold mb-2">{name}</h1>
        <p className="text-gray-600">Batch: {batch}</p>
        <p className="text-gray-600">Fee Paid: {fee}</p>
        <p className="text-gray-600">Contact Number: {contactNumber}</p>
      </div>
    );
  };