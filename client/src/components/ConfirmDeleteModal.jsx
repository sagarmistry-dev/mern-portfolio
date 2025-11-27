const ConfirmDeleteModal = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg w-full max-w-sm p-6 animate-fadeIn">
        
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
          Confirm Deletion
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Are you sure you want to delete this project? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
