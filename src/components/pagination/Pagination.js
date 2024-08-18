import { useState } from "react";
import "./pagination.css";
function Pagination({ setPage }) {
  const [pageNum, setPageNum] = useState(1);
  const handleNextPage = () => {
    setPageNum((s) => s + 1);
    setPage(pageNum);
  };
  const handlePreviousPage = () => {
    if (pageNum === 1) return;
    setPageNum((s) => s - 1);
    setPage(pageNum);
  };
  const disable = pageNum === 1 ? true : false;
  return (
    <div className="pagination">
      <button
        disabled={disable}
        onClick={handlePreviousPage}
        className="btn btn-primary"
      >
        Previous
      </button>
      <button onClick={handleNextPage} className="btn btn-primary">
        Next
      </button>
    </div>
  );
}

export default Pagination;
