import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function FilterModal(props) {
  const [filterDate, setFilterDate] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const toastStyle = {
    style: {
      borderRadius: "12px",
      padding: "12px",
      color: "#02020a",
      backgroundColor: "#FFFFFF",
    },
  };

  useEffect(() => {
    if (props.filtersObject) {
      setFilterDate(props.filtersObject.date || "");
      setFilterName(props.filtersObject.name || "");
      setFilterLocation(props.filtersObject.location || "");
    }
  }, [props.filtersObject]);

  if (props.hide) {
    return null;
  }

  const handleAddFilters = (filterDate, filterName, filterLocation) => {
    const params = { date: "", name: "", location: "" };
    const dateRegEx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    let toastMessage = "";

    if (dateRegEx.test(filterDate) && filterDate !== "") {
      params.date = filterDate;
      toastMessage += "Added Date Filter: " + params.date + "\n";
      setFilterDate("");
    }

    if (filterName !== "") {
      params.name = filterName;
      toastMessage += "Added Name Filter: " + params.name + "\n";
      setFilterName("");
    }
    if (filterLocation !== "") {
      params.location = filterLocation;
      toastMessage += "Added Location Filter: " + params.location + "\n";
      setFilterLocation("");
    }

    if (toastMessage) {
      toast(toastMessage, toastStyle);
    }

    props.setFiltersObject(params);
  };

  const handleClose = () => {
    props.setHide(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="shadow-sm bg-gray-700 rounded-xl shadow-lg w-full max-w-md p-6 mx-4">
        <div className="border-b pb-3 mb-4">
          <h4 className="text-xl font-semibold text-white-800 text-center">
            Filter Exam Sessions
          </h4>
        </div>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="datetime"
              className="block text-sm font-medium text-white-700 mb-1"
            >
              Date
            </label>
            <input
              type="datetime"
              name="datetime"
              id="datetime-field"
              value={filterDate}
              onInput={(event) => setFilterDate(event.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
            />
          </div>
          <div>
            <label
              htmlFor="candidate-name"
              className="block text-sm font-medium text-white-700 mb-1"
            >
              Candidate Name
            </label>
            <input
              type="text"
              name="candidate-name"
              value={filterName}
              onInput={(event) => setFilterName(event.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-white-700 mb-1"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              value={filterLocation}
              onInput={(event) => setFilterLocation(event.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700"
            />
          </div>
          <div className="text-center pt-2">
            <button
              className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
              id="AddFilterButton"
              onClick={() =>
                handleAddFilters(filterDate, filterName, filterLocation)
              }
            >
              + Add Filters
            </button>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            className="px-4 py-2 bg-gray-400 text-white-800 rounded-lg hover:bg-gray-400 transition-all duration-200"
            onClick={() => handleClose()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
