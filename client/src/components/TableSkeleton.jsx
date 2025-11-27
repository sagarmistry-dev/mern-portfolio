const TableSkeleton = () => {
  return (
    <div className="animate-pulse space-y-3">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex justify-between bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
        >
          {/* Title column */}
          <div className="w-1/4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>

          {/* Tech Stack column */}
          <div className="w-1/3 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;
