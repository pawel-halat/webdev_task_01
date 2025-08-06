interface Props<T> {
  startIndex: number;
  endIndex: number;
  sortedData: T[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  setCurrentPage: (page: number) => void;
}

export const TablePagination = <T,>({
  startIndex,
  endIndex,
  sortedData,
  currentPage,
  totalPages,
  setCurrentPage,
}: Props<T>) => {
  return (
    <div className="flex items-center justify-between mt-4 px-4 py-3 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">
          Showing {startIndex} to {endIndex} of {sortedData.length} results
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setCurrentPage(0)}
          disabled={currentPage === 0}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
        >
          First
        </button>
        <button
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
        >
          Previous
        </button>
        <span className="px-3 py-1 text-sm text-gray-700">
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
          }
          disabled={currentPage >= totalPages - 1}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
        >
          Next
        </button>
        <button
          onClick={() => setCurrentPage(totalPages - 1)}
          disabled={currentPage >= totalPages - 1}
          className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
        >
          Last
        </button>
      </div>
    </div>
  );
};
