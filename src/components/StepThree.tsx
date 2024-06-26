import React from "react";

interface ConfirmationProps {
  data: any;
  onPrev: () => void;
  onSubmit: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({
  data,
  onPrev,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="max-w-sm mx-auto px-4 space-y-8">
      <h2 className="text-2xl font-semibold mb-8">Step 3: Confirmation</h2>
      <div className="confirmation-details space-y-4">
        <div className="flex justify-between">
          <strong className="text-gray-700 dark:text-white">Name:</strong>
          <span className="text-black dark:text-gray-200">{data.name}</span>
        </div>
        <div className="flex justify-between">
          <strong className="text-gray-700 dark:text-white">Email:</strong>
          <span className="text-black dark:text-gray-200">{data.email}</span>
        </div>
        <div className="flex justify-between">
          <strong className="text-gray-700 dark:text-white">Phone:</strong>
          <span className="text-black dark:text-gray-200">{data.phone}</span>
        </div>
        <div className="flex justify-between">
          <strong className="text-gray-700 dark:text-white">
            Address Line 1:
          </strong>
          <span className="text-black dark:text-gray-200">
            {data.addressLine1}
          </span>
        </div>
        <div className="flex justify-between">
          <strong className="text-gray-700 dark:text-white">
            Address Line 2:
          </strong>
          <span className="text-black dark:text-gray-200">
            {data.addressLine2}
          </span>
        </div>
        <div className="flex justify-between">
          <strong className="text-gray-700 dark:text-white">City:</strong>
          <span className="text-black dark:text-gray-200">{data.city}</span>
        </div>
        <div className="flex justify-between">
          <strong className="text-gray-700 dark:text-white">State:</strong>
          <span className="text-black dark:text-gray-200">{data.state}</span>
        </div>
        <div className="flex justify-between">
          <strong className="text-gray-700 dark:text-white">Zip Code:</strong>
          <span className="text-black dark:text-gray-200">{data.zipCode}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="bg-gray-600 text-white py-2 px-4 rounded"
        >
          Prev
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
