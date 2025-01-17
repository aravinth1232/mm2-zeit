import React, { useState } from "react";
import readXlsxFile from "read-excel-file";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileData, setFileData] = useState([]);
  const [successRows, setSuccessRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Number of rows to display per page

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      readXlsxFile(file).then((rows) => {
        const headers = rows[0]; // First row as headers
        const data = rows.slice(1).map((row) =>
          row.reduce((acc, value, idx) => {
            acc[headers[idx]] = value; // Map headers to row values
            return acc;
          }, {})
        );
        setFileData(data);
        console.log(data);
      });
    }
  };

  const handleSubmitAll = () => {
    fileData.forEach((row, index) => {
      console.log("Product:", row);
      // Simulate success for each row
      setTimeout(() => {
        setSuccessRows((prev) => [...prev, index]); // Mark row as successful
      }, 2000);
    });
    console.log("all products added")
  };

  const totalPages = Math.ceil(fileData.length / rowsPerPage);
  const paginatedData = fileData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="border-2 px-4 py-2"
      >
        Add Product via File
      </button>

      {isModalOpen && (
        <>
          <section
            className="fixed inset-0 bg-gray-100 flex items-center justify-center px-4"
            style={{ overflow: "auto" }}
          >
            <div className="bg-white border rounded-lg shadow-lg relative w-full  h-[80vh] overflow-auto">
              <button
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="absolute top-2 right-2 text-red-600 font-bold"
              >
                ✕
              </button>

              <form className="flex flex-col items-start gap-4 p-4">
                <label htmlFor="file" className="font-medium">
                  Choose Excel File
                </label>
                <input
                  accept=".xlsx"
                  type="file"
                  name="file"
                  id="file"
                  onChange={handleFileChange}
                />
              </form>

              {fileData.length > 0 ? (
                <div className="p-4">
                  <div className="overflow-auto">
                    <table className="table-auto w-full border-collapse border border-gray-400">
                      <thead>
                        <tr className="bg-gray-200">
                          {Object.keys(fileData[0]).map((header) => (
                            <th
                              key={header}
                              className="border border-gray-400 px-4 py-2 text-left"
                            >
                              {header}
                            </th>
                          ))}
                          <th className="border border-gray-400 px-4 py-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paginatedData.map((row, index) => (
                          <tr key={index} className="hover:bg-gray-100">
                            {Object.values(row).map((value, idx) => (
                              <td
                                key={idx}
                                className="border border-gray-400 px-4 py-2"
                              >
                                {value}
                              </td>
                            ))}
                            <td className="border border-gray-400 px-4 py-2">
                              {successRows.includes(
                                (currentPage - 1) * rowsPerPage + index
                              ) ? (
                                <span className="text-green-600 font-bold">
                                  Success
                                </span>
                              ) : (
                                <span className="text-gray-500">Pending</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination Controls */}
                  <div className="mt-4 flex justify-center items-center gap-4">
                    <button
                      onClick={handlePrev}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 border rounded ${
                        currentPage === 1
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-blue-500 text-white hover:bg-blue-700"
                      }`}
                    >
                      Prev
                    </button>
                    <span>
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 border rounded ${
                        currentPage === totalPages
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-blue-500 text-white hover:bg-blue-700"
                      }`}
                    >
                      Next
                    </button>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={handleSubmitAll}
                      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                      Submit All
                    </button>
                  </div>
                </div>
              )
              
              :(
                <p className="p-4">
                  No products found
                </p>
              )
              
              
              }
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Form;
