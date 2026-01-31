import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div className="join flex justify-center gap-2 my-10">
      <button
        className="join-item btn btn-outline"
        onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1))}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            className={`join-item btn btn-outline ${currentPage === page ? "btn-active bg-blue-600 text-white border-blue-700" : ""}`}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ),
      )}
      {/* <button className="join-item btn btn-disabled text-black text-2xl p-0">
        ...
      </button> */}
      <button
        className="join-item btn btn-outline"
        onClick={() =>
          setCurrentPage((prev) => (prev == totalPages ? prev : prev + 1))
        }
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
